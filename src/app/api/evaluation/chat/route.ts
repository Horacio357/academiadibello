import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import prisma from '@/lib/prisma';
import { auth } from '@/auth';

// Initialize OpenAI client with DeepSeek base URL
const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com/v1',
  apiKey: process.env.DEEPSEEK_API_KEY || 'dummy_key',
});

export async function POST(req: Request) {
  try {
    const session = await auth();
    
    // In a real scenario, uncomment this to enforce authentication
    // if (!session || !session.user) {
    //   return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    // }
    
    // For local dev simulation without forced login:
    const userId = session?.user?.id || 'simulated_user_id';

    const { messages, lessonId } = await req.json();

    if (!lessonId || !messages) {
      return NextResponse.json({ error: 'Faltan parámetros' }, { status: 400 });
    }

    // 1. Check AI usage limit for this evaluation
    let evaluation = await prisma.lessonEvaluation.findUnique({
      where: {
        userId_lessonId: {
          userId,
          lessonId,
        }
      }
    });

    if (!evaluation) {
      // Create record if it's the first time
      // Note: In real app, user must exist in DB. We skip create if simulating.
      if (userId !== 'simulated_user_id') {
         evaluation = await prisma.lessonEvaluation.create({
           data: { userId, lessonId, aiQuestionsUsed: 0 }
         });
      } else {
         evaluation = { aiQuestionsUsed: 0 } as any;
      }
    }

    if (evaluation && evaluation.aiQuestionsUsed >= 3) {
      return NextResponse.json(
        { error: 'Has alcanzado el límite de 3 preguntas para esta evaluación.' },
        { status: 403 }
      );
    }

    // 2. Call DeepSeek API
    // We prepend a system message to instruct the AI to act as an expert Coach
    const systemMessage = {
      role: 'system',
      content: 'Eres un entrenador experto en Powerlifting, Biomecánica y Levantamiento Olímpico. Responde de forma concisa, técnica y directa. Ayudas a los alumnos a resolver dudas sobre su evaluación. No des respuestas completas de exámenes, guíalos a pensar.',
    };

    const response = await openai.chat.completions.create({
      model: 'deepseek-chat', // or deepseek-coder depending on their exact model name
      messages: [systemMessage, ...messages],
      temperature: 0.7,
      max_tokens: 500,
    });

    // 3. Increment usage counter
    if (userId !== 'simulated_user_id') {
      await prisma.lessonEvaluation.update({
        where: {
           userId_lessonId: { userId, lessonId }
        },
        data: {
          aiQuestionsUsed: { increment: 1 }
        }
      });
    }

    const aiMessage = response.choices[0].message;

    return NextResponse.json({ 
      message: aiMessage,
      questionsLeft: 3 - ((evaluation?.aiQuestionsUsed || 0) + 1)
    });

  } catch (error: any) {
    console.error('Error in Evaluation Chat API:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

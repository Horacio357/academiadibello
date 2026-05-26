"use client";

import { useState } from "react";
import { Send, Bot, AlertCircle } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function EvaluationChatWidget({ lessonId }: { lessonId: string }) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Soy tu Coach IA. ¿Tienes alguna duda técnica antes de responder la evaluación? Recuerda que solo puedo responder 3 preguntas en esta sesión." }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [questionsLeft, setQuestionsLeft] = useState(3);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async () => {
    if (!input.trim() || questionsLeft <= 0 || isLoading) return;

    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      // API call to our backend which talks to DeepSeek
      const response = await fetch("/api/evaluation/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lessonId,
          messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content }))
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ocurrió un error");
      }

      setMessages((prev) => [...prev, data.message]);
      setQuestionsLeft(data.questionsLeft);
      
    } catch (err: any) {
      setError(err.message);
      // Remove the user message if it failed or keep it and show error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col bg-[#111111] border border-brand-lightgray rounded-xl overflow-hidden h-[500px]">
      {/* Header */}
      <div className="p-4 bg-brand-darkgray border-b border-brand-lightgray flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-brand-red" />
          <h3 className="font-bold text-sm">Asistente IA (DeepSeek)</h3>
        </div>
        <div className={`text-xs font-bold px-2 py-1 rounded ${questionsLeft > 0 ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}>
          Consultas: {questionsLeft}/3
        </div>
      </div>

      {/* Messages Window */}
      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] rounded-lg p-3 text-sm ${
              msg.role === "user" 
                ? "bg-brand-red text-white" 
                : "bg-brand-darkgray text-gray-300 border border-brand-lightgray"
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-brand-darkgray text-gray-300 border border-brand-lightgray rounded-lg p-3 text-sm flex gap-1 items-center">
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></span>
            </div>
          </div>
        )}
        {error && (
          <div className="flex justify-center">
             <div className="text-xs text-red-500 bg-red-950/50 px-3 py-2 rounded-md flex items-center gap-2">
               <AlertCircle className="w-4 h-4" />
               {error}
             </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-3 border-t border-brand-lightgray bg-brand-black">
        <form 
          onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={questionsLeft <= 0 || isLoading}
            placeholder={questionsLeft > 0 ? "Pregunta tus dudas técnicas..." : "Límite alcanzado"}
            className="flex-1 bg-brand-darkgray border border-gray-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-red disabled:opacity-50 transition-colors"
          />
          <button
            type="submit"
            disabled={!input.trim() || questionsLeft <= 0 || isLoading}
            className="bg-brand-red text-white p-2 rounded-md hover:bg-brand-red-hover disabled:opacity-50 disabled:hover:bg-brand-red transition-colors flex items-center justify-center"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

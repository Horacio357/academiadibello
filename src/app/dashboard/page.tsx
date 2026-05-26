import Link from "next/link";
import { PlayCircle, Clock, Trophy, BookOpen } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Hola, Juan!</h1>
        <p className="text-gray-400">Continúa donde lo dejaste y mantén el progreso.</p>
      </div>

      {/* Continue Learning Card - High Priority */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-brand-darkgray to-brand-black border border-brand-lightgray rounded-2xl p-1 flex flex-col md:flex-row relative overflow-hidden group">
          {/* Subtle glow effect behind */}
          <div className="absolute inset-0 bg-brand-red/5 blur-3xl rounded-full translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <div className="md:w-1/3 h-48 md:h-auto bg-brand-lightgray rounded-xl relative overflow-hidden m-1 z-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-brand-black/60 flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform">
                <PlayCircle className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          
          <div className="p-8 md:w-2/3 flex flex-col justify-center z-10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-red mb-2 block">Continuar Viendo</span>
                <h2 className="text-2xl font-bold mb-1">Módulo 2: Optimización del Set-up</h2>
                <p className="text-sm text-gray-400">Curso: Biomecánica del Squat y Deadlift</p>
              </div>
            </div>
            
            <div className="mt-auto">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Progreso del curso</span>
                <span className="font-bold">45%</span>
              </div>
              <div className="h-2 w-full bg-brand-black rounded-full overflow-hidden">
                <div className="h-full bg-brand-red rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            
            <div className="mt-6">
              <Link href="/dashboard/cursos/squat-deadlift" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red hover:bg-brand-red-hover text-white font-bold rounded-lg transition-colors">
                Reanudar Clase
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Quick Info */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-brand-darkgray border border-brand-lightgray rounded-xl p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-black flex items-center justify-center">
            <Clock className="w-6 h-6 text-gray-400" />
          </div>
          <div>
            <div className="text-2xl font-bold">12h 30m</div>
            <div className="text-sm text-gray-400">Tiempo de estudio</div>
          </div>
        </div>
        <div className="bg-brand-darkgray border border-brand-lightgray rounded-xl p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-black flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-gray-400" />
          </div>
          <div>
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm text-gray-400">Cursos activos</div>
          </div>
        </div>
        <div className="bg-brand-darkgray border border-brand-lightgray rounded-xl p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-black flex items-center justify-center">
            <Trophy className="w-6 h-6 text-brand-red" />
          </div>
          <div>
            <div className="text-2xl font-bold">1</div>
            <div className="text-sm text-gray-400">Certificados</div>
          </div>
        </div>
      </section>

      {/* Enrolled Courses */}
      <section>
        <h3 className="text-xl font-bold mb-6">Mis Cursos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Active Course Card */}
          <Link href="/dashboard/cursos/squat-deadlift" className="bg-brand-darkgray border border-brand-lightgray rounded-xl overflow-hidden hover:border-brand-red/50 transition-colors group">
            <div className="h-40 bg-brand-lightgray relative">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darkgray to-transparent z-10"></div>
            </div>
            <div className="p-5">
              <h4 className="font-bold mb-1 group-hover:text-brand-red transition-colors">Biomecánica del Squat y Deadlift</h4>
              <p className="text-xs text-gray-400 mb-4">Avanzado</p>
              
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">45% Completado</span>
                <span>8/18 Lecciones</span>
              </div>
              <div className="h-1.5 w-full bg-brand-black rounded-full overflow-hidden">
                <div className="h-full bg-brand-red rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </Link>
          
          {/* Active Course Card 2 */}
          <Link href="/dashboard/cursos/periodizacion" className="bg-brand-darkgray border border-brand-lightgray rounded-xl overflow-hidden hover:border-brand-red/50 transition-colors group">
            <div className="h-40 bg-brand-lightgray relative">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darkgray to-transparent z-10"></div>
            </div>
            <div className="p-5">
              <h4 className="font-bold mb-1 group-hover:text-brand-red transition-colors">Periodización del Entrenamiento</h4>
              <p className="text-xs text-gray-400 mb-4">Intermedio</p>
              
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">10% Completado</span>
                <span>2/20 Lecciones</span>
              </div>
              <div className="h-1.5 w-full bg-brand-black rounded-full overflow-hidden">
                <div className="h-full bg-brand-red rounded-full" style={{ width: '10%' }}></div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight, Activity, BarChart3, Video, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar Placeholder */}
      <header className="w-full border-b border-brand-lightgray bg-brand-black/80 backdrop-blur-md fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-red rounded-sm flex items-center justify-center">
              <span className="font-bold text-white text-sm">PDC</span>
            </div>
            <span className="font-bold text-xl tracking-tight">Pablo Di Bello</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#cursos" className="text-sm font-medium hover:text-brand-red transition-colors">Cursos</Link>
            <Link href="#metodologia" className="text-sm font-medium hover:text-brand-red transition-colors">Metodología</Link>
            <Link href="#entrenador" className="text-sm font-medium hover:text-brand-red transition-colors">Entrenador</Link>
          </nav>
          <div className="flex gap-4 items-center">
            <Link href="/login" className="text-sm font-medium hover:text-white text-gray-300 transition-colors">Login</Link>
            <Link href="/dashboard" className="text-sm font-medium bg-brand-red hover:bg-brand-red-hover text-white px-4 py-2 rounded-md transition-colors shadow-[0_0_15px_rgba(230,57,70,0.5)]">
              Acceder al Panel
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Gradient/Image Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-darkgray to-brand-black z-0"></div>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lightgray border border-gray-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
              <span className="text-xs font-semibold tracking-widest uppercase text-gray-300">Formación de Élite</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Domina la Técnica.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-500">Maximiza el Rendimiento.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10">
              Plataforma exclusiva para entrenadores y atletas que buscan el más alto nivel en Powerlifting, Levantamiento Olímpico y Preparación Física.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#cursos" className="px-8 py-4 bg-brand-red text-white font-bold rounded-md hover:bg-brand-red-hover transition-all shadow-[0_0_20px_rgba(230,57,70,0.4)] flex items-center justify-center gap-2 group">
                Explorar Cursos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#metodologia" className="px-8 py-4 bg-transparent border border-gray-600 text-white font-bold rounded-md hover:bg-brand-lightgray transition-all flex items-center justify-center">
                Nuestra Metodología
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Highlight Section */}
        <section id="metodologia" className="py-24 bg-brand-black relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué esta plataforma?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">No ofrecemos rutinas genéricas. Proveemos herramientas de análisis biomecánico, planificaciones avanzadas y teoría aplicada al más alto nivel.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl bg-brand-darkgray border border-brand-lightgray hover:border-brand-red/50 transition-colors">
                <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-6">
                  <Video className="w-6 h-6 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold mb-3">Análisis Biomecánico en Video</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Clases grabadas en alta calidad desglosando cada movimiento, ángulos articulares y transferencia de fuerza línea por línea.</p>
              </div>
              <div className="p-8 rounded-xl bg-brand-darkgray border border-brand-lightgray hover:border-brand-red/50 transition-colors">
                <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold mb-3">Progresiones Científicas</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Metodologías basadas en evidencia para la gestión de la fatiga, programación de bloques y peaking para competencias.</p>
              </div>
              <div className="p-8 rounded-xl bg-brand-darkgray border border-brand-lightgray hover:border-brand-red/50 transition-colors">
                <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold mb-3">Material Automatizado</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Descarga planillas de Excel automatizadas y PDFs con rutinas listas para aplicar con tus propios atletas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Showcase */}
        <section id="cursos" className="py-24 bg-brand-darkgray relative z-10 border-t border-brand-lightgray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Cursos Destacados</h2>
                <p className="text-gray-400">Eleva tu conocimiento técnico.</p>
              </div>
              <Link href="/cursos" className="hidden md:flex text-brand-red hover:text-white transition-colors items-center gap-1 font-medium">
                Ver todos <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Course Card 1 */}
              <div className="group rounded-xl overflow-hidden bg-brand-black border border-brand-lightgray hover:border-brand-red/50 transition-all flex flex-col">
                <div className="h-48 bg-brand-lightgray relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent z-10"></div>
                  {/* Placeholder for course image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600 group-hover:scale-105 transition-transform duration-500">
                    <BarChart3 className="w-16 h-16 opacity-20" />
                  </div>
                  <div className="absolute top-4 left-4 z-20 bg-brand-red text-white text-xs font-bold px-2 py-1 rounded">NUEVO</div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs font-medium text-gray-400 bg-brand-darkgray px-2 py-1 rounded">Powerlifting</span>
                    <span className="text-xs font-medium text-gray-400 bg-brand-darkgray px-2 py-1 rounded">Avanzado</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">Biomecánica del Squat y Deadlift</h3>
                  <p className="text-gray-400 text-sm mb-6 flex-grow">Optimiza tus palancas y corrige debilidades estructurales para superar tus PRs.</p>
                  <Link href="/cursos/squat-deadlift" className="w-full py-3 bg-brand-lightgray text-center font-bold rounded hover:bg-white hover:text-brand-black transition-colors">
                    Ver Detalles
                  </Link>
                </div>
              </div>

              {/* Course Card 2 */}
              <div className="group rounded-xl overflow-hidden bg-brand-black border border-brand-lightgray hover:border-brand-red/50 transition-all flex flex-col">
                <div className="h-48 bg-brand-lightgray relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600 group-hover:scale-105 transition-transform duration-500">
                    <Activity className="w-16 h-16 opacity-20" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs font-medium text-gray-400 bg-brand-darkgray px-2 py-1 rounded">Programación</span>
                    <span className="text-xs font-medium text-gray-400 bg-brand-darkgray px-2 py-1 rounded">Intermedio</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">Periodización del Entrenamiento</h3>
                  <p className="text-gray-400 text-sm mb-6 flex-grow">Aprende a estructurar mesociclos y controlar la carga de entrenamiento.</p>
                  <Link href="/cursos/periodizacion" className="w-full py-3 bg-brand-lightgray text-center font-bold rounded hover:bg-white hover:text-brand-black transition-colors">
                    Ver Detalles
                  </Link>
                </div>
              </div>

              {/* Course Card 3 */}
              <div className="group rounded-xl overflow-hidden bg-brand-black border border-brand-lightgray hover:border-brand-red/50 transition-all flex flex-col">
                <div className="h-48 bg-brand-lightgray relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600 group-hover:scale-105 transition-transform duration-500">
                    <Video className="w-16 h-16 opacity-20" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs font-medium text-gray-400 bg-brand-darkgray px-2 py-1 rounded">Lev. Olímpico</span>
                    <span className="text-xs font-medium text-gray-400 bg-brand-darkgray px-2 py-1 rounded">Élite</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">Técnica de Snatch y Clean & Jerk</h3>
                  <p className="text-gray-400 text-sm mb-6 flex-grow">Desglose milimétrico de las fases del levantamiento olímpico.</p>
                  <Link href="/cursos/olimpico" className="w-full py-3 bg-brand-lightgray text-center font-bold rounded hover:bg-white hover:text-brand-black transition-colors">
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-black border-t border-brand-lightgray py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-red rounded-sm flex items-center justify-center">
              <span className="font-bold text-white text-[10px]">PDC</span>
            </div>
            <span className="font-bold text-lg tracking-tight">Pablo Di Bello</span>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Plataforma de Cursos. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/terminos" className="text-sm text-gray-500 hover:text-white transition-colors">Términos</Link>
            <Link href="/privacidad" className="text-sm text-gray-500 hover:text-white transition-colors">Privacidad</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

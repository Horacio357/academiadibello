import Link from "next/link";
import { BookOpen, Award, User, Settings, LogOut, ChevronRight, MessageCircle } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-brand-black overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-brand-lightgray flex flex-col bg-[#111111] shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-brand-lightgray shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-red rounded-sm flex items-center justify-center">
              <span className="font-bold text-white text-[10px]">PDC</span>
            </div>
            <span className="font-bold tracking-tight">Panel Alumno</span>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-2">
          <div className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Aprendizaje</div>
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-md bg-brand-lightgray text-white font-medium">
            <BookOpen className="w-5 h-5 text-brand-red" />
            Mis Cursos
          </Link>
          <Link href="/dashboard/certificados" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-400 hover:bg-brand-darkgray hover:text-white transition-colors">
            <Award className="w-5 h-5" />
            Certificados
          </Link>

          <div className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-2">Cuenta</div>
          <Link href="/dashboard/perfil" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-400 hover:bg-brand-darkgray hover:text-white transition-colors">
            <User className="w-5 h-5" />
            Perfil
          </Link>
          <Link href="/dashboard/configuracion" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-400 hover:bg-brand-darkgray hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
            Configuración
          </Link>
        </nav>

        <div className="p-4 border-t border-brand-lightgray">
          <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-md text-gray-400 hover:bg-red-950 hover:text-red-500 transition-colors">
            <LogOut className="w-5 h-5" />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-16 border-b border-brand-lightgray bg-[#111111] flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center text-sm text-gray-400">
            <span>Dashboard</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Vista General</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-brand-darkgray border border-brand-lightgray flex items-center justify-center text-sm font-bold">
              JD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {children}
        </div>
      </main>

      {/* Floating Support Widget Placeholder */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-brand-red rounded-full shadow-[0_0_20px_rgba(230,57,70,0.4)] flex items-center justify-center hover:scale-105 transition-transform z-50">
        <MessageCircle className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}

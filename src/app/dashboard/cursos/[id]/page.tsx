"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, PlayCircle, CheckCircle, FileText, MessageSquare, Download } from "lucide-react";

export default function CoursePlayer() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] -m-6 md:-m-8">
      {/* Header */}
      <div className="h-14 border-b border-brand-lightgray flex items-center px-6 shrink-0 bg-brand-black">
        <Link href="/dashboard" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">
          <ChevronLeft className="w-4 h-4" />
          Volver al Dashboard
        </Link>
        <div className="mx-auto text-sm font-bold truncate px-4">
          Biomecánica del Squat y Deadlift
        </div>
      </div>

      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
        {/* Main Content (Video & Details) */}
        <div className="flex-1 overflow-y-auto bg-[#0a0a0a]">
          {/* Video Container (16:9 aspect ratio) */}
          <div className="w-full bg-black relative aspect-video">
            {/* Vimeo iframe placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center border-b border-brand-lightgray">
              <PlayCircle className="w-16 h-16 text-brand-red mb-4" />
              <p className="text-gray-400 font-medium">Vimeo Player Iframe (Dominio Restringido)</p>
            </div>
          </div>

          {/* Details Section */}
          <div className="p-6 md:p-8 max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Optimización del Set-up para Squat Low Bar</h1>
            
            {/* Tabs */}
            <div className="flex border-b border-brand-lightgray mb-6">
              <button 
                onClick={() => setActiveTab("description")}
                className={`pb-3 px-4 text-sm font-medium transition-colors border-b-2 ${activeTab === "description" ? "border-brand-red text-white" : "border-transparent text-gray-400 hover:text-gray-200"}`}
              >
                Descripción
              </button>
              <button 
                onClick={() => setActiveTab("resources")}
                className={`pb-3 px-4 text-sm font-medium transition-colors border-b-2 flex items-center gap-2 ${activeTab === "resources" ? "border-brand-red text-white" : "border-transparent text-gray-400 hover:text-gray-200"}`}
              >
                Recursos (2)
              </button>
              <button 
                onClick={() => setActiveTab("discussion")}
                className={`pb-3 px-4 text-sm font-medium transition-colors border-b-2 flex items-center gap-2 ${activeTab === "discussion" ? "border-brand-red text-white" : "border-transparent text-gray-400 hover:text-gray-200"}`}
              >
                Discusión
              </button>
            </div>

            {/* Tab Content */}
            <div className="text-gray-300 text-sm leading-relaxed">
              {activeTab === "description" && (
                <div className="space-y-4">
                  <p>En esta clase analizaremos la importancia de la posición de la barra, la tensión en la espalda alta (upper back) y cómo crear un estante (shelf) sólido utilizando los deltoides posteriores.</p>
                  <p>Aprenderemos a respirar (bracing) antes de sacar la barra y no después, optimizando la transferencia de fuerza desde el inicio del movimiento.</p>
                  <h3 className="text-white font-bold text-lg mt-6">Puntos Clave:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Retracción y depresión escapular.</li>
                    <li>Posición de las muñecas y agarre (False grip vs Full grip).</li>
                    <li>Walkout: El mito de los 3 pasos.</li>
                  </ul>
                </div>
              )}
              {activeTab === "resources" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-brand-darkgray border border-brand-lightgray rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-red-400" />
                      <div>
                        <div className="font-bold text-white">Checklist de Set-up (Squat)</div>
                        <div className="text-xs text-gray-500">PDF Document • 1.2 MB</div>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-brand-lightgray rounded transition-colors text-brand-red">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-brand-darkgray border border-brand-lightgray rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-green-400" />
                      <div>
                        <div className="font-bold text-white">Calculadora de Cargas (Semana 1-4)</div>
                        <div className="text-xs text-gray-500">Excel Spreadsheet • 450 KB</div>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-brand-lightgray rounded transition-colors text-brand-red">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
              {activeTab === "discussion" && (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <MessageSquare className="w-12 h-12 text-gray-600 mb-4" />
                  <h3 className="text-white font-bold mb-2">Comunidad y Soporte</h3>
                  <p className="text-gray-400 max-w-sm mb-6">Utiliza el widget de soporte en la esquina inferior para resolver tus dudas técnicas sobre esta lección con nuestro asistente IA.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar (Modules & Lessons) */}
        <div className="lg:w-80 border-l border-brand-lightgray bg-[#111111] flex flex-col shrink-0">
          <div className="p-4 border-b border-brand-lightgray shrink-0">
            <h2 className="font-bold text-white">Contenido del Curso</h2>
            <div className="flex items-center gap-2 mt-2">
              <div className="h-1.5 flex-1 bg-brand-black rounded-full overflow-hidden">
                <div className="h-full bg-brand-red rounded-full" style={{ width: '45%' }}></div>
              </div>
              <span className="text-xs text-gray-400 font-medium">8/18</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {/* Module 1 */}
            <div className="border-b border-brand-lightgray/50">
              <div className="p-4 bg-brand-darkgray/50 cursor-pointer">
                <h3 className="font-bold text-sm text-gray-300">Módulo 1: Fundamentos</h3>
                <p className="text-xs text-gray-500 mt-1">3 / 3 Completadas</p>
              </div>
              <div>
                <div className="px-4 py-3 flex items-center gap-3 hover:bg-brand-lightgray transition-colors cursor-pointer text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span className="text-sm truncate">Introducción a la Biomecánica</span>
                  <span className="text-xs ml-auto">12:40</span>
                </div>
                <div className="px-4 py-3 flex items-center gap-3 hover:bg-brand-lightgray transition-colors cursor-pointer text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span className="text-sm truncate">Anatomía Aplicada</span>
                  <span className="text-xs ml-auto">18:20</span>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="border-b border-brand-lightgray/50">
              <div className="p-4 bg-brand-darkgray cursor-pointer border-l-2 border-brand-red">
                <h3 className="font-bold text-sm text-white">Módulo 2: El Squat</h3>
                <p className="text-xs text-gray-500 mt-1">1 / 5 Completadas</p>
              </div>
              <div>
                <div className="px-4 py-3 flex items-center gap-3 bg-brand-lightgray text-white cursor-pointer relative">
                  {/* Playing indicator */}
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0 animate-pulse"></div>
                  <span className="text-sm font-medium truncate">Optimización del Set-up</span>
                  <span className="text-xs ml-auto text-brand-red">24:15</span>
                </div>
                <div className="px-4 py-3 flex items-center gap-3 hover:bg-brand-lightgray transition-colors cursor-pointer text-gray-400">
                  <PlayCircle className="w-4 h-4 shrink-0" />
                  <span className="text-sm truncate">Profundidad y Rebote</span>
                  <span className="text-xs ml-auto">19:30</span>
                </div>
                <div className="px-4 py-3 flex items-center gap-3 hover:bg-brand-lightgray transition-colors cursor-pointer text-gray-400">
                  <PlayCircle className="w-4 h-4 shrink-0" />
                  <span className="text-sm truncate">Errores Comunes: Good Morning Squat</span>
                  <span className="text-xs ml-auto">15:45</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { SearchCheck, FileSpreadsheet, Code2, Link as LinkIcon, LineChart, MessageSquare, RefreshCw, Layers, Network, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const tabs = [
  {
    id: "auditoria",
    title: "Auditoría y Analítica",
    icon: SearchCheck,
  },
  {
    id: "estandarizacion",
    title: "Estandarización",
    icon: FileSpreadsheet,
  },
  {
    id: "desarrollo",
    title: "Desarrollo a Medida",
    icon: Code2,
  }
];

export function Method() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-slate-50" id="metodo">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="text-[12px] tracking-[0.2em] uppercase text-[#0F62AC] font-bold mb-4">Metodología</div>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#131428] mb-6 tracking-tight">Nuestro Método</h2>
          
          <p className="text-slate-600 text-lg font-sans font-medium mb-8 max-w-2xl mx-auto">
            Explora nuestro ecosistema de soluciones diseñadas para mejorar la operación diaria mediante tecnología avanzada y procesos claros.
          </p>

          <div className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100 text-sm font-semibold text-[#0F62AC]">
            <LinkIcon className="w-4 h-4" />
            Integración total bajo una arquitectura
          </div>
        </div>

        {/* Dynamic Tabs Section */}
        <div className="w-full mt-10">
          
          {/* Tab Navigation */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-4">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  onMouseEnter={() => setActiveTab(tab.id)} // Hover trigger for desktop
                  className={`flex-1 flex items-center justify-center gap-3 py-5 px-6 rounded-[2rem] transition-all duration-300 ${
                    isActive 
                      ? "bg-[#131428] text-white shadow-lg shadow-[#131428]/20 scale-[1.02]" 
                      : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-100"
                  }`}
                >
                  <tab.icon className={`w-5 h-5 ${isActive ? "text-white" : "text-[#131428]"}`} />
                  <span className="font-bold text-lg tracking-tight">{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Area (Teardrop / Bubble) */}
          <div className="relative overflow-hidden bg-[#131428] rounded-[2rem] md:rounded-[3rem] shadow-2xl min-h-[500px]">
            {/* Background decorative effects */}
            <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-64 h-64 bg-white rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-64 h-64 bg-white rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

            <AnimatePresence mode="wait">
              {activeTab === "auditoria" && (
                <motion.div
                  key="auditoria"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 md:p-16 w-full flex flex-col justify-between gap-16 min-h-[1100px] lg:min-h-[750px]"
                >
                  <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 text-white z-10 lg:min-h-[350px] flex flex-col justify-center">

                      <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                        Encuesta Web de <br/>
                        <span>Análisis de Procesos</span>
                      </h3>
                      <p className="text-slate-300 text-lg font-medium leading-relaxed mb-8">
                        Diagnosticamos tu empresa con tecnología. Esta herramienta analiza la percepción interna y externa de cada área o departamento para descubrir con exactitud dónde se encuentran los <strong className="text-white">cuellos de botella, retrabajos y fricciones operativas</strong>.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-blue-50 font-medium">
                          <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                             <SearchCheck className="w-3 h-3 text-blue-300" />
                          </div>
                          Medición de percepción interdepartamental
                        </li>
                        <li className="flex items-center gap-3 text-blue-50 font-medium">
                          <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                             <LineChart className="w-3 h-3 text-blue-300" />
                          </div>
                          Dashboards directivos en tiempo real
                        </li>
                      </ul>
                    </div>

                    <div className="flex-1 w-full relative z-10">
                      <div className="relative w-full aspect-[4/3] max-w-xl mx-auto">
                        {/* Image 2 (Dashboard) in background */}
                        <div className="absolute top-0 right-0 w-[85%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-black/50 hover:-translate-y-2 transition-transform duration-500">
                          <img src="/encuesta-2.png" alt="Dashboard Directivo" className="w-full h-auto object-cover" />
                        </div>
                        
                        {/* Image 1 (Survey UI) overlapping in front */}
                        <div className="absolute bottom-0 left-0 w-[70%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-black/60 hover:-translate-y-2 transition-transform duration-500 delay-100">
                          <img src="/encuesta-1.png" alt="Interfaz de Encuesta" className="w-full h-auto object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Wins Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full z-10">
                    {/* Case 1 */}
                    <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-all flex flex-col sm:flex-row items-start gap-4 min-h-[180px] lg:min-h-[160px]">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-0 shrink-0">
                        <LineChart className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xl mb-2">Automatización de Facturación</h4>
                        <p className="text-blue-100/80 text-sm font-medium">Reducción del 90% del tiempo manual mediante OCR e integración directa con tu ERP.</p>
                      </div>
                    </div>
                    {/* Case 2 */}
                    <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-all flex flex-col sm:flex-row items-start gap-4 min-h-[180px] lg:min-h-[160px]">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-0 shrink-0">
                        <RefreshCw className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xl mb-2">Extracción de Datos</h4>
                        <p className="text-blue-100/80 text-sm font-medium">Pipelines automatizados que eliminan la doble captura entre distintos sistemas operativos de tu empresa.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "estandarizacion" && (
                <motion.div
                  key="estandarizacion"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 md:p-16 w-full flex flex-col justify-between gap-16 min-h-[1100px] lg:min-h-[750px]"
                >
                  <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 text-white z-10 lg:min-h-[350px] flex flex-col justify-center">

                      <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Orden antes del código</h3>
                      <p className="text-blue-100 text-lg font-medium leading-relaxed mb-6">
                        Mapeamos cada proceso paso a paso, creando manuales operativos claros. Sin estandarización, la automatización solo acelera el caos corporativo.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-blue-50 font-medium">
                          <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                             <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                          </div>
                          Diagramas de flujo y arquitectura
                        </li>
                        <li className="flex items-center gap-3 text-blue-50 font-medium">
                          <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                             <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                          </div>
                          Documentación técnica rigurosa
                        </li>
                      </ul>
                    </div>

                    <div className="flex-1 w-full relative z-10">
                      <div className="relative w-full aspect-[4/3] max-w-xl mx-auto flex items-center justify-center">
                        {/* Document 1 (Back) */}
                        <div className="absolute top-2 right-4 md:right-12 w-[55%] rounded-xl overflow-hidden border border-white/20 shadow-2xl shadow-black/50 rotate-[6deg] hover:rotate-12 hover:-translate-y-2 transition-all duration-500 bg-white">
                          <img src="/estandarizacion-1.png" alt="Documento Técnico 1" className="w-full h-auto object-cover blur-[2px] opacity-90" />
                        </div>
                        
                        {/* Document 2 (Front) */}
                        <div className="absolute bottom-2 left-4 md:left-12 w-[55%] rounded-xl overflow-hidden border border-white/20 shadow-2xl shadow-black/60 rotate-[-4deg] hover:rotate-0 hover:-translate-y-2 transition-all duration-500 delay-100 bg-white z-10">
                          <img src="/estandarizacion-2.png" alt="Documento Técnico 2" className="w-full h-auto object-cover blur-[2px] opacity-95" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Complementary Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full z-10">
                    {/* Case 1 */}
                    <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-all flex flex-col sm:flex-row items-start gap-4 min-h-[180px] lg:min-h-[160px]">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-0 shrink-0">
                        <Network className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xl mb-2">Mapeo de Flujos de Trabajo</h4>
                        <p className="text-blue-100/80 text-sm font-medium">Modelado visual de todas las operaciones interdependientes para eliminar redundancias y reprocesos.</p>
                      </div>
                    </div>
                    {/* Case 2 */}
                    <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-all flex flex-col sm:flex-row items-start gap-4 min-h-[180px] lg:min-h-[160px]">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-0 shrink-0">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xl mb-2">Documentación Técnica</h4>
                        <p className="text-blue-100/80 text-sm font-medium">Manuales operativos claros y actualizados que garantizan la viabilidad técnica antes de escribir una sola línea de código.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "desarrollo" && (
                <motion.div
                  key="desarrollo"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 md:p-16 w-full flex flex-col justify-between gap-16 min-h-[1100px] lg:min-h-[750px]"
                >
                  <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                    <div className="flex-1 text-white z-10 lg:min-h-[350px] flex flex-col justify-center">

                      <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                        Plataforma de <br/>
                        <span>Manejo de Personal</span>
                      </h3>
                      <p className="text-slate-300 text-lg font-medium leading-relaxed mb-8">
                        Desarrollamos sistemas centralizados que se adaptan a la realidad de tu operación. Esta plataforma corporativa automatiza el <strong className="text-white">control de asistencia mediante geocercas, gestión de solicitudes y comunicación interna</strong>.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-blue-50 font-medium">
                          <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                             <SearchCheck className="w-3 h-3 text-blue-300" />
                          </div>
                          Geolocalización y rangos de tolerancia
                        </li>
                        <li className="flex items-center gap-3 text-blue-50 font-medium">
                          <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                             <LineChart className="w-3 h-3 text-blue-300" />
                          </div>
                          Portal de empleado y muro corporativo
                        </li>
                      </ul>
                    </div>

                    <div className="flex-1 w-full relative z-10">
                      <div className="relative w-full aspect-[4/3] max-w-xl mx-auto">
                        {/* Image 2 (Map/Geo) in background */}
                        <div className="absolute top-0 left-0 w-[85%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-black/50 hover:-translate-y-2 transition-transform duration-500 relative">
                          <img src="/personal-2.png" alt="Geolocalización de Personal" className="w-full h-auto object-cover" />
                          {/* CSS Censor for client logo in top left */}
                          <div className="absolute top-[3%] left-[2%] w-[12%] h-[6%] bg-[#222327] rounded-sm backdrop-blur-md"></div>
                        </div>
                        
                        {/* Image 1 (Dashboard/Muro) overlapping in front */}
                        <div className="absolute bottom-0 right-0 w-[70%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-black/60 hover:-translate-y-2 transition-transform duration-500 delay-100 relative">
                          <img src="/personal-1.png" alt="Muro Corporativo" className="w-full h-auto object-cover" />
                          {/* CSS Censor for client logo in top left */}
                          <div className="absolute top-[4%] left-[3%] w-[15%] h-[8%] bg-[#222327] rounded-sm backdrop-blur-md"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Complementary Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full z-10">
                    {/* Case 1 */}
                    <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-all flex flex-col sm:flex-row items-start gap-4 min-h-[180px] lg:min-h-[160px]">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-0 shrink-0">
                        <LineChart className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xl mb-2">Dashboard Financiero B2B</h4>
                        <p className="text-blue-100/80 text-sm font-medium">Plataforma centralizada con analítica en tiempo real y reportería automatizada sin hojas de cálculo.</p>
                      </div>
                    </div>
                    {/* Case 2 */}
                    <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-all flex flex-col sm:flex-row items-start gap-4 min-h-[180px] lg:min-h-[160px]">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-0 shrink-0">
                        <Layers className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xl mb-2">ERP Operativo a Medida</h4>
                        <p className="text-blue-100/80 text-sm font-medium">Gestión de inventarios, procesos y envíos construida exactamente a la medida, sin pagar licencias genéricas.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>
        </div>
      </div>
    </section>
  );
}

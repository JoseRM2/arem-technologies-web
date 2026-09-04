"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useActionState } from "react";
import { sendAuditEmail } from "@/app/actions/sendEmail";

export default function AuditoriaPage() {
  const [state, formAction, isPending] = useActionState(sendAuditEmail, null);

  return (
    <main className="min-h-screen flex flex-col w-full bg-[#131428] selection:bg-[#0F62AC] selection:text-white">
      <Navbar hideLinks />
      <section className="relative w-full flex-grow flex items-center justify-center pt-32 pb-20 px-4 min-h-screen">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-[#0F62AC] opacity-20 blur-[150px]"></div>
        </div>

        <div className="max-w-3xl mx-auto w-full">
          <Link href="/" className="inline-flex items-center text-white font-bold hover:underline mb-8 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Inicio
          </Link>
          
          <div className="relative z-10 w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-12 text-center">
            <h1 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6 tracking-tight">
              Inicia tu <span className="text-[#0F62AC]">Auditoría</span>
            </h1>
            <p className="text-slate-300 text-lg mb-10">
              Descubre los cuellos de botella en tu operación actual y encuentra oportunidades inmediatas de ahorro mediante automatización.
            </p>
            
            {state?.success ? (
              <div className="bg-emerald-900/40 border border-emerald-500/30 text-emerald-100 rounded-2xl p-8 text-center max-w-xl mx-auto backdrop-blur-sm">
                <h4 className="font-bold text-xl mb-3">¡Solicitud recibida con éxito!</h4>
                <p className="text-emerald-200/80">
                  Hemos registrado tu solicitud de auditoría. Uno de nuestros consultores analizará tu caso y se pondrá en contacto contigo muy pronto.
                </p>
              </div>
            ) : (
              <form action={formAction} className="flex flex-col gap-5 text-left">
                {state?.error && (
                  <div className="bg-red-900/40 border border-red-500/30 text-red-200 px-4 py-3 rounded-xl text-sm font-medium backdrop-blur-sm">
                    {state.error}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-bold text-slate-300">Nombre</label>
                    <input name="name" id="name" required type="text" className="bg-slate-900/50 border border-white/10 text-white focus:ring-1 focus:ring-[#0F62AC] focus:border-[#0F62AC] rounded-xl h-14 px-4 outline-none transition-all" placeholder="Tu nombre" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-bold text-slate-300">Empresa</label>
                    <input name="company" id="company" required type="text" className="bg-slate-900/50 border border-white/10 text-white focus:ring-1 focus:ring-[#0F62AC] focus:border-[#0F62AC] rounded-xl h-14 px-4 outline-none transition-all" placeholder="Nombre de tu empresa" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-300">Correo Electrónico</label>
                  <input name="email" id="email" required type="email" className="bg-slate-900/50 border border-white/10 text-white focus:ring-1 focus:ring-[#0F62AC] focus:border-[#0F62AC] rounded-xl h-14 px-4 outline-none transition-all" placeholder="ejemplo@empresa.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="challenge" className="text-sm font-bold text-slate-300">Principal desafío operativo</label>
                  <textarea name="challenge" id="challenge" required className="bg-slate-900/50 border border-white/10 text-white focus:ring-1 focus:ring-[#0F62AC] focus:border-[#0F62AC] rounded-xl min-h-[120px] p-4 outline-none transition-all resize-none" placeholder="¿Qué procesos te toman más tiempo manual hoy en día?"></textarea>
                </div>
                <Button 
                  size="lg" 
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-[#0F62AC] hover:bg-[#0A4B85] text-white font-bold h-14 rounded-xl mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <span className="flex items-center justify-center">
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Procesando solicitud...
                    </span>
                  ) : (
                    "Solicitar Análisis Gratuito"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

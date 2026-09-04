"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, ArrowRight, Loader2 } from "lucide-react";
import { useActionState } from "react";
import { sendContactEmail } from "@/app/actions/sendEmail";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, null);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-slate-50" id="contacto">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="bg-white rounded-[3rem] shadow-[0_20px_60px_rgb(0,0,0,0.05)] overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          
          {/* Left Side - Dark Info */}
          <div className="w-full lg:w-5/12 bg-[#131428] p-12 md:p-16 flex flex-col justify-between relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-64 h-64 bg-[#0F62AC] rounded-full blur-[80px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-64 h-64 bg-[#0F62AC] rounded-full blur-[80px] opacity-20"></div>
            
            <div className="relative z-10">
              <div className="text-[12px] tracking-[0.2em] uppercase text-[#0F62AC] font-bold mb-4">Hablemos</div>
              <h3 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 tracking-tight leading-tight">
                ¿Listo para la transformación?
              </h3>
              <p className="text-slate-400 text-base md:text-lg mb-12 font-medium">
                No pospongas más la eficiencia. Contáctanos hoy para un diagnóstico inicial sin compromiso. <br/><br/>
                <span className="text-[#0F62AC] font-bold">Hagámoslo realidad.</span>
              </p>
            </div>

            <div className="space-y-8 relative z-10">
              <div className="flex items-center gap-6 group cursor-default">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#0F62AC] border border-white/10 group-hover:bg-[#0F62AC] group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Operación</div>
                  <div className="text-white font-medium">Global (Remoto) / Presencial</div>
                  <div className="text-slate-400 text-sm mt-1">Despliegue de agentes en sitio según los requerimientos del proyecto.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-7/12 p-12 md:p-16 bg-white">
            <div className="max-w-md mx-auto lg:ml-0">
              <div className="mb-10">
                <div className="w-20 h-20 bg-[#0F62AC]/10 rounded-full flex items-center justify-center text-[#0F62AC] mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h4 className="text-3xl font-sans font-bold text-[#131428] mb-2 tracking-tight">Envíanos un mensaje</h4>
                <p className="text-slate-500 font-medium">Te responderemos en menos de 24 horas laborables.</p>
              </div>

              {state?.success ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-6 text-center">
                  <h4 className="font-bold text-lg mb-2">¡Mensaje enviado con éxito!</h4>
                  <p className="text-emerald-700">Nos pondremos en contacto contigo a la brevedad.</p>
                </div>
              ) : (
                <form action={formAction} className="space-y-6">
                  {state?.error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium">
                      {state.error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-bold text-slate-700">Nombre Completo</Label>
                      <Input name="name" id="name" required className="bg-slate-50/50 border-slate-200 text-[#131428] focus-visible:ring-1 focus-visible:ring-[#0F62AC] focus-visible:border-[#0F62AC] rounded-xl h-14 px-4 transition-all" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-bold text-slate-700">Correo Electrónico</Label>
                      <Input name="email" id="email" type="email" required className="bg-slate-50/50 border-slate-200 text-[#131428] focus-visible:ring-1 focus-visible:ring-[#0F62AC] focus-visible:border-[#0F62AC] rounded-xl h-14 px-4 transition-all" placeholder="ejemplo@correo.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-bold text-slate-700">Mensaje</Label>
                    <Textarea 
                      name="message"
                      id="message" 
                      required 
                      className="bg-slate-50/50 border-slate-200 text-[#131428] focus-visible:ring-1 focus-visible:ring-[#0F62AC] focus-visible:border-[#0F62AC] rounded-xl min-h-[160px] resize-none transition-all p-5" 
                      placeholder="Cuéntanos sobre tu proyecto o necesidades operativas..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isPending}
                    className="w-full bg-[#131428] hover:bg-[#1a1b36] text-white h-14 rounded-xl text-base font-bold transition-all shadow-md hover:shadow-lg mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isPending ? (
                      <span className="flex items-center">
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Enviar Mensaje <ArrowRight className="ml-2 w-5 h-5" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

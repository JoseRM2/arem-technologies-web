"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, ShieldCheck, Users, Heart, Target, Star } from "lucide-react";
import { motion } from "framer-motion";

const valores = [
  {
    title: "Innovación",
    description: "Buscamos siempre la vanguardia tecnológica para ofrecer soluciones que marquen la diferencia.",
    icon: Lightbulb,
  },
  {
    title: "Calidad",
    description: "Nos comprometemos con la excelencia y el código robusto en cada proyecto que entregamos.",
    icon: ShieldCheck,
  },
  {
    title: "Colaboración",
    description: "Creemos en el poder del trabajo en equipo, tanto interno como con nuestros clientes.",
    icon: Users,
  },
  {
    title: "Integridad y Ética",
    description: "Actuamos con transparencia y responsabilidad, especialmente en el desarrollo de soluciones de IA.",
    icon: Heart,
  },
  {
    title: "Orientación al Cliente",
    description: "El éxito de nuestros clientes es nuestro propio éxito. Sus objetivos son nuestra prioridad.",
    icon: Target,
  },
  {
    title: "Excelencia Técnica",
    description: "Nuestro equipo se dedica a la maestría de las herramientas y arquitecturas más avanzadas.",
    icon: Star,
  }
];

export function Valores() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden animate-gradient-bg" id="valores">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#0F62AC] opacity-10 blur-[120px] translate-x-1/3 -translate-y-1/3 animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="text-[12px] tracking-[0.2em] uppercase text-[#0F62AC] font-bold mb-4">Cultura</div>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 tracking-tight">Valores e Identidad</h2>
          <p className="text-slate-400 text-lg font-sans font-medium">
            Nuestra cultura se basa en pilares fundamentales que guían cada decisión y proyecto. Estos son los principios que definen nuestro trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valores.map((valor, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={index}
              className="h-full"
            >
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-none h-full rounded-[2.5rem] hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="p-8 pb-4">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full border border-[#0F62AC]/30 bg-[#0F62AC]/10 flex items-center justify-center text-[#0F62AC]">
                      <valor.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-sans font-bold text-white">{valor.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 flex-grow">
                  <p className="text-slate-300 text-base font-sans font-medium leading-relaxed">
                    {valor.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
        .animate-gradient-bg {
          background: linear-gradient(-45deg, #0a0b16, #131428, #0e264a, #0c1938);
          background-size: 400% 400%;
          animation: gradient-bg 15s ease infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}

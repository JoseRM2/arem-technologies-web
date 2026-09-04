"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Server, Bot, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "SaaS Corporativo",
    description: "Plataformas en la nube escalables y seguras, optimizando operaciones remotas.",
    icon: Cloud,
  },
  {
    title: "Desarrollo On-Premise",
    description: "Sistemas en infraestructura propia para cumplir con estrictas normas de privacidad.",
    icon: Server,
  },
  {
    title: "Automatización & IA",
    description: "Agentes autónomos para procesar documentos y flujos de trabajo repetitivos.",
    icon: Bot,
  }
];

export function Solutions() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-white" id="soluciones">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <div className="text-[12px] tracking-[0.2em] uppercase text-[#0F62AC] font-bold mb-4">Arquitectura a Medida</div>
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#131428] leading-[1.1] tracking-tight">Modelos Flexibles</h2>
            </div>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-sans font-medium">
              Entendemos que cada organización tiene un nivel de madurez diferente. Diseñamos e implementamos arquitecturas que se adaptan a su realidad.
            </p>
            <ul className="space-y-5 text-slate-700 font-sans font-semibold text-base md:text-lg">
              <li className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#0F62AC]" />
                Arquitectura escalable a medida
              </li>
              <li className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#0F62AC]" />
                Seguridad de grado corporativo
              </li>
              <li className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#0F62AC]" />
                Mantenimiento y soporte continuo
              </li>
            </ul>
          </motion.div>
          
          <div className="grid gap-6 w-full">
            {solutions.map((solution, index) => (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
              >
                <Card className="bg-slate-50/70 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-[2rem] p-2">
                  <CardHeader className="flex flex-row items-center gap-5 p-6 pb-3">
                    <div className="p-3 bg-white rounded-2xl shadow-sm text-[#0F62AC]">
                      <solution.icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <CardTitle className="text-xl font-sans font-bold text-[#131428]">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-slate-500 text-sm md:text-base font-sans font-medium leading-relaxed pl-[76px]">
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

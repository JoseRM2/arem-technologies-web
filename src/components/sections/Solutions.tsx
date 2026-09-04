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
        <div className="flex flex-col gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8 max-w-3xl mx-auto text-center"
          >
            <div>
              <div className="text-[12px] tracking-[0.2em] uppercase text-[#0F62AC] font-bold mb-4">Arquitectura a Medida</div>
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#131428] leading-[1.1] tracking-tight">Modelos Flexibles</h2>
            </div>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-sans font-medium">
              Entendemos que cada organización tiene un nivel de madurez diferente. Diseñamos e implementamos arquitecturas que se adaptan a su realidad.
            </p>
            <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-slate-700 font-sans font-semibold text-base md:text-lg">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0F62AC]" />
                Arquitectura escalable a medida
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0F62AC]" />
                Seguridad de grado corporativo
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0F62AC]" />
                Soporte continuo
              </li>
            </ul>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {solutions.map((solution, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="h-full"
              >
                <Card className="bg-slate-50/70 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-[2rem] p-2 h-full flex flex-col">
                  <CardHeader className="flex flex-col items-start gap-4 p-6 pb-3">
                    <div className="p-3 bg-white rounded-2xl shadow-sm text-[#0F62AC]">
                      <solution.icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <CardTitle className="text-xl font-sans font-bold text-[#131428]">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex-grow">
                    <p className="text-slate-500 text-sm md:text-base font-sans font-medium leading-relaxed">
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

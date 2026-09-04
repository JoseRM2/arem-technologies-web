"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 animate-gradient-bg">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-[#0F62AC] opacity-20 blur-[150px] animate-pulse-slow"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center space-y-10"
        >
          {/* Logo Box */}
          <div className="w-48 h-48 bg-white rounded-[2rem] flex items-center justify-center shadow-xl mb-4 p-6 overflow-hidden relative z-10">
            <Image 
              src="/simbolo-v2.png" 
              alt="AREM Technologies Logo" 
              width={160} 
              height={160} 
              className="object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-white tracking-tight leading-tight max-w-5xl">
            Desarrollo de Software, Automatización Estratégica e <span className="text-[#0F62AC]">Inteligencia Artificial</span>
          </h1>

          <p className="text-base md:text-xl text-slate-300 max-w-2xl font-sans font-medium">
            Transformamos ideas en realidad digital. Desde startups hasta corporativos, creamos el software que define tu futuro.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <Link href="/auditoria">
              <Button size="lg" className="bg-[#0F62AC] hover:bg-[#0A4B85] text-white px-8 h-14 text-base font-semibold rounded-full transition-all shadow-lg shadow-[#0F62AC]/20 border-none">
                Inicia tu Auditoría <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#contacto">
              <Button size="lg" variant="outline" className="border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white h-14 px-8 text-base font-semibold rounded-full transition-all">
                Contáctanos
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
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

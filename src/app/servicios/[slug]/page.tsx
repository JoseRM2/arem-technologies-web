import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function ServicioPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  // Format slug back to a readable title
  const title = resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main className="min-h-screen flex flex-col w-full bg-slate-50 selection:bg-[#0F62AC] selection:text-white">
      <Navbar hideLinks />
      <section className="relative w-full flex-grow flex items-center justify-center pt-32 pb-20 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto w-full">
          <Link href="/" className="inline-flex items-center text-[#0F62AC] font-bold hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Inicio
          </Link>
          
          <div className="bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2.5rem] p-8 md:p-16">
            <div className="text-[12px] tracking-[0.2em] uppercase text-[#0F62AC] font-bold mb-4">Servicio Detallado</div>
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-[#131428] mb-8 tracking-tight">
              {title}
            </h1>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
              <p>
                Este servicio forma parte fundamental de nuestra metodología de trabajo en AREM Technologies. 
                Nos aseguramos de que cada paso esté diseñado para eliminar la fricción operativa y 
                aumentar la eficiencia en tu empresa.
              </p>
              <p>
                Próximamente, detallaremos aquí los casos de estudio, el proceso de implementación exacto y los beneficios 
                inmediatos de adoptar esta solución.
              </p>
            </div>
            
            <div className="mt-12 pt-12 border-t border-slate-100">
              <h3 className="text-xl font-bold text-[#131428] mb-4">¿Listo para transformar tu operación?</h3>
              <Link href="/#contacto">
                <Button size="lg" className="bg-[#0F62AC] hover:bg-[#0A4B85] text-white font-bold h-14 px-8 rounded-xl transition-all shadow-md shadow-[#0F62AC]/20">
                  Agendar una Llamada
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

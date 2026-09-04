import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, LineChart, RefreshCw, Network, FileText, Layers } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const serviceDetails: Record<string, { title: string, description: string, extras: Array<{ title: string, desc: string, icon: any }> }> = {
  "auditoria": {
    title: "Auditoría y Analítica Operativa",
    description: "Diagnosticamos tu empresa con tecnología. Analizamos la percepción interna y externa de cada área o departamento para descubrir con exactitud dónde se encuentran los cuellos de botella, retrabajos y fricciones operativas.",
    extras: [
      {
        title: "Automatización de Facturación",
        desc: "Reducción del 90% del tiempo manual mediante OCR e integración directa con tu ERP.",
        icon: LineChart
      },
      {
        title: "Extracción de Datos",
        desc: "Pipelines automatizados que eliminan la doble captura entre distintos sistemas operativos de tu empresa.",
        icon: RefreshCw
      }
    ]
  },
  "estandarizacion": {
    title: "Estandarización",
    description: "Orden antes del código. Mapeamos cada proceso paso a paso, creando manuales operativos claros. Sin estandarización, la automatización solo acelera el caos corporativo.",
    extras: [
      {
        title: "Mapeo de Flujos de Trabajo",
        desc: "Modelado visual de todas las operaciones interdependientes para eliminar redundancias y reprocesos.",
        icon: Network
      },
      {
        title: "Documentación Técnica",
        desc: "Manuales operativos claros y actualizados que garantizan la viabilidad técnica antes de escribir una sola línea de código.",
        icon: FileText
      }
    ]
  },
  "desarrollo": {
    title: "Desarrollo a Medida",
    description: "Desarrollamos sistemas centralizados que se adaptan a la realidad de tu operación. Automatizamos procesos clave y creamos herramientas internas diseñadas exclusivamente para cómo funciona tu negocio.",
    extras: [
      {
        title: "Dashboard Financiero B2B",
        desc: "Plataforma centralizada con analítica en tiempo real y reportería automatizada sin hojas de cálculo.",
        icon: LineChart
      },
      {
        title: "ERP Operativo a Medida",
        desc: "Gestión de inventarios, procesos y envíos construida exactamente a la medida, sin pagar licencias genéricas.",
        icon: Layers
      }
    ]
  }
};

export default async function ServicioPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  const detail = serviceDetails[resolvedParams.slug] || {
    title: resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: "Este servicio forma parte fundamental de nuestra metodología de trabajo en AREM Technologies. Nos aseguramos de que cada paso esté diseñado para eliminar la fricción operativa y aumentar la eficiencia en tu empresa.",
    extras: []
  };

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
            <h1 className="text-3xl md:text-5xl font-sans font-bold text-[#131428] mb-8 tracking-tight">
              {detail.title}
            </h1>
            
            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed font-medium mb-12">
              <p>{detail.description}</p>
            </div>

            {detail.extras.length > 0 && (
              <div className="mb-12">
                <h3 className="text-xl font-bold text-[#131428] mb-6 border-b border-slate-100 pb-4">Implementaciones Clave (Quick Wins)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {detail.extras.map((extra, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:shadow-md transition-shadow duration-300">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0F62AC] mb-4">
                        <extra.icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-[#131428] mb-2">{extra.title}</h4>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed">{extra.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-8 pt-8 border-t border-slate-100">
              <h3 className="text-xl font-bold text-[#131428] mb-4">¿Listo para transformar tu operación?</h3>
              <Link href="/#contacto">
                <Button size="lg" className="bg-[#0F62AC] hover:bg-[#0A4B85] text-white font-bold h-14 px-8 rounded-xl transition-all shadow-md shadow-[#0F62AC]/20 w-full sm:w-auto">
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

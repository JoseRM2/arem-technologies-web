
export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#131428] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex flex-col items-start justify-center">
              <span className="font-extrabold text-[52px] leading-none tracking-tighter text-white">AREM</span>
              <span className="font-bold text-[10px] leading-[1] tracking-[0.25em] uppercase text-slate-400 ml-[2px] mt-[2px]">Technologies</span>
            </div>
            <p className="text-slate-400 text-sm font-medium max-w-sm leading-relaxed mt-4">
              Creamos soluciones de software a medida que impulsan el futuro. Transformando ideas en realidad digital con IA y automatización.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Explorar</h4>
            <div className="flex flex-col gap-4 text-sm font-sans font-medium text-slate-400">
              <a href="#metodo" className="hover:text-white transition-colors">Método</a>
              <a href="#soluciones" className="hover:text-white transition-colors">Soluciones</a>
              <a href="#valores" className="hover:text-white transition-colors">Valores</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contacto</h4>
            <div className="flex flex-col gap-4 text-sm font-sans font-medium text-slate-400">
              <a href="mailto:contacto@arem.com" className="hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contacto@arem.com
              </a>
              <p className="leading-relaxed">
                Guadalajara, Jalisco<br/>México
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans font-medium text-slate-500">
          <p>© {currentYear} AREM Technologies. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacidad</a>
            <a href="#" className="hover:text-slate-300">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

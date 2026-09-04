"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Navbar({ hideLinks = false }: { hideLinks?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex flex-col items-start justify-center cursor-pointer hover:opacity-80 transition-opacity">
          <span className={`font-extrabold text-[40px] leading-none tracking-tighter ${scrolled ? "text-[#131428]" : "text-white"}`}>AREM</span>
          <span className={`font-bold text-[8px] leading-[1] tracking-[0.25em] uppercase ${scrolled ? "text-slate-600" : "text-slate-300"} ml-[2px] mt-[1px]`}>Technologies</span>
        </Link>

        <div className="flex items-center ml-auto">
          {/* Mobile Symbol Logo */}
          <div className="md:hidden">
            <img src="/icon.png" alt="AREM Logo" className="w-10 h-10 object-contain" />
          </div>

          {/* Desktop Navigation Links */}
          {!hideLinks && (
            <nav className="hidden md:flex items-center gap-8">
              <a href="/#metodo" className={`text-sm font-semibold transition-colors ${scrolled ? "text-slate-600 hover:text-[#0F62AC]" : "text-slate-300 hover:text-white"}`}>Método</a>
              <a href="/#soluciones" className={`text-sm font-semibold transition-colors ${scrolled ? "text-slate-600 hover:text-[#0F62AC]" : "text-slate-300 hover:text-white"}`}>Soluciones</a>
              <a href="/#valores" className={`text-sm font-semibold transition-colors ${scrolled ? "text-slate-600 hover:text-[#0F62AC]" : "text-slate-300 hover:text-white"}`}>Valores</a>
              <a href="/#contacto" className={`text-sm font-semibold transition-colors ${scrolled ? "text-slate-600 hover:text-[#0F62AC]" : "text-slate-300 hover:text-white"}`}>Contacto</a>
            </nav>
          )}
        </div>
      </div>
    </motion.header>
  );
}

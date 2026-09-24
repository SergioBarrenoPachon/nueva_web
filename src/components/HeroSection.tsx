"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles, ShieldCheck, Truck, Award } from "lucide-react";
import { STORE_DATA } from "@/data/catalog";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll mapping for the cinematic scale effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.7], [0.88, 1.02]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.7], ["32px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[140vh] pt-12 sm:pt-20 pb-28 flex flex-col items-center overflow-hidden"
    >
      {/* Dynamic atmospheric halos inspired by genuine pigments */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] halo-ultramarine rounded-full blur-3xl opacity-70 -z-10" />
      <div className="pointer-events-none absolute top-60 right-10 w-[450px] h-[450px] halo-ochre rounded-full blur-3xl opacity-40 -z-10" />
      <div className="pointer-events-none absolute top-96 left-10 w-[400px] h-[400px] halo-vermilion rounded-full blur-3xl opacity-30 -z-10" />

      {/* Hero Header Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="max-w-5xl mx-auto px-4 sm:px-6 text-center z-10 flex flex-col items-center"
      >
        {/* Heritage Tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs tracking-widest uppercase text-[#d4af37] border border-[#d4af37]/25 shadow-lg shadow-black/40 mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Madrid • Barrio del Pilar • Desde 1989</span>
        </motion.div>

        {/* High-Impact Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.08] mb-6"
        >
          Donde el oficio se convierte en{" "}
          <span className="italic font-normal bg-gradient-to-r from-[#8fa5ff] via-[#4d73ff] to-[#d4af37] bg-clip-text text-transparent">
            leyenda plástica.
          </span>
        </motion.h1>

        {/* Brand Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed mb-10"
        >
          Más de 35 años proveyendo pigmentos puros, el papel vegetal centenario{" "}
          <span className="text-white font-medium">Arches</span>, pinceles de
          marta seleccionada y enmarcación a medida para los artistas más
          exigentes de Madrid y España.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#taller"
            className="px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wide hover:bg-neutral-200 transition-all duration-300 shadow-xl shadow-white/10 hover:scale-[1.02] active:scale-95 flex items-center gap-2"
          >
            <span>Descubrir El Taller</span>
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#catalogo"
            className="px-8 py-4 rounded-full glass-button text-white font-medium text-sm tracking-wide hover:border-white/30 transition-all duration-300 flex items-center gap-2"
          >
            <span>Ver Catálogo Selecto</span>
            <span className="text-xs text-[#d4af37]">5.000+ ref</span>
          </a>
        </motion.div>

        {/* Live Metrics Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl glass-panel p-3.5 rounded-2xl border border-white/10"
        >
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-9 h-9 rounded-xl bg-[#2b4cde]/15 border border-[#2b4cde]/30 flex items-center justify-center text-[#6a8cff]">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-white">35+ Años de Oficio</div>
              <div className="text-[11px] text-neutral-400">Taller artesano madrileño</div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-3 py-2 border-t sm:border-t-0 sm:border-l border-white/10">
            <div className="w-9 h-9 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#e5b842]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-white">Distribuidor Oficial</div>
              <div className="text-[11px] text-neutral-400">Arches, Schmincke, Escoda</div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-3 py-2 border-t sm:border-t-0 sm:border-l border-white/10">
            <div className="w-9 h-9 rounded-xl bg-[#e63946]/15 border border-[#e63946]/30 flex items-center justify-center text-[#ff6b77]">
              <Truck className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-white">Entrega 24/48 Horas</div>
              <div className="text-[11px] text-neutral-400">Toda la península y Baleares</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Cinematic Visual Frame with Scroll-Triggered Zoom / Expansion */}
      <motion.div
        style={{
          scale,
          borderRadius,
        }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 z-20 relative transition-all duration-300"
      >
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-[28px] border border-white/15 shadow-2xl shadow-black/80 group">
          {/* High-resolution atelier image representing classical craft & oil pigments */}
          <img
            src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=2000&auto=format&fit=crop"
            alt="Atelier Bellas Artes Madrid"
            className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
          />

          {/* Cinematic Vignette and Color Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />

          {/* Floating Callout badge inside the artwork */}
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 max-w-md glass-panel-elevated p-4 sm:p-5 rounded-2xl border border-white/15 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-[10px] tracking-widest text-[#d4af37] uppercase font-bold mb-1">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
              <span>Pieza de Estudio</span>
            </div>
            <h3 className="font-editorial text-lg sm:text-xl text-white font-semibold mb-1">
              Pigmentos Puros & Algodón Francés
            </h3>
            <p className="text-xs text-neutral-300 font-light leading-relaxed">
              En Artisa no vendemos sucedáneos: cada grano de pigmento y cada fibra de lino responde a la misma exigencia que en los talleres del Renacimiento.
            </p>
          </div>

          {/* Scroll Down Prompt */}
          <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-2 text-xs text-white/70 glass-button px-4 py-2 rounded-full">
            <span>Desliza para diseccionar la técnica</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

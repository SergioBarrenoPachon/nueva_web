"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DISCIPLINES } from "@/data/catalog";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Palette } from "lucide-react";

export default function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Drive the horizontal track using vertical scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Translate track from 0% to approximately -55% to show all 5 massive cards
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-58%"]);

  return (
    <section
      id="tecnicas"
      ref={containerRef}
      className="relative h-[320vh] bg-[#08090b]"
    >
      {/* Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden py-10 z-20">
        {/* Gallery Intro Header */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2b4cde] font-bold mb-2">
              <Palette className="w-3.5 h-3.5" />
              <span>Disciplinas & Técnicas Mayores</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              El Santuario de las Técnicas
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
            Del blanco puro del papel de algodón francés a la densidad terrosa del óleo. Desliza hacia abajo para recorrer las colecciones en sentido horizontal.
          </p>
        </div>

        {/* The Horizontal Rolling Carousel Track */}
        <div className="w-full relative pl-4 sm:pl-8 lg:pl-16">
          <motion.div style={{ x }} className="flex gap-6 sm:gap-8 w-max pr-16">
            {DISCIPLINES.map((tech, index) => (
              <div
                key={tech.id}
                className="relative w-[85vw] sm:w-[540px] md:w-[620px] aspect-[16/11] rounded-3xl overflow-hidden glass-panel-elevated border border-white/15 group shrink-0 transition-transform duration-500 hover:border-white/30"
              >
                {/* Background Image with Parallax & Contrast */}
                <img
                  src={tech.image}
                  alt={tech.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase text-white shadow-lg backdrop-blur-md border"
                    style={{
                      backgroundColor: `${tech.accentColor}33`,
                      borderColor: tech.accentColor,
                    }}
                  >
                    {tech.badge}
                  </span>
                  <span className="font-editorial text-2xl font-bold text-white/30">
                    0{index + 1}
                  </span>
                </div>

                {/* Bottom Content Card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 sm:p-6 rounded-2xl glass-panel-elevated border border-white/10">
                  <div className="text-[11px] font-medium text-neutral-400 mb-1">
                    {tech.subtitle}
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-white font-bold mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed mb-4 line-clamp-2">
                    {tech.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                    <div className="text-[11px] font-medium text-[#d4af37]">
                      {tech.itemCount}
                    </div>
                    <a
                      href="#catalogo"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-[#6a8cff] transition-colors"
                    >
                      <span>Explorar Técnica</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Horizontal Scroller Indicator */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-6 flex items-center justify-between text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2b4cde]" />
            <span>Desplazamiento horizontal sincronizado con tu rueda de scroll</span>
          </div>
          <div className="flex items-center gap-2">
            <span>5 Técnicas Fundamentales</span>
          </div>
        </div>
      </div>
    </section>
  );
}

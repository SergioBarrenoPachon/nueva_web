"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { CRAFT_ANATOMY_STEPS } from "@/data/catalog";
import { Sparkles, CheckCircle2, ChevronRight, Layers, ArrowDown } from "lucide-react";

export default function TheCraftPinned() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [manualStep, setManualStep] = useState<number | null>(null);

  // Measure scroll through the tall section to drive the scrollytelling
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress (0 to 1) into active step index (0 to 3)
  const stepFloat = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 2, 3]);

  // Derived current step: manual selection takes precedence if clicked, else scroll-based
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  scrollYProgress.on("change", (latest) => {
    if (manualStep === null) {
      if (latest < 0.25) setActiveStepIndex(0);
      else if (latest < 0.55) setActiveStepIndex(1);
      else if (latest < 0.85) setActiveStepIndex(2);
      else setActiveStepIndex(3);
    }
  });

  const currentStepData = CRAFT_ANATOMY_STEPS[manualStep ?? activeStepIndex];

  // Visual highlights for each anatomical layer
  const layerImages = [
    {
      title: "Cerdas Naturales Marta & Fibras Tendo",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop",
      badge: "Capa 01: El Mechón",
      color: "#2b4cde",
    },
    {
      title: "Virola de Latón Niquelado sin Soldaduras",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=1200&auto=format&fit=crop",
      badge: "Capa 02: La Virola",
      color: "#d4af37",
    },
    {
      title: "Madera Noble de Haya Torneada a Mano",
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop",
      badge: "Capa 03: El Mango",
      color: "#e0a96d",
    },
    {
      title: "Pigmento Puro Molido a Rodillo de Pórfido",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop",
      badge: "Capa 04: El Pigmento",
      color: "#e63946",
    },
  ];

  return (
    <section id="taller" ref={targetRef} className="relative h-[360vh] bg-[#08090b]">
      {/* Sticky Fullscreen Scrollytelling Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-8 py-8 md:py-12 z-30">
        {/* Subtle Background Glow reacting to the active layer color */}
        <div
          className="pointer-events-none absolute inset-0 transition-all duration-1000 opacity-20 -z-10"
          style={{
            background: `radial-gradient(circle at 65% 50%, ${layerImages[manualStep ?? activeStepIndex].color} 0%, transparent 60%)`,
          }}
        />

        {/* Section Top Header */}
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37]">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">
                Anatomía de la Excelencia • The Craft
              </div>
              <h2 className="font-editorial text-xl sm:text-2xl text-white font-bold tracking-tight">
                Disección de un Clásico: El Pincel de Autor y el Pigmento Puro
              </h2>
            </div>
          </div>

          {/* Interactive Layer Pills (Allows click-to-explore) */}
          <div className="hidden lg:flex items-center gap-1.5 glass-panel p-1.5 rounded-full border border-white/10">
            {CRAFT_ANATOMY_STEPS.map((s, idx) => {
              const isActive = (manualStep ?? activeStepIndex) === idx;
              return (
                <button
                  key={s.step}
                  onClick={() => setManualStep(idx)}
                  className={`px-3.5 py-1 text-xs rounded-full transition-all duration-300 font-medium ${
                    isActive
                      ? "bg-white text-black font-semibold shadow-md"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  0{s.step}. {s.title.split(" ")[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Center Stage: Split Screen (Dissected Visual Left, Floating Interactive Cards Right) */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          {/* Left: Dynamic Layer Canvas / Visual Dissection */}
          <div className="lg:col-span-6 relative aspect-square sm:aspect-[4/3] rounded-3xl overflow-hidden glass-panel-elevated border border-white/15 p-2 shadow-2xl shadow-black/80 group">
            <AnimatePresence mode="wait">
              <motion.div
                key={manualStep ?? activeStepIndex}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full rounded-2xl overflow-hidden"
              >
                <img
                  src={layerImages[manualStep ?? activeStepIndex].image}
                  alt={layerImages[manualStep ?? activeStepIndex].title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Overlaid Layer Annotation */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span
                      className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mb-2 text-white border"
                      style={{
                        backgroundColor: `${layerImages[manualStep ?? activeStepIndex].color}40`,
                        borderColor: layerImages[manualStep ?? activeStepIndex].color,
                      }}
                    >
                      {layerImages[manualStep ?? activeStepIndex].badge}
                    </span>
                    <h4 className="font-editorial text-xl sm:text-2xl text-white font-bold">
                      {layerImages[manualStep ?? activeStepIndex].title}
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="font-editorial text-4xl font-bold text-white/40">
                      0{(manualStep ?? activeStepIndex) + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Glowing Accent Marker */}
            <div
              className="absolute top-6 right-6 w-3 h-3 rounded-full animate-ping"
              style={{
                backgroundColor: layerImages[manualStep ?? activeStepIndex].color,
              }}
            />
          </div>

          {/* Right: Floating Narrative and Engineering Breakdown */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={manualStep ?? activeStepIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="glass-panel-elevated p-6 sm:p-8 rounded-3xl border border-white/15 space-y-6"
              >
                {/* Layer Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest text-[#d4af37] font-mono uppercase font-bold">
                    {currentStepData.tag}
                  </span>
                  <span className="text-xs text-neutral-400">
                    Paso {(manualStep ?? activeStepIndex) + 1} de 4
                  </span>
                </div>

                {/* Heading & Subtitle */}
                <div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-white font-bold tracking-tight mb-2">
                    {currentStepData.title}
                  </h3>
                  <p className="text-sm font-medium text-neutral-300">
                    {currentStepData.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  {currentStepData.description}
                </p>

                {/* Highlight Callout */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <p className="text-xs text-neutral-200 leading-relaxed italic">
                    {currentStepData.highlight}
                  </p>
                </div>

                {/* Technical Specs Table */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  {currentStepData.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between text-xs py-1"
                    >
                      <span className="text-neutral-400 font-medium flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2b4cde]" />
                        {spec.label}
                      </span>
                      <span className="text-neutral-200 font-semibold text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Section Bottom Progress Bar and Scrollytelling Guide */}
        <div className="max-w-7xl mx-auto w-full pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2b4cde]" />
            <span className="hidden sm:inline">
              Haz scroll vertical continuo para desmontar las capas de la pieza
            </span>
            <span className="sm:hidden">Desliza para explorar las 4 capas</span>
          </div>

          <div className="flex items-center gap-3">
            {CRAFT_ANATOMY_STEPS.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  (manualStep ?? activeStepIndex) === i
                    ? "w-8 bg-white"
                    : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

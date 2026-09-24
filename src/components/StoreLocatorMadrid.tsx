"use client";

import React, { useState } from "react";
import { STORE_DATA } from "@/data/catalog";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Sparkles,
  Calendar,
  CheckCircle2,
  Send,
} from "lucide-react";

export default function StoreLocatorMadrid() {
  const [activeLocationId, setActiveLocationId] = useState("mondariz");
  const [framingBookingSent, setFramingBookingSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    type: "lienzo",
    dimensions: "",
    notes: "",
  });

  const activeStore =
    STORE_DATA.locations.find((loc) => loc.id === activeLocationId) ||
    STORE_DATA.locations[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFramingBookingSent(true);
    setTimeout(() => {
      setFramingBookingSent(false);
      setFormData({
        name: "",
        phone: "",
        type: "lienzo",
        dimensions: "",
        notes: "",
      });
    }, 4000);
  };

  return (
    <section id="madrid" className="relative py-28 bg-[#0a0c10] border-t border-white/10">
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute top-10 right-1/4 w-[500px] h-[500px] halo-ultramarine rounded-full blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Statement */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>El Oficio en Madrid • Comercio de Proximidad</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Nuestros Espacios en Madrid: Tradición Viva y Taller
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            Frente al algoritmo despersonalizado, en Artisa reivindicamos la tertulia de taller, el tacto del pliego de algodón y el asesoramiento cara a cara. Visítanos en Madrid para enmarcar tus obras o descubrir materiales exclusivos.
          </p>
        </div>

        {/* Location Selector Tabs */}
        <div className="flex gap-3 mb-8">
          {STORE_DATA.locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveLocationId(loc.id)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeLocationId === loc.id
                  ? "bg-white text-black shadow-xl"
                  : "glass-panel text-neutral-400 hover:text-white"
              }`}
            >
              <MapPin
                className={`w-4 h-4 ${
                  activeLocationId === loc.id ? "text-[#2b4cde]" : "text-neutral-500"
                }`}
              />
              <span>{loc.name}</span>
              {loc.isMain && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#2b4cde]/20 text-[#6a8cff]">
                  Sede Central
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid: Store Information & Avantgarde Map Representation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Store Card */}
          <div className="lg:col-span-5 glass-panel-elevated p-8 rounded-3xl border border-white/15 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Abierto para atención y asesoramiento</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-white font-bold">
                  {activeStore.name}
                </h3>
                <p className="text-xs text-neutral-300 font-light mt-2 leading-relaxed">
                  {activeStore.description}
                </p>
              </div>

              {/* Data points */}
              <div className="space-y-3 pt-2 border-t border-white/10 text-xs text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">
                      {activeStore.address}, {activeStore.postalCode}
                    </div>
                    <div className="text-neutral-400">{activeStore.city}</div>
                    {activeStore.metro && (
                      <div className="text-[11px] text-[#6a8cff] mt-0.5">
                        {activeStore.metro}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Lunes a Viernes:</div>
                    <div className="text-neutral-400">{activeStore.hoursWeekday}</div>
                    <div className="text-white font-medium mt-1">Sábados:</div>
                    <div className="text-neutral-400">{activeStore.hoursSaturday}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#2b4cde] shrink-0" />
                  <div>
                    <a
                      href={`tel:${activeStore.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-white hover:text-[#6a8cff] font-semibold transition-colors"
                    >
                      {activeStore.phone}
                    </a>
                    {activeStore.mobile && (
                      <span className="text-neutral-400 text-xs ml-2">
                        / {activeStore.mobile}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps External Link */}
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(
                activeStore.mapQuery
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-2xl glass-button text-white text-xs font-semibold flex items-center justify-center gap-2 hover:border-white/40 transition-all"
            >
              <Navigation className="w-4 h-4 text-[#d4af37]" />
              <span>Cómo llegar en Google Maps</span>
            </a>
          </div>

          {/* Right: Avant-Garde Map Canvas & Framing Workshop Consultation */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Stylized Modern Dark Map Visual */}
            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden glass-panel border border-white/15 p-1 group">
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#0e1117] flex items-center justify-center">
                {/* Background Map Graphic / Radar Styling */}
                <div className="absolute inset-0 canvas-grain opacity-40" />
                <div className="absolute w-72 h-72 rounded-full border border-white/10 animate-pulse" />
                <div className="absolute w-96 h-96 rounded-full border border-white/5" />

                {/* Pin Point Madrid */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-[#2b4cde]/30 border border-[#2b4cde] flex items-center justify-center animate-ping absolute inset-0" />
                    <div className="w-12 h-12 rounded-full bg-[#2b4cde] border-2 border-white flex items-center justify-center text-white shadow-2xl relative">
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="mt-3 px-4 py-1.5 rounded-full glass-panel text-xs font-bold text-white border border-white/20 shadow-lg">
                    {activeStore.address} • Madrid
                  </div>
                </div>

                {/* Map Grid Coordinates */}
                <div className="absolute bottom-4 left-4 text-[10px] font-mono text-neutral-500">
                  COORD: 40.4815° N, 3.7088° W • MADRID
                </div>
              </div>
            </div>

            {/* Custom Framing Appointment / Consultation Card */}
            <div className="glass-panel-elevated p-6 sm:p-7 rounded-3xl border border-white/15">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Servicio de Taller en Madrid</span>
              </div>
              <h4 className="font-editorial text-xl sm:text-2xl text-white font-bold mb-2">
                Consulta de Enmarcación a Medida & Cristal Museo
              </h4>
              <p className="text-xs text-neutral-300 font-light leading-relaxed mb-4">
                Trae tu óleo, acuarela o grabado a Plaza Mondariz. Probamos molduras de haya, cajas americanas y paspartús libres de ácido bajo iluminación neutra de galería.
              </p>

              {framingBookingSent ? (
                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    ¡Solicitud recibida! Te llamaremos en menos de 2 horas hábiles para confirmar tu cita y preparar muestras de molduras.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#2b4cde]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Teléfono (ej. 600 000 000)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#2b4cde]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#2b4cde] hover:bg-[#3b5cf6] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#2b4cde]/20"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Reservar Cita Taller</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

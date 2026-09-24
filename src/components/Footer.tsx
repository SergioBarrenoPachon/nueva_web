"use client";

import React from "react";
import { BRAND_LOGOS, STORE_DATA } from "@/data/catalog";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050608] text-neutral-400 border-t border-white/10 pt-20 pb-12">
      {/* Brand Partners Ticker Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-white/10">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
            Marcas Maestras con Distribución Oficial
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {BRAND_LOGOS.map((brand) => (
            <div
              key={brand.name}
              className="p-3 rounded-2xl glass-panel text-center border border-white/5 hover:border-white/20 transition-all group"
            >
              <div className="font-editorial text-sm font-bold text-white group-hover:text-[#6a8cff] transition-colors">
                {brand.name}
              </div>
              <div className="text-[10px] text-neutral-500 mt-0.5">{brand.country}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Identity & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#2b4cde] flex items-center justify-center text-white font-editorial font-bold text-base shadow-lg shadow-[#2b4cde]/30">
                A
              </div>
              <span className="font-editorial text-2xl font-bold text-white tracking-wide">
                ARTISA MADRID
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed font-light max-w-sm">
              Más de 35 años de vocación artesana en Madrid. Especialistas en papeles de algodón Arches, óleos de alta carga de pigmento, pinceles de autor y enmarcación a medida en taller propio.
            </p>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-neutral-300 italic">
              "Gracias por confiar en el pequeño comercio y el oficio tradicional."
            </div>
            <div className="pt-2">
              <a
                href={STORE_DATA.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-white glass-button px-4 py-2 rounded-full hover:border-white/30 transition-all"
              >
                <svg
                  className="w-3.5 h-3.5 text-[#e63946]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>{STORE_DATA.contact.instagram}</span>
              </a>
            </div>
          </div>

          {/* Sede Madrid Central */}
          <div className="space-y-3 text-xs">
            <h4 className="font-editorial text-sm font-bold text-white uppercase tracking-wider text-[#d4af37]">
              Sede Central & Taller
            </h4>
            <div className="space-y-2 text-neutral-300">
              <p className="font-medium text-white">Plaza Mondariz, 3</p>
              <p className="text-neutral-400">28029 Madrid (Barrio del Pilar)</p>
              <p className="text-neutral-400">Metro Herrera Oria / Peñagrande</p>
              <p className="pt-1">
                Tel:{" "}
                <a href="tel:0034917300580" className="text-white hover:underline">
                  (+34) 917 300 580
                </a>
              </p>
              <p>
                Móvil:{" "}
                <a href="tel:0034653906064" className="text-white hover:underline">
                  (+34) 653 906 064
                </a>
              </p>
            </div>
          </div>

          {/* Sede Sierra */}
          <div className="space-y-3 text-xs">
            <h4 className="font-editorial text-sm font-bold text-white uppercase tracking-wider text-[#d4af37]">
              Sede Sierra del Guadarrama
            </h4>
            <div className="space-y-2 text-neutral-300">
              <p className="font-medium text-white">Calle Los Madroños, 6</p>
              <p className="text-neutral-400">28400 Collado Villalba (Madrid)</p>
              <p className="pt-1">
                Tel:{" "}
                <a href="tel:0034653087876" className="text-white hover:underline">
                  (+34) 653 087 876
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${STORE_DATA.contact.email}`}
                  className="text-white hover:underline"
                >
                  {STORE_DATA.contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Services & Guarantees */}
          <div className="space-y-3 text-xs">
            <h4 className="font-editorial text-sm font-bold text-white uppercase tracking-wider text-[#d4af37]">
              Garantías & Envíos
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-[#2b4cde]" />
                <span>Envíos 24/48h a España peninsular</span>
              </li>
              <li className="flex items-center gap-2">
                <RotateCcw className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>14 días de derecho de desistimiento</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#e63946]" />
                <span>2 años de garantía legal en productos</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Embalaje especial para lienzos y papel</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} {STORE_DATA.legalName} • CIF: {STORE_DATA.cif}. Todos los derechos reservados.
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#aviso-legal" className="hover:text-neutral-300 transition-colors">
              Aviso Legal
            </a>
            <span>•</span>
            <a href="#privacidad" className="hover:text-neutral-300 transition-colors">
              Política de Privacidad
            </a>
            <span>•</span>
            <a href="#cookies" className="hover:text-neutral-300 transition-colors">
              Cookies
            </a>
            <span>•</span>
            <a href="#envios" className="hover:text-neutral-300 transition-colors">
              Envíos y Devoluciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

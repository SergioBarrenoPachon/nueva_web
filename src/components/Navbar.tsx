"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import {
  ShoppingBag,
  MapPin,
  Search,
  Menu,
  X,
  Phone,
  Clock,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { STORE_DATA } from "@/data/catalog";

export default function Navbar() {
  const { totalItems, subtotal, setIsOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "El Taller", href: "#taller" },
    { label: "Técnicas", href: "#tecnicas" },
    { label: "Catálogo", href: "#catalogo" },
    { label: "Papel Arches", href: "#arches" },
    { label: "Sedes Madrid", href: "#madrid" },
  ];

  return (
    <>
      {/* Top Banner: Authentic Local & Fast Shipping Statement */}
      <div className="bg-[#0e1015] border-b border-white/5 py-1.5 px-4 text-xs tracking-wider text-neutral-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2b4cde] animate-pulse"></span>
            <span className="font-medium text-neutral-300">
              Envíos 24/48h a península y Baleares
            </span>
            <span className="hidden sm:inline text-neutral-500">•</span>
            <span className="hidden sm:inline text-neutral-400">
              Embalaje especial reforzado para papeles y lienzos
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="tel:0034917300580"
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#d4af37]" />
              <span className="hidden md:inline">Madrid:</span> 917 300 580
            </a>
            <span className="text-neutral-600 hidden md:inline">|</span>
            <div className="hidden lg:flex items-center gap-1.5 text-[#d4af37]">
              <Clock className="w-3 h-3" />
              <span>35+ Años de Oficio Tradicional</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Floating Navigation */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "glass-panel py-3.5 shadow-2xl shadow-black/50"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Identity */}
            <Link
              href="/"
              className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.01]"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2b4cde] via-[#1b2f96] to-[#0d164a] border border-white/20 flex items-center justify-center shadow-lg shadow-[#2b4cde]/20 group-hover:border-[#d4af37]/60 transition-colors">
                <span className="font-editorial text-lg text-white font-bold tracking-tight">
                  A
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-editorial text-xl font-bold tracking-wide text-white group-hover:text-neutral-200 transition-colors">
                    ARTISA
                  </span>
                  <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-[#2b4cde]/20 text-[#6a8cff] border border-[#2b4cde]/30">
                    Madrid
                  </span>
                </div>
                <span className="text-[10px] tracking-widest text-neutral-400 uppercase">
                  Bellas Artes • 1989
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 glass-button px-3 py-1.5 rounded-full">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-1.5 text-xs font-medium text-neutral-300 hover:text-white rounded-full transition-all duration-200 hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions: Search, Madrid Store, Cart */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Quick Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Buscar productos"
                className="w-9 h-9 rounded-full glass-button flex items-center justify-center text-neutral-300 hover:text-white"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Physical Madrid Store anchor */}
              <a
                href="#madrid"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-button text-xs text-neutral-300 hover:text-white group"
              >
                <MapPin className="w-3.5 h-3.5 text-[#d4af37] group-hover:scale-110 transition-transform" />
                <span>Plaza Mondariz</span>
              </a>

              {/* Shopping Cart Trigger with Counter and Total */}
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Abrir carrito de compra"
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#2b4cde] hover:bg-[#3859ea] text-white transition-all duration-300 shadow-lg shadow-[#2b4cde]/25 hover:shadow-[#2b4cde]/40 active:scale-95"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#e63946] text-white text-[10px] font-bold flex items-center justify-center animate-bounce">
                      {totalItems}
                    </span>
                  )}
                </div>
                <span className="text-xs font-semibold hidden sm:inline">
                  {subtotal > 0 ? `${subtotal.toFixed(2)} €` : "Cesta"}
                </span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Alternar menú"
                className="md:hidden w-9 h-9 rounded-full glass-button flex items-center justify-center text-neutral-300"
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Expandable Search Input */}
          {searchOpen && (
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <Search className="w-4 h-4 text-neutral-400 ml-2" />
              <input
                type="text"
                placeholder="Buscar óleos, acuarelas Schmincke, pinceles Escoda, papel Arches..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent border-none text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-0"
              />
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSearchOpen(false);
                }}
                className="text-xs text-neutral-400 hover:text-white px-2 py-1"
              >
                Cerrar
              </button>
            </div>
          )}
        </div>

        {/* Mobile Slide-down Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel-elevated border-b border-white/10 px-6 py-6 mt-3 space-y-4 animate-in slide-in-from-top duration-300">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-base font-medium text-neutral-200 hover:text-white border-b border-white/5"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </a>
              ))}
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#madrid"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-xs text-neutral-300 py-1"
              >
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Plaza Mondariz 3 (Barrio del Pilar)</span>
              </a>
              <a
                href="tel:0034917300580"
                className="flex items-center gap-2 text-xs text-neutral-300 py-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#2b4cde]" />
                <span>Asesoramiento experto: (+34) 917 300 580</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

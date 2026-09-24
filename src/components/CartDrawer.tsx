"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  Sparkles,
  Truck,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function CartDrawer() {
  const {
    isOpen,
    setIsOpen,
    items,
    removeItem,
    updateQuantity,
    subtotal,
    shippingCost,
    total,
    freeShippingRemaining,
    hasFreeShipping,
    checkout,
    orderCompleted,
    setOrderCompleted,
  } = useCart();

  const [archesSampleAdded, setArchesSampleAdded] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md glass-panel-elevated border-l border-white/15 p-6 sm:p-8 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
          {/* Top Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#2b4cde]/20 border border-[#2b4cde]/40 flex items-center justify-center text-[#6a8cff]">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <h3 className="font-editorial text-xl text-white font-bold tracking-tight">
                Tu Cesta de Bellas Artes
              </h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar cesta"
              className="w-8 h-8 rounded-full glass-button flex items-center justify-center text-neutral-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Free Shipping Dynamic Progress Bar */}
          <div className="my-4 p-3.5 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#2b4cde]" />
                <span className={hasFreeShipping ? "text-emerald-400" : "text-neutral-300"}>
                  {hasFreeShipping
                    ? "¡Envío Gratuito 24/48h Conseguido!"
                    : `Te faltan ${freeShippingRemaining.toFixed(2)} € para envío gratis`}
                </span>
              </div>
              <span className="text-[10px] text-neutral-400">Meta: 65,00 €</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-neutral-800 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  hasFreeShipping ? "bg-emerald-400" : "bg-[#2b4cde]"
                }`}
                style={{
                  width: `${Math.min(100, (subtotal / 65) * 100)}%`,
                }}
              />
            </div>
          </div>

          {/* Cart Items Scrollable List */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-1 scrollbar-thin">
            {orderCompleted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-editorial text-2xl text-white font-bold">
                  ¡Pedido Tramitado con Éxito!
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed max-w-xs">
                  Gracias por apoyar al pequeño comercio de Bellas Artes en Madrid. Estamos preparando tu envío con embalaje de conservación para entrega en 24/48 horas.
                </p>
                <div className="p-3 rounded-xl bg-white/5 text-[11px] font-mono text-neutral-400">
                  REF: ARTISA-{Math.floor(100000 + Math.random() * 900000)}
                </div>
              </div>
            ) : items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neutral-500">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h4 className="font-editorial text-lg text-white font-medium">
                  Tu cesta está vacía
                </h4>
                <p className="text-xs text-neutral-400">
                  Explora nuestros papeles Arches o los óleos Rembrandt para añadir piezas a tu estudio.
                </p>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3.5 rounded-2xl glass-panel border border-white/10 items-center justify-between"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 border border-white/10"
                  />
                  <div className="flex-1 min-w-0 pr-2">
                    <div className="text-[10px] uppercase font-bold text-[#d4af37] truncate">
                      {product.brand}
                    </div>
                    <h5 className="font-editorial text-sm font-semibold text-white truncate">
                      {product.name}
                    </h5>
                    <div className="text-xs font-bold text-neutral-200 mt-1">
                      {(product.price * quantity).toFixed(2)} €
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <button
                      onClick={() => removeItem(product.id)}
                      className="text-neutral-500 hover:text-[#e63946] transition-colors p-1"
                      title="Eliminar producto"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center border border-white/15 rounded-lg px-2 py-0.5 bg-black/40">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="text-neutral-400 hover:text-white px-1 text-xs"
                      >
                        <Minus className="w-2.5 h-2.5" />
                      </button>
                      <span className="px-2 text-xs font-semibold text-white">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="text-neutral-400 hover:text-white px-1 text-xs"
                      >
                        <Plus className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Complimentary Gift Toggle */}
            {!orderCompleted && items.length > 0 && (
              <div className="p-3.5 rounded-2xl border border-dashed border-[#d4af37]/40 bg-[#d4af37]/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#d4af37]" />
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Muestra de Papel Arches 300g
                    </div>
                    <div className="text-[10px] text-neutral-400">
                      Cortesía de nuestro taller madrileño
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Gratis
                </span>
              </div>
            )}
          </div>

          {/* Bottom Financial Summary & Checkout */}
          {!orderCompleted && items.length > 0 && (
            <div className="pt-4 border-t border-white/10 space-y-3 mt-4">
              <div className="space-y-1.5 text-xs text-neutral-300">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-white">{subtotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between">
                  <span>Gastos de envío (24/48h):</span>
                  <span className="font-semibold text-white">
                    {shippingCost === 0 ? (
                      <span className="text-emerald-400 font-bold">GRATIS</span>
                    ) : (
                      `${shippingCost.toFixed(2)} €`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/10">
                  <span>Total (IVA incluido):</span>
                  <span className="font-editorial text-xl text-[#d4af37]">
                    {total.toFixed(2)} €
                  </span>
                </div>
              </div>

              <button
                onClick={checkout}
                className="w-full py-4 rounded-2xl bg-[#2b4cde] hover:bg-[#3b5cf6] text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-[#2b4cde]/30 flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Finalizar Pedido • Envío 24/48h</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                <span>Pago 100% Encriptado SSL • 14 días desistimiento</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { X, ShoppingBag, CheckCircle, ShieldCheck, Truck, Star } from "lucide-react";

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!quickViewProduct) return null;

  const handleAdd = () => {
    addItem(quickViewProduct, qty);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setQuickViewProduct(null);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        onClick={() => setQuickViewProduct(null)}
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel-elevated border border-white/20 p-6 sm:p-8 shadow-2xl z-10 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          aria-label="Cerrar vista rápida"
          className="absolute top-6 right-6 w-9 h-9 rounded-full glass-button flex items-center justify-center text-neutral-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Product Image Stage */}
          <div className="relative aspect-square rounded-2xl overflow-hidden glass-panel border border-white/10 group">
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            {quickViewProduct.badge && (
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#2b4cde] text-white shadow-lg">
                {quickViewProduct.badge}
              </div>
            )}
          </div>

          {/* Product Technical Details */}
          <div className="space-y-5">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
                {quickViewProduct.brand}
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-white font-bold tracking-tight">
                {quickViewProduct.name}
              </h3>
            </div>

            {/* Rating and Price */}
            <div className="flex items-center justify-between py-2 border-y border-white/10">
              <div className="flex items-center gap-1.5 text-xs text-neutral-300">
                <div className="flex text-[#d4af37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span>{quickViewProduct.rating}</span>
                <span className="text-neutral-500">({quickViewProduct.reviewsCount} reseñas)</span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-editorial text-2xl font-bold text-white">
                  {quickViewProduct.price.toFixed(2)} €
                </span>
                {quickViewProduct.originalPrice && (
                  <span className="text-sm text-neutral-500 line-through">
                    {quickViewProduct.originalPrice.toFixed(2)} €
                  </span>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              {quickViewProduct.description}
            </p>

            {/* Specs Table */}
            <div className="space-y-1.5 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs">
              {Object.entries(quickViewProduct.specs).map(([label, val]) => (
                <div key={label} className="flex justify-between py-0.5">
                  <span className="text-neutral-400">{label}:</span>
                  <span className="text-neutral-200 font-medium text-right">{val}</span>
                </div>
              ))}
            </div>

            {/* Delivery & Assurance */}
            <div className="flex items-center gap-4 text-[11px] text-neutral-400">
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#2b4cde]" />
                <span>Envío en 24/48h</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Garantía Oficial 2 años</span>
              </div>
            </div>

            {/* Quantity and Action Button */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center border border-white/15 rounded-full px-3 py-1.5 bg-black/30">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-2 text-neutral-400 hover:text-white font-bold text-sm"
                >
                  -
                </button>
                <span className="px-3 text-sm font-semibold text-white">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-2 text-neutral-400 hover:text-white font-bold text-sm"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 py-3.5 px-6 rounded-full bg-[#2b4cde] hover:bg-[#395af2] text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-[#2b4cde]/30 flex items-center justify-center gap-2 active:scale-95"
              >
                {added ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>¡Añadido a la Cesta!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Añadir a la Cesta • {(quickViewProduct.price * qty).toFixed(2)} €</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

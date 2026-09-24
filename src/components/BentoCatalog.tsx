"use client";

import React, { useState } from "react";
import { FEATURED_PRODUCTS, Product } from "@/data/catalog";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Eye, Star, Sparkles, Filter, Check } from "lucide-react";

export default function BentoCatalog() {
  const { addItem, setQuickViewProduct } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [addedIds, setAddedIds] = useState<{ [key: string]: boolean }>({});

  const categories = [
    { id: "all", label: "Todo el Catálogo" },
    { id: "papel", label: "Papeles Arches" },
    { id: "oleo", label: "Óleo & Pigmentos" },
    { id: "acuarela", label: "Acuarelas" },
    { id: "dibujo", label: "Dibujo & Pasteles" },
    { id: "complementos", label: "Pinceles & Taller" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? FEATURED_PRODUCTS
      : FEATURED_PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, 1);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1200);
  };

  return (
    <section id="catalogo" className="relative py-24 sm:py-32 bg-[#08090b]">
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute top-1/3 left-10 w-96 h-96 halo-ultramarine rounded-full blur-3xl opacity-30 -z-10" />
      <div className="pointer-events-none absolute bottom-1/4 right-10 w-96 h-96 halo-ochre rounded-full blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Colección Seleccionada • Stock en Madrid</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Bento de Materiales Nobles
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
            Piezas maestras probadas y recomendadas por nuestro equipo en el taller de Madrid. Calidad de conservación sin concesiones.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-white text-black font-semibold shadow-lg shadow-white/10"
                  : "glass-button text-neutral-300 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product, idx) => {
            const isWide = idx === 0 && selectedCategory === "all";
            const isAdded = addedIds[product.id];

            return (
              <div
                key={product.id}
                onClick={() => setQuickViewProduct(product)}
                className={`cursor-pointer group relative rounded-3xl overflow-hidden glass-panel-elevated border border-white/10 hover:border-white/30 transition-all duration-500 flex flex-col justify-between p-6 ${
                  isWide ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Image Stage with Gradient Overlay */}
                <div
                  className={`relative w-full rounded-2xl overflow-hidden mb-6 bg-black/40 ${
                    isWide ? "aspect-[21/10]" : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101216] via-transparent to-transparent opacity-60" />

                  {/* Badges */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    {product.badge && (
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#2b4cde] text-white shadow-md">
                        {product.badge}
                      </span>
                    )}
                    {product.discount && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#e63946] text-white shadow-md">
                        {product.discount}
                      </span>
                    )}
                  </div>

                  {/* Floating Action Buttons over Image on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-[2px]">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuickViewProduct(product);
                      }}
                      className="p-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-xl"
                      title="Vista Rápida"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => handleQuickAdd(product, e)}
                      className="p-3 rounded-full bg-[#2b4cde] text-white hover:bg-[#3859ea] transition-all transform translate-y-2 group-hover:translate-y-0 shadow-xl"
                      title="Añadir a la Cesta"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card Information */}
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-1.5">
                    <span className="font-semibold uppercase tracking-wider text-[#d4af37]">
                      {product.brand}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-[#d4af37] text-[#d4af37]" />
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="font-editorial text-xl sm:text-2xl text-white font-bold tracking-tight mb-2 group-hover:text-[#6a8cff] transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-neutral-300 font-light line-clamp-2 leading-relaxed mb-6">
                    {product.description}
                  </p>
                </div>

                {/* Price & Add to Cart Button */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span className="font-editorial text-2xl font-bold text-white">
                      {product.price.toFixed(2)} €
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-neutral-500 line-through">
                        {product.originalPrice.toFixed(2)} €
                      </span>
                    )}
                  </div>

                  <button
                    onClick={(e) => handleQuickAdd(product, e)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                      isAdded
                        ? "bg-emerald-600 text-white"
                        : "bg-white/10 hover:bg-[#2b4cde] text-white hover:shadow-lg hover:shadow-[#2b4cde]/30"
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Añadido</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Añadir</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/catalog";
import confetti from "canvas-confetti";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  shippingCost: number;
  total: number;
  freeShippingRemaining: number;
  hasFreeShipping: boolean;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  checkout: () => boolean;
  orderCompleted: boolean;
  setOrderCompleted: (completed: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 65;
const STANDARD_SHIPPING_COST = 4.95;

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [orderCompleted, setOrderCompleted] = useState<boolean>(false);

  // Initial demo item to make the store feel alive from the start
  useEffect(() => {
    // Check localStorage or load a default Arches demo product
    try {
      const saved = localStorage.getItem("artisa_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      } else {
        // Sample item in cart
        setItems([
          {
            product: {
              id: "arches-carpeta-10-pliegos",
              name: "Carpeta Arches 10 Pliegos de Acuarela 56×76cm",
              brand: "Arches France 1492",
              category: "papel",
              price: 60.00,
              rating: 4.8,
              reviewsCount: 19,
              description: "Pliegos sueltos con las 4 barbas originales preservadas y marca al agua grabada al fuego.",
              specs: {
                "Medidas": "56 × 76 cm",
                "Gramaje": "300 g/m² Grano Fino"
              },
              image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop",
              badge: "Esencial Taller",
              inStock: true
            },
            quantity: 1
          }
        ]);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      try {
        localStorage.setItem("artisa_cart", JSON.stringify(items));
      } catch {
        // ignore
      }
    }
  }, [items]);

  const addItem = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsOpen(true);
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    try {
      localStorage.removeItem("artisa_cart");
    } catch {
      // ignore
    }
  };

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const hasFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingCost = items.length === 0 ? 0 : hasFreeShipping ? 0 : STANDARD_SHIPPING_COST;
  const total = subtotal + shippingCost;
  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  const checkout = () => {
    if (items.length === 0) return false;
    
    // Launch celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#2B4CDE", "#D4AF37", "#E63946", "#FFFFFF"]
      });
    } catch {
      // ignore
    }

    setOrderCompleted(true);
    setTimeout(() => {
      clearCart();
    }, 4000);
    return true;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        setIsOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        shippingCost,
        total,
        freeShippingRemaining,
        hasFreeShipping,
        quickViewProduct,
        setQuickViewProduct,
        checkout,
        orderCompleted,
        setOrderCompleted,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

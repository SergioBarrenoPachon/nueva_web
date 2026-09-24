import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import SmoothScroll from "@/components/SmoothScroll";
import CartDrawer from "@/components/CartDrawer";
import QuickViewModal from "@/components/QuickViewModal";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Artisa | Bellas Artes Madrid — Materiales de Élite & Taller de Enmarcación",
  description:
    "Experiencia e-commerce de Bellas Artes Madrid. Papeles Arches 1492, óleos Rembrandt y Titán, pinceles Escoda, acuarelas Schmincke Horadam y taller de enmarcación a medida. Más de 35 años de oficio en Madrid.",
  keywords: [
    "Bellas Artes Madrid",
    "Artisa Madrid",
    "papel Arches acuarela",
    "óleo Rembrandt",
    "pinceles Escoda Marta Kolinsky",
    "acuarelas Schmincke Horadam",
    "enmarcación a medida Madrid",
    "tienda bellas artes Barrio del Pilar",
    "material bellas artes Collado Villalba",
  ],
  authors: [{ name: "Artisa Bellas Artes Madrid" }],
  openGraph: {
    title: "Artisa Bellas Artes Madrid — La Maestría del Arte",
    description:
      "Descubre la mayor selección de materiales selectos para artistas plásticos. Más de 5.000 referencias profesionales y envíos en 24/48h a toda España.",
    url: "https://bellasartesmadrid.es",
    siteName: "Artisa Bellas Artes Madrid",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geist.variable} ${playfair.variable} dark`}>
      <body className="font-sans antialiased bg-[#08090b] text-[#f4f5f7] min-h-screen selection:bg-[#2b4cde] selection:text-white">
        <CartProvider>
          <SmoothScroll>
            {children}
            <CartDrawer />
            <QuickViewModal />
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: "papel" | "oleo" | "acuarela" | "dibujo" | "enmarcacion" | "complementos";
  price: number;
  originalPrice?: number;
  discount?: string;
  rating: number;
  reviewsCount: number;
  description: string;
  specs: { [key: string]: string };
  image: string;
  badge?: string;
  inStock: boolean;
  featured?: boolean;
}

export interface Technique {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  badge: string;
  image: string;
  itemCount: string;
  features: string[];
}

export interface CraftStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  specs: { label: string; value: string }[];
  tag: string;
}

export const STORE_DATA = {
  name: "Artisa Bellas Artes Madrid",
  legalName: "AFA ARTISA, S.L.",
  cif: "B82103433",
  motto: "El templo del artista en Madrid desde hace más de 35 años",
  submotto: "Materiales selectos, asesoramiento de maestros y taller de enmarcación de conservación.",
  sinceYear: 1989,
  yearsOfExperience: 35,
  productCount: "5.000+",
  shippingTime: "24/48h",
  freeShippingThreshold: 65,
  locations: [
    {
      id: "mondariz",
      name: "Sede Central & Taller Barrio del Pilar",
      address: "Plaza Mondariz, 3",
      postalCode: "28029",
      city: "Madrid Centro-Norte",
      phone: "(+34) 917 300 580",
      mobile: "(+34) 653 906 064",
      hoursWeekday: "10:00 - 14:00 | 17:00 - 20:00",
      hoursSaturday: "10:00 - 14:00",
      metro: "Metro Peñagrande / Herrera Oria (L9)",
      mapQuery: "Plaza Mondariz 3, Madrid",
      isMain: true,
      description: "Nuestra tienda de referencia y taller de enmarcación a medida. Espacio donde palpar papeles, probar texturas de pigmento y recibir consultoría técnica directa."
    },
    {
      id: "villalba",
      name: "Sede Sierra del Guadarrama",
      address: "Calle Los Madroños, 6",
      postalCode: "28400",
      city: "Collado Villalba, Madrid",
      phone: "(+34) 653 087 876",
      hoursWeekday: "10:00 - 13:30 | 17:00 - 20:00",
      hoursSaturday: "10:00 - 13:30",
      metro: "Cercanías Renfe Villalba",
      mapQuery: "Calle Los Madroños 6, Collado Villalba",
      isMain: false,
      description: "Punto de distribución y tienda especializada para los artistas y talleres del noroeste de la Comunidad de Madrid."
    }
  ],
  contact: {
    email: "artisa@bellasartesmadrid.es",
    instagram: "@artisa_bellas_artes",
    instagramUrl: "https://www.instagram.com/artisa_bellas_artes/",
  }
};

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "arches-rollo-fino",
    name: "Rollo de Papel Arches Grano Fino 100% Algodón",
    brand: "Arches France 1492",
    category: "papel",
    price: 157.21,
    originalPrice: 170.00,
    discount: "-8%",
    rating: 5.0,
    reviewsCount: 38,
    description: "El estándar dorado de los maestros de la acuarela mundial desde 1492. Fabricado en forma redonda con 100% fibra de línter de algodón y encolado en masa con gelatina natural.",
    specs: {
      "Dimensiones": "1,13 × 9,14 metros",
      "Gramaje": "300 g/m²",
      "Composición": "100% Algodón de fibras largas",
      "Textura": "Grano Fino prensado en frío",
      "Tratamiento": "Libre de ácido, reserva alcalina, secado al aire"
    },
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop",
    badge: "Insignia de la Casa",
    inStock: true,
    featured: true
  },
  {
    id: "rembrandt-pasteles-120",
    name: "Caja Maestra 120 Medios Pasteles Rembrandt",
    brand: "Royal Talens",
    category: "dibujo",
    price: 60.00,
    originalPrice: 75.00,
    discount: "-20%",
    rating: 4.9,
    reviewsCount: 24,
    description: "Pasteles extra-suaves elaborados con caolín purificado y pigmentos de máxima resistencia a la luz (+++). Suavidad sedosa sin desmoronamiento prematuro.",
    specs: {
      "Contenido": "120 medios pasteles seleccionados",
      "Pigmentación": "Ultra-alta concentración sin metales pesados",
      "Resistencia a luz": "Calificación museo +++ (100+ años)",
      "Presentación": "Cofre con compartimentos de espuma antichoque"
    },
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop",
    badge: "Superventas",
    inStock: true,
    featured: true
  },
  {
    id: "arches-carpeta-10-pliegos",
    name: "Carpeta Arches 10 Pliegos de Acuarela 56×76cm",
    brand: "Arches France 1492",
    category: "papel",
    price: 60.00,
    rating: 4.8,
    reviewsCount: 19,
    description: "Pliegos sueltos con las 4 barbas originales preservadas y marca al agua grabada al fuego. Permite un tensado perfecto en tabla o trabajo directo con aguadas generosas.",
    specs: {
      "Medidas": "56 × 76 cm (Formato Imperial)",
      "Unidades": "10 pliegos protegidos en carpeta rígida",
      "Gramaje": "300 g/m² Grano Fino",
      "Barbas": "4 bordes naturales con barbas de tina"
    },
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop",
    badge: "Esencial Taller",
    inStock: true,
    featured: true
  },
  {
    id: "escoda-serie-ultimo-2330",
    name: "Brocha Serie 2330 Escoda Último Tendo Sintético",
    brand: "Escoda Brushes",
    category: "complementos",
    price: 34.50,
    rating: 5.0,
    reviewsCount: 17,
    description: "Innovación barcelonesa que replica con exactitud milimétrica la capacidad de absorción y retorno de la marta o la ardilla petit-gris, con una durabilidad tres veces superior.",
    specs: {
      "Fibra": "Tendo Sintético de memoria morfológica",
      "Virola": "Latón niquelado con triple estriado",
      "Mango": "Madera noble barnizada en ébano mate",
      "Uso": "Acuarela, aguadas de tinta y veladuras al óleo"
    },
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop",
    badge: "Artesanía Española",
    inStock: true,
    featured: true
  },
  {
    id: "schmincke-horadam-godets",
    name: "Caja Metálica Schmincke Horadam Acuarela 24 ½ Godets",
    brand: "Schmincke Alemania",
    category: "acuarela",
    price: 139.00,
    originalPrice: 155.00,
    discount: "-10%",
    rating: 5.0,
    reviewsCount: 31,
    description: "La cumbre de la acuarela alemana desde 1881. Los godets son vertidos líquidos cuatro veces en períodos de tres semanas para garantizar que cada milímetro contenga pigmento puro.",
    specs: {
      "Pigmentos": "Monopigmentarios puros Kodoram",
      "Aglutinante": "Goma arábiga Kordofan seleccionada",
      "Caja": "Esmaltada en negro con doble paleta abatible",
      "Control de flujo": "Comportamiento uniforme en seco y húmedo"
    },
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1000&auto=format&fit=crop",
    badge: "Grado Maestro",
    inStock: true,
    featured: true
  },
  {
    id: "maleta-madera-bellas-artes",
    name: "Maleta de Haya Maciza para Pintura 38×28×6cm",
    brand: "Taller Artisa",
    category: "complementos",
    price: 14.90,
    rating: 4.7,
    reviewsCount: 42,
    description: "Caja de campo y taller construida en madera de haya vaporizada con cierres metálicos dorados y compartimentos modulares para tubos de 40ml y pinceles largos.",
    specs: {
      "Material": "Haya maciza tratada al aceite",
      "Dimensiones": "38 × 28 × 6 cm",
      "Herrajes": "Cierres dobles de latón envejecido",
      "Asa": "Piel sintética pespunteada para transporte"
    },
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=1000&auto=format&fit=crop",
    badge: "Relación Calidad/Precio",
    inStock: true,
    featured: false
  },
  {
    id: "rembrandt-oleo-caja-inicio",
    name: "Set Óleo Profesional Rembrandt 10 Tubos 40ml + Accesorios",
    brand: "Rembrandt Royal Talens",
    category: "oleo",
    price: 88.50,
    originalPrice: 99.00,
    discount: "-11%",
    rating: 4.9,
    reviewsCount: 29,
    description: "Óleo holandés de molido ultrafino con rodillos de triple piedra. Intensidad de matiz excepcional y brillo homogéneo en toda la gama de tierras y cadmios.",
    specs: {
      "Gama": "10 tubos 40ml colores primarios y tierras de Siena",
      "Auxiliares": "Frasco medio de pintar 75ml + esencia petróleo",
      "Pinceles": "2 pinceles Rembrandt cerda blanqueada",
      "Paleta": "Madera de abedul tratada"
    },
    image: "https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?q=80&w=1000&auto=format&fit=crop",
    badge: "Recomendado",
    inStock: true,
    featured: true
  },
  {
    id: "faber-castell-polychromos-60",
    name: "Estuche Metálico 60 Lápices Polychromos",
    brand: "Faber-Castell",
    category: "dibujo",
    price: 114.00,
    originalPrice: 129.00,
    discount: "-12%",
    rating: 5.0,
    reviewsCount: 52,
    description: "Mina de base grasa resistente al agua de 3.8 mm, encolada por completo (sistema SV) para resistir caídas. Capacidad de superposición infinita de capas y matices cromáticos.",
    specs: {
      "Grosor de mina": "3,8 mm de grafito pigmentado",
      "Resistencia al agua": "100% impermeable, no emborrona",
      "Madera": "Cedro de California procedente de bosques sostenibles",
      "Estuche": "Lata de acero litografiada clásica"
    },
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop",
    badge: "Imprescindible",
    inStock: true,
    featured: false
  }
];

export const DISCIPLINES: Technique[] = [
  {
    id: "oleo",
    title: "Óleo & Pigmentos Puros",
    subtitle: "La alquimia clásica de los grandes maestros",
    description: "Óleos de alta concentración pigmentaria, tierras naturales de Siena, bermellones de cadmio genuino y aglutinantes de linaza purificada de primera presión.",
    accentColor: "#D4AF37",
    badge: "563 Referencias",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop",
    itemCount: "Marcas: Rembrandt, Titán Extra Fino, Van Gogh, Artisan",
    features: ["Molido en rodillos de triple cilindro", "Resistencia de museo 100+ años", "Compatibles con veladuras y empastes gruesos"]
  },
  {
    id: "acuarela",
    title: "Acuarela & Aguadas",
    subtitle: "Transparencia lumínica y grano poético",
    description: "Godets vertidos y tubos con la máxima densidad de pigmento monopigmentario disuelto en goma arábiga de Kordofán seleccionada a mano.",
    accentColor: "#2B4CDE",
    badge: "1.716 Referencias",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop",
    itemCount: "Marcas: Schmincke, Daniel Smith, Winsor & Newton, Roman Szmal",
    features: ["Dispersión capilar pura", "Efectos de granulación geológica", "Intensidad luminosa sobre blanco de papel"]
  },
  {
    id: "arches",
    title: "Papel Arches Francia 1492",
    subtitle: "El alma vegetal de 100% fibra de algodón",
    description: "Fabricado sobre forma redonda desde hace más de cinco siglos en los Vosgos franceses. Fibras largas de algodón entrelazadas con encolado de gelatina interna.",
    accentColor: "#E0A96D",
    badge: "Distribuidor Oficial",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
    itemCount: "Formatos: Rollos de 9m, Pliegos 56x76cm, Blocs Encolados",
    features: ["Permite raspar y lavar sin desgarro", "4 barbas tradicionales al agua", "Blancura natural sin blanqueadores ópticos"]
  },
  {
    id: "pinceles",
    title: "Pincelería Escoda & Autor",
    subtitle: "La prolongación intuitiva del pulso",
    description: "Pelo de marta Kolinsky seleccionada hembra a macho, fibras sintéticas Tendo de última generación y virolas remachadas con triple prensado indeformable.",
    accentColor: "#E63946",
    badge: "Fabricación Artesanal",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop",
    itemCount: "Brochas de aguada, pinceles redondos, espátulas de acero forjado",
    features: ["Punta que recupera su afilado natural", "Capacidad de retención de carga líquida", "Equilibrio cinético del centro de masa"]
  },
  {
    id: "enmarcacion",
    title: "Taller de Enmarcación Propio",
    subtitle: "La consagración final de la obra",
    description: "Taller artesanal madrileño en Plaza Mondariz. Molduras de madera maciza, cristal museo anti-reflejo y passepartout de conservación libre de ácido.",
    accentColor: "#C5A059",
    badge: "A Medida en Madrid",
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1200&auto=format&fit=crop",
    itemCount: "Cajas americanas, molduras de pan de oro, cajas profundas vitrina",
    features: ["Filtro de radiación ultravioleta al 99%", "Cintas y adhesivos reversibles de museo", "Asesoramiento estético y cromático en sala"]
  }
];

export const CRAFT_ANATOMY_STEPS: CraftStep[] = [
  {
    step: 1,
    tag: "CAPA 01: EL MECHÓN",
    title: "Fibras de Retención Capilar Extrema",
    subtitle: "Selección anatómica pelo a pelo",
    description: "Cada pincel se ensambla a mano escogiendo cerdas cónicas con escamas microscópicas naturales. Esta micro-textura permite almacenar hasta 4 veces su peso en agua y pigmento, soltándolo gradualmente sin descontrol sobre el papel.",
    highlight: "Capacidad de absorción de 400% y memoria elástica perpetua que retorna a punta única tras cada trazo.",
    specs: [
      { label: "Origen", value: "Marta Kolinsky / Sintético Tendo Escoda" },
      { label: "Morfología", value: "Cónica escalonada con micro-escamas" },
      { label: "Memoria", value: "Retorno elástico sin deformación lateral" }
    ]
  },
  {
    step: 2,
    tag: "CAPA 02: LA VIROLA",
    title: "Latón Niquelado con Triple Engaste Mecánico",
    subtitle: "Cero soldaduras, resistencia vitalicia",
    description: "La virola no lleva costuras ni soldaduras de estaño que puedan oxidarse con el contacto con el agua o disolventes. Se fija al mango mediante un prensado hidráulico en tres puntos que garantiza que ningún pelo se desprenda en mitad de un cuadro.",
    highlight: "Sellado anaeróbico interno que aísla la madera de la humedad y evita holguras mecánicas con el paso de los años.",
    specs: [
      { label: "Material", value: "Latón electrolítico cobreado y niquelado" },
      { label: "Unión", value: "Triple estriado mecánico sin pegamentos térmicos" },
      { label: "Resistencia", value: "Inmune a aguarrás, trementina y agua destilada" }
    ]
  },
  {
    step: 3,
    tag: "CAPA 03: EL MANGO",
    title: "Madera de Haya con Balance Áureo",
    subtitle: "Diseño ergonómico ponderado para horas de pintura",
    description: "Torneado en madera maciza de haya europea secada en cámara lenta para prevenir alabeos. El perfil ahusado traslada el centro de gravedad justo delante de la comisura de los dedos, reduciendo la fatiga motora durante sesiones prolongadas.",
    highlight: "Acabado al barniz sedoso satinado que repele disolventes y ofrece un agarre tactile sin deslizamiento.",
    specs: [
      { label: "Madera", value: "Haya maciza de tala controlada (FSC)" },
      { label: "Equilibrio", value: "Punto de balance a 1/3 de la virola" },
      { label: "Acabado", value: "Triple laca al agua anti-descascarillado" }
    ]
  },
  {
    step: 4,
    tag: "CAPA 04: EL PIGMENTO",
    title: "Pureza Molecular y Aceite de Primera Presión",
    subtitle: "La densidad lumínica del color vivo",
    description: "Un buen pincel solo cobra vida frente a un pigmento no adulterado. En Artisa seleccionamos tubos con molienda ultrafina de hasta 15 micras, sin aditivos de carga ni blanqueadores inertes, garantizando tonalidades que conservan su vivacidad tras décadas.",
    highlight: "Aglutinante orgánico de linaza prensada en frío con absorción oxigenada lenta y brillo cristalino natural.",
    specs: [
      { label: "Molienda", value: "15 micras en rodillos de piedra pórfido" },
      { label: "Concentración", value: "Hasta 70% de pigmento puro por peso" },
      { label: "Estabilidad", value: "Permanencia ASTM I y II garantizada" }
    ]
  }
];

export const BRAND_LOGOS = [
  { name: "Arches", country: "Francia 1492", specialty: "Papel Acuarela Algodón" },
  { name: "Rembrandt", country: "Países Bajos", specialty: "Óleos & Pasteles Suaves" },
  { name: "Schmincke", country: "Alemania 1881", specialty: "Acuarelas Horadam" },
  { name: "Escoda", country: "España 1933", specialty: "Pinceles de Artista" },
  { name: "Daniel Smith", country: "EE.UU.", specialty: "Acuarelas Minerales Primatek" },
  { name: "Faber-Castell", country: "Alemania 1761", specialty: "Polychromos & Bellas Artes" },
  { name: "Winsor & Newton", country: "Reino Unido 1832", specialty: "Acuarelas y Óleos Profesionales" },
  { name: "Vallejo", country: "España", specialty: "Acrílicos y Modelismo" }
];

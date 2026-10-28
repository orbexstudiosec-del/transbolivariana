// Contenido central del sitio. Edita aquí textos, contactos e imágenes.
// Información tomada de transbolivariana.com (versión anterior del sitio)
// y del brief comercial "Presentación todos los servicios 2026".

const img = (name: string) => `/images/${name}.webp`;

export const site = {
  name: "Transbolivariana",
  legalName: "Transbolivariana C.A.",
  tagline: "Logística en Comercio Exterior",
  since: 1994,
  description:
    "Transporte internacional de carga, Depósito Temporal Aduanero (SENAE) y Agencia de Aduanas en Tulcán, Ecuador, a 10 km de Rumichaca. Empresa certificada BASC, logística integral desde 1994.",
  url: "https://transbolivariana.com",
  seo: {
    h1: "Depósito aduanero y transporte internacional · Tulcán, Ecuador",
    title: "Transbolivariana | Depósito Aduanero y Transporte Internacional – Ecuador",
    keywords: [
      "Transbolivariana",
      "depósito temporal aduanero",
      "depósito aduanero Tulcán",
      "transporte internacional de carga",
      "transporte de carga Ecuador Colombia",
      "transporte terrestre Comunidad Andina",
      "logística comercio exterior Ecuador",
      "agente de aduana Tulcán",
      "Rumichaca",
      "tanqueros transporte de líquidos",
      "báscula camionera Tulcán",
      "almacenamiento de mercancías",
    ],
  },
  contact: {
    phone: "06 2985 271",
    phoneAlt: "06 2985 274",
    mobile: "+593 99 762 0640",
    whatsapp: "593997620640", // solo dígitos
    email: "info@transbolivariana.ec",
    emailAlt: "jbenitez@transbolivariana.ec",
    address: "Av. Andrés Bello y Panamericana Norte, Tulcán – Carchi – Ecuador",
    hours: "Lun – Vie 08:00 – 18:00 · Sáb – Dom 08:00 – 12:00",
  },
  // Deja vacío ("") para ocultar una red social.
  social: {
    facebook: "https://www.facebook.com/transbolivariana",
    instagram: "https://www.instagram.com/transbolivariana_ec",
    linkedin: "",
  },
};

// Brochure comercial descargable (archivo en public/docs).
export const brochure = {
  href: "/docs/brochure-transbolivariana-2026.pdf",
  fileName: "Brochure Transbolivariana 2026.pdf",
};

export const tel =(phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

export const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Infraestructura", href: "#infraestructura" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Contacto", href: "#contacto" },
];

export const heroSlides = [
  {
    image: img("rumichaca"),
    eyebrow: "Transporte internacional de carga",
    title: "Conectando Ecuador y Colombia",
    text: "Con seguridad, eficiencia y confianza. Flota propia, permisos internacionales y rastreo satelital 24/7 en Ecuador, Colombia y Perú.",
  },
  {
    image: img("deposito-montacarga"),
    eyebrow: "Depósito Temporal Aduanero · Autorizado por SENAE",
    title: "Tu carga en las mejores manos",
    text: "Infraestructura segura, procesos confiables y operaciones eficientes para tu comercio exterior, a solo 10 km del puente de Rumichaca.",
  },
  {
    image: img("frontera"),
    eyebrow: "Más de 30 años de experiencia",
    title: "Soluciones integrales de logística y comercio exterior",
    text: "Transporte internacional, Depósito Temporal Aduanero y Agencia de Aduanas con propuestas de valor adaptadas a cada cliente.",
  },
];

export type FeatureIcon =
  | "truck"
  | "tanker"
  | "warehouse"
  | "customs"
  | "forklift"
  | "scale"
  | "shield"
  | "badge"
  | "satellite"
  | "handshake"
  | "award"
  | "zap";

export const highlights: { icon: FeatureIcon; title: string; text: string }[] = [
  { icon: "badge", title: "Habilitados por SENAE", text: "Depósito Temporal Aduanero autorizado por la Aduana del Ecuador." },
  { icon: "shield", title: "Certificación BASC", text: "Norma BASC V6-2022, Estándar 6.0.1, alineada con requisitos de seguridad C-TPAT." },
  { icon: "satellite", title: "Rastreo satelital 24/7", text: "Seguimiento en tiempo real del recorrido entre Ecuador, Colombia y Perú." },
];

export const services: {
  icon: FeatureIcon;
  title: string;
  text: string;
  image: string;
}[] = [
  {
    icon: "warehouse",
    title: "Depósito Temporal Aduanero",
    text: "3 bodegas monitoreadas, muelles para carga suelta o paletizada y 2.900 m² de patios para contenedores, plataformas y tanqueros.",
    image: img("deposito-patio"),
  },
  {
    icon: "truck",
    title: "Transporte Nacional e Internacional",
    text: "Flota propia de camiones y tráileres para cemento, ensacados, cajas, bultos, paletas y carga especializada adaptada a cada cliente.",
    image: img("camion"),
  },
  {
    icon: "tanker",
    title: "Transporte de Líquidos",
    text: "Tanqueros de acero inoxidable de hasta 11.000 galones, con serpentín y aislamiento térmico. Especialistas en alimentos.",
    image: img("tanquero"),
  },
  {
    icon: "customs",
    title: "Agencia de Aduanas",
    text: "Agente de aduana propio para importaciones, exportaciones, regímenes especiales, coordinación de aforos y gestión documental.",
    image: img("aduana"),
  },
  {
    icon: "forklift",
    title: "Estibaje y Montacargas",
    text: "Personal capacitado y dos montacargas para cargar y descargar mercadería paletizada de forma rápida y segura.",
    image: img("estibaje"),
  },
  {
    icon: "scale",
    title: "Báscula Camionera",
    text: "Pesaje digital certificado con estándar internacional, abierto al público y con capacidad para vehículos de gran tonelaje.",
    image: img("bascula"),
  },
];

export const infrastructure: {
  title: string;
  text: string;
  image: string;
  imagePosition?: string;
  points: string[];
}[] = [
  {
    title: "Elevadora lateral HAMMAR",
    text: "Carga y descarga de contenedores a nivel de suelo, sin esperar otras máquinas ni preparar el terreno.",
    image: img("hammar"),
    points: ["Menos tiempo y costos operativos", "Más recogidas y entregas por ciclo"],
  },
  {
    title: "Muelles con niveladoras",
    text: "Rampas ajustables que crean un puente entre el camión y la bodega, compensando la altura de cada vehículo.",
    image: img("muelles"),
    points: ["Cargue y descargue más ágil", "Operación más segura"],
  },
  {
    title: "Carga vigilada 24 horas",
    text: "Vigilancia de tu carga e instalaciones las 24 horas, los 7 días de la semana.",
    image: img("camaras"),
    points: [
      "Sensores y circuito cerrado de televisión",
      "Cercado eléctrico e iluminación perimetral",
      "Control de accesos y seguridad privada",
    ],
  },
  {
    title: "Flota con rastreo satelital",
    text: "Unidades con computadora de a bordo, frenos ABS y ASR, suspensión neumática, control de velocidad y GPS.",
    image: img("gps"),
    imagePosition: "left",
    points: ["Informes de tráfico", "Acceso directo al rastreo"],
  },
];

export const about = {
  image: img("fachada"),
  imageSecondary: img("equipo"),
  intro:
    "Somos una empresa de comercio exterior que brinda el servicio de transporte nacional e internacional de carga vía terrestre, y posee su propio Depósito Temporal Aduanero y Agencia de Aduanas. Nuestro objetivo es prestar un servicio de calidad que abarque una «Logística Integral», configurando propuestas de valor adaptadas para cada cliente dentro del área subregional andina.",
  points: [
    "Depósito habilitado por la SENAE",
    "Agencia de Aduanas propia",
    "Flota de camiones propia",
    "Certificados BASC V6-2022",
  ],
  mission:
    "Somos una empresa que contribuye con el comercio exterior, moderna, innovadora y eficaz, que brinda el servicio de almacenamiento, distribución, asesoramiento logístico y aduanero, para todos los tipos de bienes a nivel nacional e internacional.",
  vision:
    "Liderar nuestros servicios con calidad, eficiencia y rapidez, superando las expectativas de nuestros clientes nacionales y extranjeros con herramientas informáticas, tarifas competitivas en un ambiente laboral solidario, capacitado y productivo.",
};

export const stats = [
  { value: 30, suffix: "+", label: "Años de experiencia" },
  { value: 3, suffix: "", label: "Bodegas monitoreadas" },
  { value: 2900, suffix: " m²", label: "De patios de almacenaje" },
  { value: 24, suffix: "/7", label: "Vigilancia y rastreo" },
];

export const steps = [
  {
    title: "Asesoría",
    text: "Analizamos tu operación y armamos una propuesta de valor a tu medida.",
  },
  {
    title: "Documentación",
    text: "Nuestra Agencia de Aduanas gestiona los trámites y aforos.",
  },
  {
    title: "Transporte",
    text: "Movemos tu carga con flota equipada y rastreo satelital.",
  },
  {
    title: "Almacenaje y entrega",
    text: "Depósito vigilado, estibaje y despacho hasta su destino final.",
  },
];

export const countries = [
  { name: "Ecuador", note: "Sede central · Tulcán" },
  { name: "Colombia", note: "Cruce de frontera · Rastreo satelital" },
  { name: "Perú", note: "Rutas CAN · Rastreo satelital" },
  { name: "Rumichaca", note: "A 10 km (15 min) de nuestras instalaciones" },
];

// Tipos de unidad y peso máximo aproximado (brief 2026).
export const fleet = [
  { name: "Camión turbo", capacity: "5.000 kg" },
  { name: "Camión sencillo", capacity: "8.500 kg" },
  { name: "Low boy", capacity: "10.000 kg" },
  { name: "Tráiler", capacity: "31.000 kg" },
];

export const values: { icon: FeatureIcon; title: string; text: string }[] = [
  { icon: "shield", title: "Generamos confianza", text: "Su carga está en las mejores manos." },
  { icon: "handshake", title: "Somos su aliado", text: "Somos su mejor socio estratégico." },
  { icon: "award", title: "Experiencia", text: "Asesoramiento personalizado en comercio exterior y logística." },
  { icon: "zap", title: "Eficiencia", text: "Personal altamente capacitado para brindar un servicio rápido y de calidad." },
];

export const basc = {
  title: "Política SGCS BASC",
  certificate:
    "Certificación BASC Nº ECUUIO00562-1-3 · Norma V6-2022, Estándar 6.0.1 · Vigente hasta junio de 2027",
  text: "Transbolivariana, organización de Comercio Exterior, provee servicios de almacenamiento de mercancías de importación y exportación, comprometida con la implementación, operación y mejoramiento continuo de sus procesos, en especial del SGCS BASC, con condiciones seguras para sus clientes internos y externos, cumpliendo con los requisitos legales y reglamentarios, promoviendo la seguridad en el uso de tecnologías de la información y previniendo cualquier tipo de actividad ilícita, corrupción, soborno o lavado de activos en la cadena logística.",
};

export const partners = [
  { name: "Grupo Mavesa", logo: "/partners/mavesa.webp" },
  { name: "Apolo Seven S.A.", logo: "/partners/apolo-seven.webp" },
  { name: "Grupo Familia", logo: "/partners/grupo-familia.webp" },
  { name: "Infri Cía. Ltda.", logo: "/partners/infri.webp" },
  { name: "FV", logo: "/partners/fv.webp" },
  { name: "Manuelita", logo: "/partners/manuelita.webp" },
  { name: "Kimberly-Clark", logo: "/partners/kimberly-clark.webp" },
  { name: "Si Logística", logo: "/partners/si-logistica.webp" },
  { name: "Translogex S.A.S.", logo: "/partners/translogex.webp" },
];

export const quoteBg = img("bodega");

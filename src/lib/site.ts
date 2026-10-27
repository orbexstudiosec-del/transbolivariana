// Contenido central del sitio. Edita aquí textos, contactos e imágenes.
// Información tomada de transbolivariana.com (versión anterior del sitio).

const img = (name: string) => `/images/${name}.webp`;

export const site = {
  name: "Transbolivariana",
  legalName: "Transbolivariana C.A.",
  tagline: "Logística en Comercio Exterior",
  since: 1994,
  description:
    "Depósito Temporal Aduanero (SENAE) y transporte terrestre internacional en la Comunidad Andina desde Tulcán, Ecuador. Logística integral desde 1994.",
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

export const tel = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

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
    eyebrow: "Transporte terrestre internacional",
    title: "Cruzamos fronteras en toda la Comunidad Andina",
    text: "Flota equipada, permisos internacionales para operar en los países de la CAN y rastreo satelital 24/7 en Ecuador, Colombia y Perú.",
  },
  {
    image: img("deposito-montacarga"),
    eyebrow: "Depósito Temporal Aduanero",
    title: "Tu carga, en las mejores manos",
    text: "Habilitados por la Aduana del Ecuador (SENAE), con 3 bodegas monitoreadas y vigiladas las 24 horas en Tulcán.",
  },
  {
    image: img("frontera"),
    eyebrow: `Logística integral desde ${site.since}`,
    title: "Tu aliado estratégico en comercio exterior",
    text: "Transporte, almacenamiento y asesoramiento aduanero con propuestas de valor adaptadas a cada cliente.",
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
  { icon: "shield", title: "Certificación BASC", text: "Sistema de Gestión en Control y Seguridad en toda la cadena logística." },
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
    text: "3 bodegas monitoreadas para carga fraccionada (paquetes, sacos, tambores, cajas) y unitarizada (paletas y contenedores).",
    image: img("deposito-patio"),
  },
  {
    icon: "truck",
    title: "Transporte Internacional",
    text: "Caravanas y plataformas con suspensión neumática para cemento, ensacados, cajas, bultos y paletas en la región andina.",
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
    title: "Asesoramiento Aduanero",
    text: "Agentes afianzados en Ecuador, Colombia y Perú para importación, exportación y regímenes especiales.",
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
    text: "Sistema integrado de seguridad para monitorear tu carga en todo momento.",
    image: img("camaras"),
    points: ["Circuito cerrado de televisión", "Software y herramientas informáticas"],
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
    "Somos el grupo empresarial en comercio exterior que brinda el servicio de Depósito Temporal, Transporte Terrestre Internacional de mercancías y asesoramiento logístico, con el objetivo de prestar un servicio de calidad que abarca una «Logística Integral», configurando propuestas de valor adaptadas para cada cliente dentro del área subregional andina.",
  points: [
    "Depósito habilitado por la SENAE",
    "Permisos internacionales en la CAN",
    "Vigilancia y rastreo 24/7",
    "Equipo profesional y capacitado",
  ],
  mission:
    "Somos una empresa que contribuye con el comercio exterior, moderna, innovadora y eficaz, que brinda el servicio de almacenamiento, distribución, asesoramiento logístico y aduanero, para todos los tipos de bienes a nivel nacional e internacional.",
  vision:
    "Ser referencia a nivel nacional en el servicio de Depósito Aduanero y Transporte Internacional, trabajar con calidad, eficiencia y rapidez, superando las expectativas de nuestros clientes nacionales y extranjeros con herramientas informáticas, tarifas competitivas en un ambiente laboral solidario, capacitado y productivo.",
};

export const stats = [
  { value: 30, suffix: "+", label: "Años de experiencia" },
  { value: 3, suffix: "", label: "Bodegas monitoreadas" },
  { value: 11000, suffix: "", label: "Galones por tanquero" },
  { value: 24, suffix: "/7", label: "Vigilancia y rastreo" },
];

export const steps = [
  {
    title: "Asesoría",
    text: "Analizamos tu operación y armamos una propuesta de valor a tu medida.",
  },
  {
    title: "Documentación",
    text: "Nuestros agentes afianzados gestionan los trámites aduaneros.",
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
  { name: "Ecuador", note: "Sede central · Tulcán, frontera Rumichaca" },
  { name: "Colombia", note: "Agentes afianzados · Rastreo satelital" },
  { name: "Perú", note: "Agentes afianzados · Rastreo satelital" },
  { name: "Bolivia", note: "Permisos de operación CAN" },
];

export const values: { icon: FeatureIcon; title: string; text: string }[] = [
  { icon: "shield", title: "Generamos confianza", text: "Su carga está en las mejores manos." },
  { icon: "handshake", title: "Somos su aliado", text: "Somos su mejor socio estratégico." },
  { icon: "award", title: "Experiencia", text: "Asesoramiento personalizado en comercio exterior y logística." },
  { icon: "zap", title: "Eficiencia", text: "Personal altamente capacitado para brindar un servicio rápido y de calidad." },
];

export const basc = {
  title: "Política SGCS BASC",
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

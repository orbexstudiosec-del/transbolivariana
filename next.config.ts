import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  cacheComponents: true,
  partialPrefetching: true,
  // URLs del WordPress anterior → secciones nuevas (conserva el posicionamiento en Google)
  async redirects() {
    return [
      { source: "/mision-y-vision", destination: "/#nosotros", permanent: true },
      { source: "/servicios", destination: "/#servicios", permanent: true },
      { source: "/deposito", destination: "/#infraestructura", permanent: true },
      { source: "/transporte", destination: "/#servicios", permanent: true },
      { source: "/contacto", destination: "/#cotizar", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/index.php", destination: "/", permanent: true },
    ];
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

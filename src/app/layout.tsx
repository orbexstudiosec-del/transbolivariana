import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

// Las imágenes para compartir salen de opengraph-image.jpg / twitter-image.jpg en esta carpeta.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seo.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: site.seo.keywords,
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "Logística y transporte",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, email: true, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "/",
    siteName: site.name,
    title: site.seo.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.description,
  },
  other: {
    "geo.region": "EC-C",
    "geo.placename": "Tulcán",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d4c86",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-EC"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

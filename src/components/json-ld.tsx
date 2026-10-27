import { about, services, site } from "@/lib/site";

// Datos estructurados (schema.org) para que Google muestre la ficha de la empresa.
export function JsonLd() {
  const { contact, social } = site;
  const sameAs = Object.values(social).filter(Boolean);
  const intl = (phone: string) => (phone.startsWith("+") ? phone : `+593 ${phone.replace(/^0/, "")}`);

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        logo: `${site.url}/brand/logo.png`,
        image: `${site.url}/opengraph-image.jpg`,
        description: site.description,
        foundingDate: String(site.since),
        email: contact.email,
        telephone: intl(contact.phone),
        sameAs,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: intl(contact.mobile),
            contactType: "customer service",
            areaServed: ["EC", "CO", "PE", "BO"],
            availableLanguage: "Spanish",
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${site.url}/#business`,
        name: site.legalName,
        parentOrganization: { "@id": `${site.url}/#organization` },
        url: site.url,
        image: [`${site.url}/opengraph-image.jpg`, `${site.url}${about.image}`],
        logo: `${site.url}/brand/logo.png`,
        description: site.description,
        telephone: intl(contact.phone),
        email: contact.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Andrés Bello y Panamericana Norte",
          addressLocality: "Tulcán",
          addressRegion: "Carchi",
          addressCountry: "EC",
        },
        areaServed: [
          { "@type": "Country", name: "Ecuador" },
          { "@type": "Country", name: "Colombia" },
          { "@type": "Country", name: "Perú" },
          { "@type": "Country", name: "Bolivia" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday", "Sunday"],
            opens: "08:00",
            closes: "12:00",
          },
        ],
        sameAs,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de logística y comercio exterior",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.text },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: "es-EC",
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

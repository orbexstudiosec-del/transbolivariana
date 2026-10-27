import Image from "next/image";
import { Clock, Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { quoteBg, site, tel } from "@/lib/site";
import { QuoteForm } from "./quote-form";
import { Reveal } from "./reveal";

export function QuoteSection() {
  const { contact } = site;
  const items = [
    { icon: Phone, label: "Oficina", value: `${contact.phone} / ${contact.phoneAlt}`, href: tel(contact.phone) },
    { icon: Smartphone, label: "Celular / WhatsApp", value: contact.mobile, href: `https://wa.me/${contact.whatsapp}` },
    { icon: Mail, label: "Correo", value: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPin, label: "Dirección", value: contact.address },
    { icon: Clock, label: "Horario", value: contact.hours },
  ];

  return (
    <section id="cotizar" className="relative isolate overflow-hidden pt-40 pb-24 lg:pb-32">
      <Image src={quoteBg} alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-navy-950/90" />

      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.5fr]">
        <Reveal className="text-white">
          <span className="eyebrow text-brand-400!">Asesoramiento</span>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold sm:text-4xl">Consigue tu asesoramiento</h2>
          <p className="mt-4 text-lg text-white/70">
            Envíanos tu consulta y pronto un asesor se pondrá en contacto contigo con una propuesta adaptada a tu operación.
          </p>
          <ul className="mt-10 space-y-6">
            {items.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-500 text-white">
                  <Icon className="size-5" />
                </span>
                <div>
                  <div className="text-sm text-white/50">{label}</div>
                  {href ? (
                    <a href={href} className="font-semibold hover:text-brand-400">{value}</a>
                  ) : (
                    <div className="font-semibold">{value}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-10">
            <QuoteForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

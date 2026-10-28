import Image from "next/image";
import { cacheLife } from "next/cache";
import { Clock, Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { nav, services, site, tel } from "@/lib/site";
import { WhatsappIcon } from "./icons";
import { SocialLinks } from "./social-links";

async function currentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export async function Footer() {
  const { contact } = site;
  const year = await currentYear();

  return (
    <footer id="contacto" className="bg-ink-900 text-white/70">
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-10 py-14 text-sm sm:gap-12 sm:py-20 sm:text-base lg:grid-cols-[1.4fr_1fr_1.1fr_1.4fr]">
        <div className="col-span-2 sm:col-span-1">
          <div className="inline-block rounded-xl bg-white px-4 py-3">
            <Image src="/brand/logo.png" alt={site.name} width={624} height={156} className="h-10 w-auto" />
          </div>
          <p className="mt-6 max-w-xs">{site.description}</p>
          <p className="mt-4 max-w-xs text-sm text-white/50">Depósito Temporal Aduanero habilitado por la Aduana del Ecuador SENAE.</p>
          <div className="mt-6">
            <SocialLinks className="grid size-10 place-items-center rounded-full bg-white/5 transition hover:bg-brand-500 hover:text-white" iconClassName="size-4" />
          </div>
        </div>

        <FooterCol title="Enlaces">
          {nav.map((n) => (
            <li key={n.href}><a href={n.href} className="hover:text-brand-400">{n.label}</a></li>
          ))}
        </FooterCol>

        <FooterCol title="Servicios">
          {services.map((s) => (
            <li key={s.title}><a href="#servicios" className="hover:text-brand-400">{s.title}</a></li>
          ))}
        </FooterCol>

        <FooterCol title="Contacto" className="col-span-2 sm:col-span-1">
          <li className="flex gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-brand-400" />{contact.address}</li>
          <li><a href={tel(contact.phone)} className="flex gap-3 hover:text-brand-400"><Phone className="size-5 shrink-0 text-brand-400" />{contact.phone} / {contact.phoneAlt}</a></li>
          <li><a href={tel(contact.mobile)} className="flex gap-3 hover:text-brand-400"><Smartphone className="size-5 shrink-0 text-brand-400" />{contact.mobile}</a></li>
          <li className="flex gap-3">
            <Mail className="mt-0.5 size-5 shrink-0 text-brand-400" />
            <span className="flex flex-col break-all">
              <a href={`mailto:${contact.email}`} className="hover:text-brand-400">{contact.email}</a>
              <a href={`mailto:${contact.emailAlt}`} className="hover:text-brand-400">{contact.emailAlt}</a>
            </span>
          </li>
          <li className="flex gap-3"><Clock className="mt-0.5 size-5 shrink-0 text-brand-400" /><span className="flex flex-col">{contact.hours.split(" · ").map((h) => <span key={h}>{h}</span>)}</span></li>
        </FooterCol>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 pt-6 pb-24 text-center text-xs sm:flex-row sm:pb-6 sm:text-left sm:text-sm">
          <p>© {year} {site.legalName} Todos los derechos reservados.</p>
          <p>{site.tagline}</p>
        </div>
      </div>

      <a
        href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Hola, necesito información sobre sus servicios.")}`}
        target="_blank"
        rel="noopener"
        aria-label="Escríbenos por WhatsApp"
        className="fixed right-4 bottom-4 z-50 grid size-13 place-items-center rounded-full bg-[#25d366] text-white shadow-xl shadow-black/20 transition hover:scale-110 sm:right-5 sm:bottom-5 sm:size-14"
      >
        <WhatsappIcon className="size-6 sm:size-7" />
      </a>
    </footer>
  );
}

function FooterCol({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <h3 className="font-display text-base font-bold text-white sm:text-lg">{title}</h3>
      <span className="mt-3 block h-0.5 w-10 bg-brand-500" />
      <ul className="mt-5 space-y-3 sm:mt-6">{children}</ul>
    </div>
  );
}

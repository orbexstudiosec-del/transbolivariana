"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Download, Menu, Phone, X } from "lucide-react";
import { brochure, nav, site, tel } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? "shadow-lg shadow-navy-900/5" : ""}`}
    >
      <div className={`container-x flex items-center justify-between gap-6 transition-[height] ${scrolled ? "h-[72px]" : "h-[88px]"}`}>
        <a href="#inicio" className="shrink-0" aria-label={site.name}>
          <Image
            src="/brand/logo.png"
            alt={`${site.name} – ${site.tagline}`}
            width={624}
            height={156}
            priority
            className="h-11 w-auto sm:h-13"
          />
        </a>

        <nav className="hidden lg:block" aria-label="Principal">
          <ul className="flex items-center gap-6 font-display xl:gap-7 text-[15px] font-semibold text-ink-800">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="relative py-2 transition-colors hover:text-brand-500 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand-500 after:transition-transform hover:after:scale-x-100">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={brochure.href}
            download={brochure.fileName}
            className="hidden items-center gap-1.5 rounded-full border-2 border-brand-500 px-4 py-1.5 font-display text-[13px] font-bold whitespace-nowrap text-brand-500 transition hover:bg-brand-500 hover:text-white md:inline-flex lg:hidden xl:inline-flex"
          >
            <Download className="size-4" /> Brochure
          </a>
          <a
            href="#cotizar"
            className="hidden rounded-full border-2 border-brand-500 bg-brand-500 px-4 py-1.5 font-display text-[13px] font-bold whitespace-nowrap text-white transition hover:border-navy-700 hover:bg-navy-700 sm:inline-flex"
          >
            Cotizar envío
          </a>
          <a
            href={tel(site.contact.mobile)}
            aria-label="Llamar"
            className="grid size-11 place-items-center rounded-full bg-brand-50 text-navy-700 sm:hidden"
          >
            <Phone className="size-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="grid size-11 place-items-center rounded-full bg-navy-700 text-white lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Móvil"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-ink-100 bg-white lg:hidden"
          >
            <ul className="container-x flex flex-col py-3 font-display font-semibold">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-ink-100 py-3.5 text-ink-800 hover:text-brand-500"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="#cotizar"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-brand-500 py-3 text-center text-white"
                >
                  Cotizar envío
                </a>
              </li>
              <li className="pt-3">
                <a
                  href={brochure.href}
                  download={brochure.fileName}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-brand-500 py-2.5 text-brand-500"
                >
                  <Download className="size-4" /> Descargar brochure
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

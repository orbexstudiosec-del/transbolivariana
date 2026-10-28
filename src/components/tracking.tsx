"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { site } from "@/lib/site";

// Sin sistema de rastreo propio aún: la consulta se envía por WhatsApp al equipo.
export function Tracking() {
  const [code, setCode] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(`Hola, quiero consultar el estado de mi carga. Referencia: ${code.trim()}`);
    window.open(`https://wa.me/${site.contact.whatsapp}?text=${text}`, "_blank", "noopener");
  }

  return (
    <section id="rastreo" className="relative z-10 -mb-16">
      <div className="container-x">
        <div className="grid items-center gap-5 rounded-3xl bg-white p-6 shadow-2xl shadow-navy-900/15 sm:gap-6 sm:p-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="eyebrow">Rastreo</span>
            <h2 className="mt-3 font-display text-xl font-extrabold text-navy-900 sm:text-3xl">Consulta el estado de tu carga</h2>
            <p className="mt-1 text-sm text-ink-400 sm:mt-2 sm:text-base">Ingresa la placa, guía, CRT o N.º de trámite y te respondemos por WhatsApp.</p>
          </div>
          <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="tracking-code" className="sr-only">Referencia de la carga</label>
            <input
              id="tracking-code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              placeholder="Placa, guía o CRT"
              className="min-w-0 flex-1 rounded-full border border-ink-100 bg-ink-100/50 px-6 py-3.5 text-base outline-none sm:py-4 transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100"
            />
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-700 px-8 py-3.5 font-display sm:py-4 font-bold text-white transition hover:bg-brand-500">
              <Search className="size-5" /> Rastrear
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides, site } from "@/lib/site";

const INTERVAL = 7000;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = heroSlides.length;

  const go = useCallback((dir: number) => setIndex((i) => (i + dir + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => go(1), INTERVAL);
    return () => clearTimeout(id);
  }, [index, paused, go]);

  const slide = heroSlides[index];

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-navy-950 text-white lg:min-h-[720px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carrusel"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1 }, scale: { duration: INTERVAL / 1000 + 1, ease: "linear" } }}
        >
          <Image src={slide.image} alt="" fill priority={index === 0} sizes="100vw" className="object-cover" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-navy-950/95 via-navy-900/75 to-navy-900/20" />
      {/* Flechas del logo como motivo decorativo */}
      <svg className="absolute -right-24 bottom-0 -z-10 hidden h-[520px] opacity-15 lg:block" viewBox="0 0 200 200" aria-hidden>
        <path d="M30 100 L110 92 L110 78 L150 104 L110 128 L110 114 L30 112 Z" fill="#1f7fd6" />
        <path d="M84 20 L100 20 L120 160 L134 158 L114 196 L94 166 L106 164 Z" fill="#fff" />
      </svg>

      <div className="container-x pt-20 pb-44">
        {/* h1 fijo para SEO; los títulos del carrusel son h2 */}
        <h1 className="eyebrow mb-6 text-brand-400!">{site.seo.h1}</h1>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            className="max-w-2xl"
          >
            <motion.span variants={item} className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur">
              {slide.eyebrow}
            </motion.span>
            <motion.h2 variants={item} className="mt-5 font-display text-4xl leading-[1.08] font-extrabold text-balance sm:text-5xl lg:text-6xl">
              {slide.title}
            </motion.h2>
            <motion.p variants={item} className="mt-6 max-w-xl text-lg text-white/80">
              {slide.text}
            </motion.p>
            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              <a href="#cotizar" className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-4 font-display font-bold transition hover:bg-brand-600">
                Solicitar cotización
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#servicios" className="inline-flex items-center rounded-full border-2 border-white/40 px-7 py-4 font-display font-bold transition hover:border-white hover:bg-white hover:text-navy-900">
                Nuestros servicios
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-x-0 bottom-24">
        <div className="container-x flex items-center justify-between">
          <div className="flex gap-2">
            {heroSlides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ir a la diapositiva ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-10 bg-brand-400" : "w-5 bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => go(-1)} aria-label="Anterior" className="grid size-12 place-items-center rounded-full border border-white/30 transition hover:bg-white hover:text-navy-900">
              <ChevronLeft className="size-5" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Siguiente" className="grid size-12 place-items-center rounded-full border border-white/30 transition hover:bg-white hover:text-navy-900">
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

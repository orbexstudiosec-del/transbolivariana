"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";
import { stats } from "@/lib/site";

const fmt = new Intl.NumberFormat("es-EC");

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => (el.textContent = fmt.format(Math.round(v))),
    });
    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>{fmt.format(value)}</span>;
}

export function Stats() {
  return (
    <section className="bg-navy-700 text-white">
      <div className="container-x grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-4 py-12 text-center ${i % 2 ? "border-l border-white/10" : ""} ${i >= 2 ? "border-t border-white/10 lg:border-t-0" : ""} lg:border-l lg:first:border-l-0`}
          >
            <div className="font-display text-4xl font-extrabold sm:text-5xl">
              <Counter value={s.value} />
              <span className="text-brand-400">{s.suffix}</span>
            </div>
            <div className="mt-2 text-sm font-medium tracking-wide text-white/70 uppercase">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

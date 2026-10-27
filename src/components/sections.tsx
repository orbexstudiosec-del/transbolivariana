import Image from "next/image";
import { ArrowRight, CircleCheck, Eye, MapPin, ShieldCheck, Target } from "lucide-react";
import {
  about,
  basc,
  countries,
  highlights,
  infrastructure,
  partners,
  services,
  site,
  steps,
  values,
} from "@/lib/site";
import { FeatureGlyph, WhatsappIcon } from "./icons";
import { Reveal } from "./reveal";

function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className={`eyebrow ${light ? "text-brand-400!" : ""}`}>{eyebrow}</span>
      <h2 className={`mt-4 font-display text-3xl leading-tight font-extrabold text-balance sm:text-4xl ${light ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 text-lg ${light ? "text-white/70" : "text-ink-600"}`}>{text}</p>}
    </Reveal>
  );
}

export function Highlights() {
  return (
    <section className="relative z-10 -mt-16">
      <div className="container-x grid gap-4 md:grid-cols-3">
        {highlights.map(({ icon, title, text }, i) => (
          <Reveal key={title} delay={i * 0.1}>
            <div className="group flex h-full gap-5 rounded-2xl bg-white p-7 shadow-xl shadow-navy-900/10 transition hover:-translate-y-1 hover:bg-navy-700">
              <span className="grid size-14 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-500 transition group-hover:bg-white/10 group-hover:text-white">
                <FeatureGlyph name={icon} className="size-7" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-navy-900 transition group-hover:text-white">{title}</h3>
                <p className="mt-1 text-ink-600 transition group-hover:text-white/75">{text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="nosotros" className="py-24 lg:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative pr-6 pb-6 sm:pr-16 sm:pb-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image src={about.image} alt={`Instalaciones de ${site.legalName} en Tulcán`} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
          </div>
          <div className="absolute right-0 bottom-0 hidden aspect-[4/3] w-3/5 overflow-hidden rounded-3xl border-8 border-white sm:block">
            <Image src={about.imageSecondary} alt={`Equipo de ${site.name}`} fill sizes="30vw" className="object-cover" />
          </div>
          <div className="absolute top-8 -left-2 rounded-2xl bg-brand-500 px-6 py-5 text-white shadow-xl sm:-left-6">
            <div className="text-sm font-semibold text-white/85">Desde</div>
            <div className="font-display text-5xl font-extrabold">{site.since}</div>
            <div className="text-sm font-semibold text-white/85">moviendo carga<br />en la región andina</div>
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow="Quiénes somos" title={`Bienvenidos a ${site.legalName}`} text={about.intro} />
          <Reveal delay={0.1}>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {about.points.map((p) => (
                <li key={p} className="flex items-start gap-3 font-medium text-ink-800">
                  <CircleCheck className="mt-0.5 size-5 shrink-0 text-brand-500" /> {p}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href="#servicios" className="group inline-flex items-center gap-2 rounded-full bg-navy-700 px-7 py-4 font-display font-bold text-white transition hover:bg-brand-500">
                Nuestros servicios <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href={`https://wa.me/${site.contact.whatsapp}`} target="_blank" rel="noopener" className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-full bg-[#25d366] text-white">
                  <WhatsappIcon className="size-6" />
                </span>
                <span>
                  <span className="block text-sm text-ink-400">Escríbenos</span>
                  <span className="font-display font-bold text-navy-900">{site.contact.mobile}</span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="container-x mt-20 grid gap-6 md:grid-cols-2">
        {[
          { icon: Target, title: "Misión", text: about.mission },
          { icon: Eye, title: "Visión", text: about.vision },
        ].map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 0.1}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-ink-100 p-8 transition hover:border-brand-400 hover:shadow-xl hover:shadow-navy-900/5">
              <span className="grid size-14 place-items-center rounded-xl bg-navy-700 text-white">
                <Icon className="size-7" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-navy-900">{title}</h3>
              <p className="mt-3 text-ink-600">{text}</p>
              <p className="mt-4 font-display text-sm font-bold text-brand-500 italic">Logística Integral ¡Garantía!</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="servicios" className="bg-brand-50 py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Nuestras operaciones"
            title="Un servicio logístico integral"
            text="Transporte, almacenamiento y asesoramiento aduanero para empresas industriales nacionales y de la Comunidad Andina."
          />
          <Reveal>
            <a href="#cotizar" className="group inline-flex items-center gap-2 font-display font-bold text-brand-500">
              Consigue tu asesoramiento <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={s.image} alt={`${s.title} – ${site.name}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-950/60 to-transparent" />
                </div>
                <div className="relative p-7 pt-12">
                  <span className="absolute -top-8 left-7 grid size-16 place-items-center rounded-2xl bg-brand-500 text-white shadow-lg transition group-hover:bg-navy-700">
                    <FeatureGlyph name={s.icon} className="size-8" />
                  </span>
                  <h3 className="font-display text-xl font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-3 text-ink-600">{s.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Infrastructure() {
  return (
    <section id="infraestructura" className="py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Infraestructura"
          title="Equipos y tecnología al servicio de tu carga"
          text="Trabajamos bajo los lineamientos de Buenas Prácticas de Almacenamiento, con equipos que nos permiten ser eficientes y cuidadosos con la carga que manipulamos."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {infrastructure.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 0.1}>
              <article className="group grid h-full overflow-hidden rounded-2xl border border-ink-100 bg-white sm:grid-cols-[0.9fr_1fr]">
                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-auto">
                  <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 100vw" style={{ objectPosition: item.imagePosition }} className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-3 text-ink-600">{item.text}</p>
                  <ul className="mt-5 space-y-2">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm font-medium text-ink-800">
                        <CircleCheck className="mt-0.5 size-4 shrink-0 text-brand-500" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="bg-brand-50 py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading center eyebrow="Cómo trabajamos" title="Logística integral en cuatro pasos" />
        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-10 right-[12%] left-[12%] hidden border-t-2 border-dashed border-brand-400/40 lg:block" aria-hidden />
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <li className="relative text-center">
                <span className="relative mx-auto grid size-20 place-items-center rounded-full bg-white font-display text-2xl font-extrabold text-brand-500 shadow-lg ring-8 ring-white/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-ink-600">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Coverage() {
  return (
    <section id="cobertura" className="relative overflow-hidden bg-navy-900 py-24 text-white lg:py-32">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        aria-hidden
      />
      <div className="container-x relative grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <SectionHeading
          light
          eyebrow="Cobertura"
          title="Conectamos Ecuador con la Comunidad Andina"
          text="Desde Tulcán, junto al puente internacional de Rumichaca, operamos con todos los permisos internacionales para transportar carga entre los países de la CAN."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {countries.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06}>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-brand-400 hover:bg-white/10">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-500/20 text-brand-400">
                  <MapPin className="size-6" />
                </span>
                <div>
                  <div className="font-display text-lg font-bold">{c.name}</div>
                  <div className="text-sm text-white/60">{c.note}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Values() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading center eyebrow="Por qué elegirnos" title="Nos caracterizamos porque" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl bg-brand-50 p-8 text-center transition hover:-translate-y-1 hover:bg-navy-700">
                <span className="mx-auto grid size-16 place-items-center rounded-full bg-white text-brand-500 shadow-md transition group-hover:bg-brand-500 group-hover:text-white">
                  <FeatureGlyph name={v.icon} className="size-8" />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold text-navy-900 uppercase transition group-hover:text-white">{v.title}</h3>
                <p className="mt-2 text-ink-600 transition group-hover:text-white/75">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="grid gap-6 rounded-3xl border-l-4 border-brand-500 bg-ink-100/60 p-8 sm:grid-cols-[auto_1fr] sm:p-10">
            <span className="grid size-16 place-items-center rounded-2xl bg-navy-700 text-white">
              <ShieldCheck className="size-8" />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold text-navy-900">{basc.title}</h3>
              <p className="mt-3 text-ink-600">{basc.text}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Partners() {
  return (
    <section className="border-y border-ink-100 py-16">
      <div className="container-x">
        <p className="text-center font-display text-sm font-bold tracking-[0.18em] text-ink-400 uppercase">Socios estratégicos</p>
        <ul className="mt-10 grid grid-cols-3 items-center gap-x-8 gap-y-10 sm:grid-cols-5 lg:grid-cols-9">
          {partners.map((p) => (
            <li key={p.name} className="flex justify-center">
              <Image
                src={p.logo}
                alt={p.name}
                width={160}
                height={100}
                className="h-14 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CallToAction() {
  return (
    <section className="py-20">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-navy-700 to-brand-500 px-8 py-14 text-white sm:px-14">
            <svg className="absolute -top-10 -right-10 h-72 opacity-20" viewBox="0 0 200 200" aria-hidden>
              <path d="M30 100 L110 92 L110 78 L150 104 L110 128 L110 114 L30 112 Z" fill="#fff" />
              <path d="M84 20 L100 20 L120 160 L134 158 L114 196 L94 166 L106 164 Z" fill="#1c1f24" />
            </svg>
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Llámanos, será un gusto atenderte</h2>
                <p className="mt-3 max-w-xl text-lg text-white/80">
                  Oficina: {site.contact.phone} / {site.contact.phoneAlt} · Celular: {site.contact.mobile}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#cotizar" className="rounded-full bg-white px-7 py-4 font-display font-bold text-navy-900 transition hover:bg-ink-900 hover:text-white">
                  Solicitar asesoría
                </a>
                <a href={`https://wa.me/${site.contact.whatsapp}`} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 px-7 py-4 font-display font-bold transition hover:border-white">
                  <WhatsappIcon className="size-5" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

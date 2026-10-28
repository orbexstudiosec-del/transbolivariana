import Image from "next/image";
import { ArrowRight, CircleCheck, Eye, MapPin, ShieldCheck, Target } from "lucide-react";
import {
  about,
  basc,
  countries,
  fleet,
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
      <h2 className={`mt-3 font-display text-[1.75rem] leading-tight font-extrabold text-balance sm:mt-4 sm:text-4xl ${light ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 text-base sm:text-lg ${light ? "text-white/70" : "text-ink-600"}`}>{text}</p>}
    </Reveal>
  );
}

// Indicación para los carruseles que se deslizan solo en el celular.
function SwipeHint({ light = false }: { light?: boolean }) {
  return (
    <p className={`mt-1 flex items-center gap-1.5 text-xs font-semibold sm:hidden ${light ? "text-white/50" : "text-ink-400"}`}>
      Desliza para ver más <ArrowRight className="size-3.5" />
    </p>
  );
}

export function Highlights() {
  return (
    <section className="relative z-10 -mt-12 sm:-mt-16">
      <div className="container-x grid gap-3 sm:gap-4 md:grid-cols-3">
        {highlights.map(({ icon, title, text }, i) => (
          <Reveal key={title} delay={i * 0.1}>
            <div className="group flex h-full gap-4 rounded-2xl bg-white p-5 shadow-xl shadow-navy-900/10 transition hover:-translate-y-1 hover:bg-navy-700 sm:gap-5 sm:p-7">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-500 transition group-hover:bg-white/10 group-hover:text-white sm:size-14">
                <FeatureGlyph name={icon} className="size-6 sm:size-7" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-navy-900 transition group-hover:text-white sm:text-lg">{title}</h3>
                <p className="mt-1 text-sm text-ink-600 transition group-hover:text-white/75 sm:text-base">{text}</p>
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
    <section id="nosotros" className="section-y">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative pr-6 pb-6 sm:pr-16 sm:pb-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl sm:aspect-[4/5]">
            <Image src={about.image} alt={`Instalaciones de ${site.legalName} en Tulcán`} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
          </div>
          <div className="absolute right-0 bottom-0 hidden aspect-[4/3] w-3/5 overflow-hidden rounded-3xl border-8 border-white sm:block">
            <Image src={about.imageSecondary} alt={`Equipo de ${site.name}`} fill sizes="30vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-2 left-4 rounded-2xl bg-brand-500 px-5 py-4 text-white shadow-xl sm:top-8 sm:bottom-auto sm:-left-6 sm:px-6 sm:py-5">
            <div className="text-xs font-semibold text-white/85 sm:text-sm">Desde</div>
            <div className="font-display text-4xl font-extrabold sm:text-5xl">{site.since}</div>
            <div className="text-xs font-semibold text-white/85 sm:text-sm">moviendo carga<br />en la región andina</div>
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow="Quiénes somos" title={`Bienvenidos a ${site.legalName}`} text={about.intro} />
          <Reveal delay={0.1}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {about.points.map((p) => (
                <li key={p} className="flex items-start gap-3 font-medium text-ink-800">
                  <CircleCheck className="mt-0.5 size-5 shrink-0 text-brand-500" /> {p}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <a href="#servicios" className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-700 px-7 py-4 font-display font-bold text-white transition hover:bg-brand-500">
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

      <div className="container-x mt-14 grid gap-4 sm:mt-20 sm:gap-6 md:grid-cols-2">
        {[
          { icon: Target, title: "Misión", text: about.mission },
          { icon: Eye, title: "Visión", text: about.vision },
        ].map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 0.1}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-ink-100 p-6 transition hover:border-brand-400 hover:shadow-xl hover:shadow-navy-900/5 sm:p-8">
              <div className="flex items-center gap-4 sm:block">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-navy-700 text-white sm:size-14">
                  <Icon className="size-6 sm:size-7" />
                </span>
                <h3 className="font-display text-xl font-bold text-navy-900 sm:mt-5 sm:text-2xl">{title}</h3>
              </div>
              <p className="mt-4 text-ink-600 sm:mt-3">{text}</p>
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
    <section id="servicios" className="section-y bg-brand-50">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Nuestras operaciones"
            title="Un servicio logístico integral"
            text="Transporte, almacenamiento y asesoramiento aduanero para empresas industriales nacionales y de la Comunidad Andina."
          />
          <Reveal className="hidden sm:block">
            <a href="#cotizar" className="group inline-flex items-center gap-2 font-display font-bold text-brand-500">
              Consigue tu asesoramiento <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <Reveal className="mt-10 sm:mt-14">
          <SwipeHint />
          <div className="rail mt-3 sm:mt-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={s.image} alt={`${s.title} – ${site.name}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-950/60 to-transparent" />
                </div>
                <div className="relative p-6 pt-10 sm:p-7 sm:pt-12">
                  <span className="absolute -top-7 left-6 grid size-14 place-items-center rounded-2xl bg-brand-500 text-white shadow-lg transition group-hover:bg-navy-700 sm:-top-8 sm:left-7 sm:size-16">
                    <FeatureGlyph name={s.icon} className="size-7 sm:size-8" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-navy-900 sm:text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink-600 sm:mt-3 sm:text-base">{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-8 sm:mt-14">
          <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-1">
              <h3 className="font-display text-lg font-bold text-navy-900 sm:text-xl">Tipo de flota</h3>
              <p className="text-xs text-ink-400 sm:text-sm">Peso máximo aproximado por unidad</p>
            </div>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4 lg:grid-cols-4">
              {fleet.map((f) => (
                <li key={f.name} className="flex flex-col gap-3 rounded-xl border border-ink-100 p-4 sm:flex-row sm:items-center sm:gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-500 sm:size-12">
                    <FeatureGlyph name="truck" className="size-5 sm:size-6" />
                  </span>
                  <div>
                    <div className="font-display text-sm font-bold text-navy-900 sm:text-base">{f.name}</div>
                    <div className="text-sm whitespace-nowrap text-ink-600">{f.capacity}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <a href="#cotizar" className="group mt-8 flex items-center justify-center gap-2 rounded-full border-2 border-brand-500 py-3.5 font-display font-bold text-brand-500 sm:hidden">
          Consigue tu asesoramiento <ArrowRight className="size-5" />
        </a>
      </div>
    </section>
  );
}

export function Infrastructure() {
  return (
    <section id="infraestructura" className="section-y">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Infraestructura"
          title="Equipos y tecnología al servicio de tu carga"
          text="Trabajamos bajo los lineamientos de Buenas Prácticas de Almacenamiento, con equipos que nos permiten ser eficientes y cuidadosos con la carga que manipulamos."
        />
        <Reveal className="mt-10 sm:mt-14">
          <SwipeHint />
          <div className="rail mt-3 sm:mt-0 sm:grid sm:gap-6 lg:grid-cols-2 lg:gap-8">
            {infrastructure.map((item) => (
              <article key={item.title} className="group grid overflow-hidden rounded-2xl border border-ink-100 bg-white content-start sm:grid-cols-[0.9fr_1fr]">
                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-auto">
                  <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 85vw" style={{ objectPosition: item.imagePosition }} className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5 sm:p-7">
                  <h3 className="font-display text-lg font-bold text-navy-900 sm:text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-600 sm:mt-3 sm:text-base">{item.text}</p>
                  <ul className="mt-4 space-y-2 sm:mt-5">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm font-medium text-ink-800">
                        <CircleCheck className="mt-0.5 size-4 shrink-0 text-brand-500" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section-y bg-brand-50">
      <div className="container-x">
        <SectionHeading center eyebrow="Cómo trabajamos" title="Logística integral en cuatro pasos" />
        <ol className="relative mt-10 grid gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          <div className="absolute top-10 right-[12%] left-[12%] hidden border-t-2 border-dashed border-brand-400/40 lg:block" aria-hidden />
          {/* Línea vertical que une los pasos en el celular */}
          <div className="absolute top-7 bottom-7 left-7 border-l-2 border-dashed border-brand-400/40 sm:hidden" aria-hidden />
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <li className="relative flex gap-5 sm:block sm:text-center">
                <span className="relative grid size-14 shrink-0 place-items-center rounded-full bg-white font-display text-lg font-extrabold text-brand-500 shadow-lg ring-4 ring-brand-50 sm:mx-auto sm:size-20 sm:text-2xl sm:ring-8 sm:ring-white/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-1 sm:pt-0">
                  <h3 className="font-display text-lg font-bold text-navy-900 sm:mt-6 sm:text-xl">{step.title}</h3>
                  <p className="mt-1 text-sm text-ink-600 sm:mt-2 sm:text-base">{step.text}</p>
                </div>
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
    <section id="cobertura" className="section-y relative overflow-hidden bg-navy-900 text-white">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        aria-hidden
      />
      <div className="container-x relative grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-14">
        <SectionHeading
          light
          eyebrow="Cobertura"
          title="Conectamos Ecuador con la Comunidad Andina"
          text="Desde Tulcán, a 10 km del puente internacional de Rumichaca, cubrimos las principales rutas de la Comunidad Andina con flota propia y todos los permisos internacionales."
        />
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {countries.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06}>
              <div className="flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:border-brand-400 hover:bg-white/10 sm:p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-500/20 text-brand-400 sm:size-12">
                  <MapPin className="size-5 sm:size-6" />
                </span>
                <div>
                  <div className="font-display text-base font-bold sm:text-lg">{c.name}</div>
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
    <section className="section-y">
      <div className="container-x">
        <SectionHeading center eyebrow="Por qué elegirnos" title="Nos caracterizamos porque" />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl bg-brand-50 p-4 text-center transition hover:-translate-y-1 hover:bg-navy-700 sm:p-8">
                <span className="mx-auto grid size-12 place-items-center rounded-full bg-white text-brand-500 shadow-md transition group-hover:bg-brand-500 group-hover:text-white sm:size-16">
                  <FeatureGlyph name={v.icon} className="size-6 sm:size-8" />
                </span>
                <h3 className="mt-4 font-display text-sm font-bold text-navy-900 uppercase transition group-hover:text-white sm:mt-6 sm:text-lg">{v.title}</h3>
                <p className="mt-1.5 text-xs text-ink-600 transition group-hover:text-white/75 sm:mt-2 sm:text-base">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 sm:mt-16">
          <div className="grid gap-5 rounded-3xl border-l-4 border-brand-500 bg-ink-100/60 p-6 sm:grid-cols-[auto_1fr] sm:gap-6 sm:p-10">
            <span className="grid size-12 place-items-center rounded-2xl bg-navy-700 text-white sm:size-16">
              <ShieldCheck className="size-6 sm:size-8" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-navy-900 sm:text-xl">{basc.title}</h3>
              <p className="mt-3 text-sm text-ink-600 sm:text-base">{basc.text}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {basc.certificate.split(" · ").map((c) => (
                  <li key={c} className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-sm sm:text-sm">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Partners() {
  return (
    <section className="border-y border-ink-100 py-12 sm:py-16">
      <div className="container-x">
        <p className="text-center font-display text-xs font-bold tracking-[0.18em] text-ink-400 uppercase sm:text-sm">Socios estratégicos</p>
        <ul className="mt-8 grid grid-cols-3 items-center gap-x-6 gap-y-8 sm:mt-10 sm:grid-cols-5 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-9">
          {partners.map((p) => (
            <li key={p.name} className="flex justify-center">
              <Image
                src={p.logo}
                alt={p.name}
                width={160}
                height={100}
                className="h-11 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-14"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CallToAction() {
  const { contact } = site;
  return (
    <section className="py-14 sm:py-20">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-navy-700 to-brand-500 px-6 py-10 text-white sm:px-14 sm:py-14">
            <svg className="absolute -top-10 -right-10 h-56 opacity-20 sm:h-72" viewBox="0 0 200 200" aria-hidden>
              <path d="M30 100 L110 92 L110 78 L150 104 L110 128 L110 114 L30 112 Z" fill="#fff" />
              <path d="M84 20 L100 20 L120 160 L134 158 L114 196 L94 166 L106 164 Z" fill="#1c1f24" />
            </svg>
            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <h2 className="font-display text-2xl font-extrabold text-balance sm:text-4xl">Llámanos, será un gusto atenderte</h2>
                <p className="mt-4 flex flex-col gap-1 text-white/85 sm:mt-3 sm:block sm:text-lg">
                  <span className="whitespace-nowrap">Oficina: {contact.phone} / {contact.phoneAlt}</span>
                  <span className="hidden sm:inline"> · </span>
                  <span className="whitespace-nowrap">Celular: {contact.mobile}</span>
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:gap-4">
                <a href="#cotizar" className="rounded-full bg-white px-7 py-4 text-center font-display font-bold whitespace-nowrap text-navy-900 transition hover:bg-ink-900 hover:text-white">
                  Solicitar asesoría
                </a>
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/50 px-7 py-4 font-display font-bold whitespace-nowrap transition hover:border-white">
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

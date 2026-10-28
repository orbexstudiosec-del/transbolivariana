"use client";

import { useActionState } from "react";
import { CircleCheck, LoaderCircle, Send } from "lucide-react";
import { requestQuote, type QuoteState } from "@/app/actions";
import { services } from "@/lib/site";

const initial: QuoteState = { status: "idle" };

export function QuoteForm() {
  const [state, action, pending] = useActionState(requestQuote, initial);

  if (state.status === "success") {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
        <CircleCheck className="size-16 text-brand-500" />
        <h3 className="mt-5 font-display text-2xl font-bold text-navy-900">Mensaje enviado</h3>
        <p className="mt-2 max-w-sm text-ink-600">{state.message}</p>
      </div>
    );
  }

  const err = state.errors ?? {};

  return (
    <form action={action} className="grid gap-4 sm:grid-cols-2" noValidate>
      <Field name="name" label="Nombre / Empresa" error={err.name} autoComplete="organization" />
      <Field name="email" label="Correo electrónico" type="email" error={err.email} autoComplete="email" />
      <Field name="phone" label="Teléfono / WhatsApp" type="tel" error={err.phone} autoComplete="tel" />
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-ink-800">Servicio</span>
        <select name="service" defaultValue="" className={inputCls(err.service)} aria-invalid={!!err.service}>
          <option value="" disabled>Selecciona…</option>
          {services.map((s) => (
            <option key={s.title}>{s.title}</option>
          ))}
        </select>
        {err.service && <span className="mt-1 block text-sm text-red-600">{err.service}</span>}
      </label>
      <Field name="origin" label="Origen" placeholder="Ciudad / puerto" error={err.origin} />
      <Field name="destination" label="Destino" placeholder="Ciudad / puerto" error={err.destination} />
      <label className="block sm:col-span-2">
        <span className="mb-1.5 block text-sm font-semibold text-ink-800">Detalle de la carga</span>
        <textarea name="details" rows={4} placeholder="Tipo de mercancía, peso, volumen, cantidad de bultos…" className={inputCls()} />
      </label>
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-4 font-display sm:w-auto font-bold text-white transition hover:bg-navy-700 disabled:opacity-60"
        >
          {pending ? <LoaderCircle className="size-5 animate-spin" /> : <Send className="size-5" />}
          {pending ? "Enviando…" : "Enviar consulta"}
        </button>
        {state.status === "error" && <p className="text-sm font-medium text-red-600" role="alert">{state.message}</p>}
      </div>
    </form>
  );
}

function inputCls(error?: string) {
  return `w-full rounded-xl border bg-ink-100/50 px-4 py-3 text-base text-ink-900 sm:py-3.5 outline-none transition placeholder:text-ink-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100 ${error ? "border-red-400" : "border-ink-100"}`;
}

function Field({
  name,
  label,
  error,
  ...rest
}: { name: string; label: string; error?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink-800">{label}</span>
      <input name={name} className={inputCls(error)} aria-invalid={!!error} {...rest} />
      {error && <span className="mt-1 block text-sm text-red-600">{error}</span>}
    </label>
  );
}

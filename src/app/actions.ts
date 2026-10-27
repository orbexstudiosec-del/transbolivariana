"use server";

import nodemailer from "nodemailer";

export type QuoteState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<QuoteField, string>>;
};

type QuoteField = "name" | "email" | "phone" | "service" | "origin" | "destination" | "details";

const required: QuoteField[] = ["name", "email", "phone", "service", "origin", "destination"];

const labels: Record<QuoteField, string> = {
  name: "Nombre / Empresa",
  email: "Correo",
  phone: "Teléfono",
  service: "Servicio",
  origin: "Origen",
  destination: "Destino",
  details: "Detalle de la carga",
};

export async function requestQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  // Campo trampa para bots
  if (formData.get("website")) return { status: "success", message: "¡Gracias! Te contactaremos pronto." };

  const data = Object.fromEntries(
    (Object.keys(labels) as QuoteField[]).map((k) => [k, String(formData.get(k) ?? "").trim().slice(0, 2000)]),
  ) as Record<QuoteField, string>;

  const errors: QuoteState["errors"] = {};
  for (const field of required) if (!data[field]) errors[field] = "Campo obligatorio";
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Correo no válido";
  if (Object.keys(errors).length) return { status: "error", message: "Revisa los campos marcados.", errors };

  const body = (Object.keys(labels) as QuoteField[]).map((k) => `${labels[k]}: ${data[k] || "-"}`).join("\n");

  try {
    await deliver(`Nueva consulta web: ${data.service} (${data.origin} → ${data.destination})`, body, data.email);
  } catch (err) {
    console.error("[cotizacion] error al enviar", err);
    return { status: "error", message: "No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp." };
  }

  return { status: "success", message: "¡Gracias! Pronto un asesor se pondrá en contacto contigo." };
}

async function deliver(subject: string, text: string, replyTo: string) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO, MAIL_FROM } = process.env;

  if (!SMTP_HOST || !MAIL_TO) {
    // Sin SMTP configurado (desarrollo): solo se registra en consola.
    console.info(`[cotizacion] ${subject}\n${text}`);
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: Number(SMTP_PORT) === 465,
    auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
  });

  await transporter.sendMail({ from: MAIL_FROM ?? SMTP_USER, to: MAIL_TO, replyTo, subject, text });
}

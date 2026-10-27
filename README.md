# Transbolivariana – Sitio web

Next.js 16 (App Router, Cache Components) · React 19 · Tailwind CSS v4 · Motion · TypeScript.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
```

Contenido editable (textos, contactos, servicios, imágenes): `src/lib/site.ts`.
Colores de marca: bloque `@theme` en `src/app/globals.css`.
Logo: `public/brand/logo.png`.

## Formulario de cotización

Se envía con una Server Action (`src/app/actions.ts`). Configura SMTP en `.env` (ver `.env.example`).
Sin SMTP, las solicitudes solo se registran en el log del servidor.

## Despliegue en VPS (Docker + Caddy con HTTPS automático)

Requisitos: Docker y Docker Compose en el VPS, y el DNS del dominio (A/AAAA para `@` y `www`) apuntando a la IP del VPS.

```bash
git clone <repo> transbolivariana && cd transbolivariana
cp .env.example .env   # edita DOMAIN y SMTP
docker compose up -d --build
```

Actualizar: `git pull && docker compose up -d --build`.

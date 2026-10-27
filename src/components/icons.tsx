import {
  Award,
  BadgeCheck,
  Droplets,
  FileCheck2,
  Forklift,
  Handshake,
  Satellite,
  Scale,
  ShieldCheck,
  Truck,
  Warehouse,
  Zap,
  type LucideProps,
} from "lucide-react";
import type { FeatureIcon } from "@/lib/site";

const featureIcons = {
  truck: Truck,
  tanker: Droplets,
  warehouse: Warehouse,
  customs: FileCheck2,
  forklift: Forklift,
  scale: Scale,
  shield: ShieldCheck,
  badge: BadgeCheck,
  satellite: Satellite,
  handshake: Handshake,
  award: Award,
  zap: Zap,
} satisfies Record<FeatureIcon, unknown>;

export function FeatureGlyph({ name, ...props }: { name: FeatureIcon } & LucideProps) {
  const Icon = featureIcons[name];
  return <Icon {...props} />;
}

// Lucide ya no incluye logos de marcas, así que van como SVG propios.
type SvgProps = React.SVGProps<SVGSVGElement>;

export const FacebookIcon = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z" />
  </svg>
);

export const InstagramIcon = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const LinkedinIcon = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3V9.75zm7 0h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.6 4.77 6V21h-4v-5c0-1.2 0-2.75-1.68-2.75-1.68 0-1.94 1.3-1.94 2.66V21h-4V9.75z" />
  </svg>
);

export const WhatsappIcon = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.15-1.35A9.9 9.9 0 1 0 12.04 2zm0 18.1c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.06.8.82-2.98-.2-.31a8.2 8.2 0 1 1 6.99 3.83zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.16.25-.63.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.37-2.94c-.25-.44.25-.41.72-1.36.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.74 2.74 0 0 0-.86 2.04c0 1.2.88 2.37 1 2.53.12.16 1.73 2.64 4.2 3.7 1.56.67 2.17.73 2.95.62.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
  </svg>
);

import { Clock, Mail, Phone } from "lucide-react";
import { site, tel } from "@/lib/site";
import { SocialLinks } from "./social-links";

export function TopBar() {
  const { contact } = site;
  return (
    <div className="hidden bg-navy-900 text-sm text-white/80 md:block">
      <div className="container-x flex h-11 items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <a href={tel(contact.phone)} className="flex items-center gap-2 hover:text-white">
            <Phone className="size-4 text-brand-400" /> {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-white">
            <Mail className="size-4 text-brand-400" /> {contact.email}
          </a>
          <span className="hidden items-center gap-2 lg:flex">
            <Clock className="size-4 text-brand-400" /> {contact.hours}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-medium text-white/60">Logística integral desde {site.since}</span>
          <SocialLinks className="hover:text-white" iconClassName="size-4" />
        </div>
      </div>
    </div>
  );
}

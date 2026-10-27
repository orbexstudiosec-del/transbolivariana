import { site } from "@/lib/site";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./icons";

const networks = [
  { key: "facebook", label: "Facebook", Icon: FacebookIcon },
  { key: "instagram", label: "Instagram", Icon: InstagramIcon },
  { key: "linkedin", label: "LinkedIn", Icon: LinkedinIcon },
] as const;

export function SocialLinks({ className, iconClassName }: { className?: string; iconClassName?: string }) {
  const active = networks.filter((n) => site.social[n.key]);
  if (!active.length) return null;
  return (
    <div className="flex gap-3">
      {active.map(({ key, label, Icon }) => (
        <a key={key} href={site.social[key]} target="_blank" rel="noopener" aria-label={label} className={className}>
          <Icon className={iconClassName} />
        </a>
      ))}
    </div>
  );
}

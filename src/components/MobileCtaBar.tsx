import { Link } from "react-router";
import { MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { RESTAURANT, telHref } from "@/data/restaurant";

/**
 * Fixed mobile CTA bar — CALL · MENU · DIRECTIONS.
 * The Call slot activates automatically once RESTAURANT.phone is verified;
 * until then it shows the reservation shortcut instead (no dead buttons).
 */
export default function MobileCtaBar() {
  const phone = telHref(RESTAURANT.phone);

  const items = [
    {
      label: "Call",
      icon: Phone,
      href: phone,
      to: !phone ? "/visit#reserve" : undefined,
    },
    { label: "Menu", icon: UtensilsCrossed, to: "/menu" },
    {
      label: "Directions",
      icon: MapPin,
      href: RESTAURANT.mapsUrl,
      external: true,
    },
  ];

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border/80 bg-ivory/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
    >
      <div className="grid grid-cols-3 divide-x divide-border/70">
        {items.map((item) => {
          const Icon = item.icon;
          const cls =
            "flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold tracking-wide text-ink transition-colors active:text-brass";
          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={cls}
            >
              <Icon className="size-[18px]" aria-hidden="true" />
              {item.label}
            </a>
          ) : (
            <Link key={item.label} to={item.to ?? "/"} className={cls}>
              <Icon className="size-[18px]" aria-hidden="true" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

import { Link } from "react-router";
import { Clock, MapPin } from "lucide-react";
import { RESTAURANT, telHref } from "@/data/restaurant";

const QUICK_LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About Us" },
  { to: "/visit", label: "Visit Us" },
];

export default function Footer() {
  const phone = telHref(RESTAURANT.phone);

  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-14 md:px-8 md:pb-16 md:pt-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-md bg-ivory/10 font-display text-lg font-semibold text-brass">
                R
              </span>
              <div>
                <p className="font-display text-lg font-semibold tracking-tight">
                  Roma&rsquo;s Café Diner
                </p>
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-ivory/50">
                  Cafe · Restaurant · Diner
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/60">
              A welcoming place to eat, unwind and stay a little longer —
              serving {RESTAURANT.city} since {RESTAURANT.established}.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <p className="eyebrow text-ivory/40">Quick Links</p>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ivory/70 transition-colors hover:text-brass"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + hours — verified info only */}
          <div>
            <p className="eyebrow text-ivory/40">Find Us</p>
            <ul className="mt-4 space-y-3 text-sm text-ivory/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brass" />
                {RESTAURANT.address ? (
                  <span>{RESTAURANT.address}</span>
                ) : (
                  <a
                    href={RESTAURANT.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-brass"
                  >
                    {RESTAURANT.city}, Uttar Pradesh — find us on Google Maps
                  </a>
                )}
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0 text-brass" />
                <span>
                  {RESTAURANT.openingHours}
                  <span className="block text-xs text-ivory/45">Daily</span>
                </span>
              </li>
              {phone && (
                <li>
                  <a
                    href={phone}
                    className="transition-colors hover:text-brass"
                  >
                    {RESTAURANT.phoneDisplay ?? RESTAURANT.phone}
                  </a>
                </li>
              )}
              {RESTAURANT.instagramUrl && (
                <li>
                  <a
                    href={RESTAURANT.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-brass"
                  >
                    Instagram
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ivory/10 pt-6 text-xs text-ivory/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Roma&rsquo;s Café Diner. All rights
            reserved.
          </p>
          <p>
            Cafe · Restaurant · Diner · {RESTAURANT.city}
          </p>
        </div>
      </div>
    </footer>
  );
}

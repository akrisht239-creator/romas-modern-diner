import { Instagram } from "lucide-react";
import { RESTAURANT } from "@/data/restaurant";
import { SectionHeading } from "./shared";

/**
 * Instagram section — reusable, activates only when a VERIFIED Instagram URL
 * is set in src/data/restaurant.ts (RESTAURANT.instagramUrl).
 * A verified tile image list can be added later as VERIFIED_INSTAGRAM_TILES.
 */
const VERIFIED_INSTAGRAM_TILES: string[] = [];

export function InstagramSection() {
  // No verified Instagram URL supplied → do not render the section.
  // (We never invent a social handle for the business.)
  if (!RESTAURANT.instagramUrl) return null;

  return (
    <section className="py-16 md:py-24" aria-labelledby="instagram-heading">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          align="center"
          eyebrow="Instagram"
          title={<span id="instagram-heading">Follow Roma&rsquo;s</span>}
          lede="Discover the latest dishes, café moments and updates."
        />

        {VERIFIED_INSTAGRAM_TILES.length > 0 && (
          <div className="mt-10 grid grid-cols-3 gap-3 md:grid-cols-6">
            {VERIFIED_INSTAGRAM_TILES.map((src) => (
              <a
                key={src}
                href={RESTAURANT.instagramUrl ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-lg border border-border"
              >
                <img
                  src={src}
                  alt="Roma's Café Diner on Instagram"
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 grid place-items-center bg-ink/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <Instagram className="size-5 text-ivory" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

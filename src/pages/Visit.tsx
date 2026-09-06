import { motion } from "framer-motion";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { RESTAURANT, telHref } from "@/data/restaurant";
import ReservationForm from "@/components/ReservationForm";
import {
  Reveal,
  SectionHeading,
  staggerChild,
  staggerParent,
  usePageMeta,
} from "@/components/shared";
import { Button } from "@/components/ui/button";

/**
 * Google Maps embed — keyless, points at the restaurant's real location via
 * a maps search query. If Google returns no confident match, the fallback
 * card below still routes guests to a live Maps search for the business.
 */
const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(RESTAURANT.mapsQuery) +
  "&output=embed";

export default function Visit() {
  usePageMeta(
    "Visit Us — Roma's Café Diner | Location & Hours",
    "Find Roma's Café Diner in Varanasi. Opening hours 11 AM – 11 PM daily, directions on Google Maps, and table enquiries. Call or send an enquiry to reserve.",
  );

  const phone = telHref(RESTAURANT.phone);

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────────────── */}
      <section className="bg-ink pb-14 pt-32 md:pb-20 md:pt-44">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.p
              variants={staggerChild}
              className="eyebrow mb-4 flex items-center gap-3 text-brass"
            >
              <span aria-hidden="true" className="inline-block h-px w-10 bg-brass" />
              Visit Us
            </motion.p>
            <motion.h1
              variants={staggerChild}
              className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ivory md:text-6xl"
            >
              Come find us.
              <span className="italic text-brass"> We&rsquo;re easy to spot.</span>
            </motion.h1>
            <motion.p
              variants={staggerChild}
              className="mt-5 max-w-xl text-[15px] leading-relaxed text-ivory/65"
            >
              Open every day from {RESTAURANT.openingHours}. Walk in, call
              ahead, or send a table enquiry below.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── VISIT INFO + MAP ─────────────────────────────────────────────── */}
      <section className="py-14 md:py-20" aria-label="Location and opening hours">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.25fr]">
            {/* Info card */}
            <Reveal>
              <div className="card-quiet flex h-full flex-col p-7 md:p-9">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  Roma&rsquo;s Café Diner
                </h2>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                  Cafe · Restaurant · Diner
                </p>

                <ul className="mt-7 space-y-6 text-[15px]">
                  <li className="flex items-start gap-3.5">
                    <span className="grid size-9 shrink-0 place-items-center rounded-md bg-brass/10 text-brass">
                      <MapPin className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-ink">Address</p>
                      {RESTAURANT.address ? (
                        <p className="mt-0.5 leading-relaxed text-muted-foreground">
                          {RESTAURANT.address}
                        </p>
                      ) : (
                        <p className="mt-0.5 leading-relaxed text-muted-foreground">
                          {RESTAURANT.city}, Uttar Pradesh —{" "}
                          <a
                            href={RESTAURANT.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-brass underline-offset-2 hover:underline"
                          >
                            find the exact location on Google Maps
                          </a>
                        </p>
                      )}
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="grid size-9 shrink-0 place-items-center rounded-md bg-brass/10 text-brass">
                      <Clock className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-ink">Opening Hours</p>
                      <p className="mt-0.5 leading-relaxed text-muted-foreground">
                        {RESTAURANT.openingHours}
                        <span className="block text-sm text-muted-foreground/70">
                          Every day
                        </span>
                      </p>
                    </div>
                  </li>

                  {phone && (
                    <li className="flex items-start gap-3.5">
                      <span className="grid size-9 shrink-0 place-items-center rounded-md bg-brass/10 text-brass">
                        <Phone className="size-4" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-semibold text-ink">Phone</p>
                        <a
                          href={phone}
                          className="mt-0.5 block leading-relaxed text-brass underline-offset-2 hover:underline"
                        >
                          {RESTAURANT.phoneDisplay ?? RESTAURANT.phone}
                        </a>
                      </div>
                    </li>
                  )}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-7">
                  {phone ? (
                    <Button
                      asChild
                      className="h-11 rounded-full bg-ink px-6 font-sans text-[13px] font-semibold tracking-wide text-ivory shadow-none transition-colors hover:bg-brass"
                    >
                      <a href={phone}>
                        <Phone className="mr-2 size-4" aria-hidden="true" />
                        Call
                      </a>
                    </Button>
                  ) : (
                    <Button
                      asChild
                      className="h-11 rounded-full bg-ink px-6 font-sans text-[13px] font-semibold tracking-wide text-ivory shadow-none transition-colors hover:bg-brass"
                    >
                      <a href="#reserve">Send Enquiry</a>
                    </Button>
                  )}
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-full border border-ink/20 bg-transparent px-6 font-sans text-[13px] font-semibold tracking-wide text-ink shadow-none transition-colors hover:bg-ink hover:text-ivory"
                  >
                    <a href={RESTAURANT.mapsUrl} target="_blank" rel="noopener noreferrer">
                      Get Directions
                      <ArrowUpRight className="ml-2 size-4" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>

            {/* Map */}
            <Reveal delay={0.1}>
              <div className="relative h-full min-h-[320px] overflow-hidden rounded-lg border border-border shadow-sm md:min-h-[420px]">
                <iframe
                  title="Map — Roma's Café Diner, Varanasi"
                  src={MAP_EMBED_SRC}
                  className="absolute inset-0 size-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={RESTAURANT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-quiet absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wide text-ink transition-colors hover:text-brass"
                >
                  Open in Google Maps
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── RESERVATION / ENQUIRY ────────────────────────────────────────── */}
      <section id="reserve" className="scroll-mt-24 bg-secondary/60 py-14 md:py-20" aria-labelledby="reserve-heading">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            align="center"
            eyebrow="Reservations"
            title={<span id="reserve-heading">Reserve a table.</span>}
            lede="Tell us when you're coming and the team will call to confirm. This sends an enquiry — it does not automatically confirm a booking."
          />
          <Reveal delay={0.08} className="mx-auto mt-10 max-w-3xl">
            <ReservationForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { RESTAURANT } from "@/data/restaurant";
import {
  RatingStars,
  Reveal,
  SectionHeading,
  SmartImage,
  staggerChild,
  staggerParent,
  usePageMeta,
} from "@/components/shared";
import { Button } from "@/components/ui/button";

const STORY_IMG =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=75";
const DETAIL_IMG =
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=75";

const HIGHLIGHTS = [
  { label: "Established", value: String(RESTAURANT.established) },
  { label: "Google Rating", value: `${RESTAURANT.googleRating}★` },
  { label: "Google Reviews", value: RESTAURANT.googleReviews },
  { label: "Zomato Dining Rating", value: `${RESTAURANT.zomatoRating}★` },
  { label: "Cost for Two", value: RESTAURANT.costForTwo },
] as const;

const WHY = [
  {
    title: "An established presence",
    body: `Serving ${RESTAURANT.city} since ${RESTAURANT.established} — a familiar name for regulars and first-timers alike.`,
  },
  {
    title: "A varied menu",
    body: "Veg and non-veg food, pastas and pizzas, steaks and sides — plus shakes, coffees and all-day beverages.",
  },
  {
    title: "Cafe + diner, in one room",
    body: "Come in for a quick coffee, stay for a full meal. One space that works for both.",
  },
  {
    title: "Food and beverages, all day",
    body: `The kitchen and coffee counter run from ${RESTAURANT.openingHoursShort}, every day of the week.`,
  },
  {
    title: "A strong review presence",
    body: `Around ${RESTAURANT.googleReviews} Google reviews at ${RESTAURANT.googleRating}★, and a ${RESTAURANT.zomatoRating}★ dining rating on Zomato.`,
  },
] as const;

export default function About() {
  usePageMeta(
    "About Us — Roma's Café Diner | Since 2016",
    "Roma's Café Diner has been serving Varanasi since 2016 — a cafe, restaurant and diner with a varied menu. 4.3★ on Google with 9,500+ reviews.",
  );

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink pb-16 pt-32 md:pb-24 md:pt-44">
        <div className="absolute inset-0" aria-hidden="true">
          <SmartImage
            src={STORY_IMG}
            alt=""
            className="size-full opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
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
              About Us
            </motion.p>
            <motion.h1
              variants={staggerChild}
              className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-ivory md:text-7xl"
            >
              Since {RESTAURANT.established}.
            </motion.h1>
            <motion.p
              variants={staggerChild}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-ivory/65 md:text-base"
            >
              Roma&rsquo;s Café Diner has been serving guests in{" "}
              {RESTAURANT.city} since {RESTAURANT.established} — one room that
              works as a cafe, a restaurant and a diner, with a menu that
              covers breakfast-table classics to late-evening plates.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── STORY / EDITORIAL ────────────────────────────────────────────── */}
      <section className="py-16 md:py-24" aria-labelledby="story-heading">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="The Diner"
                title={
                  <span id="story-heading">
                    One menu, many moods.
                  </span>
                }
              />
              <Reveal delay={0.08} className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  There&rsquo;s no single way to visit Roma&rsquo;s. Some
                  tables are here for a plate of honey chilli potatoes and a
                  shake. Some are working through a late lunch of pastas and
                  steaks. Some just want coffee and something sweet.
                </p>
                <p>
                  The menu is built to cover all of it — veg and non-veg
                  plates, wok-tossed noodles and fried rice, oven-baked
                  lasagna, café sandwiches, and a beverages list that runs
                  from masala tea to thick KitKat shakes.
                </p>
                <p>
                  What hasn&rsquo;t changed since {RESTAURANT.established} is
                  the idea: good food, served without fuss, in a room where
                  guests are welcome to stay a little longer.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="relative">
                <SmartImage
                  src={DETAIL_IMG}
                  alt="Coffee served at Roma's Café Diner"
                  className="aspect-[4/5] rounded-lg border border-border"
                />
                <div className="card-quiet absolute -bottom-6 -left-4 px-5 py-4 md:-left-8">
                  <p className="font-display text-2xl font-semibold text-ink">
                    {RESTAURANT.costForTwo}
                  </p>
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Approx. for two
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FACTUAL HIGHLIGHTS ───────────────────────────────────────────── */}
      <section className="border-y border-border bg-secondary/60 py-14 md:py-16" aria-label="Facts at a glance">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-5">
              {HIGHLIGHTS.map((h) => (
                <div key={h.label}>
                  <dd className="font-display text-2xl font-semibold tracking-tight text-ink md:text-[1.7rem]">
                    {h.value}
                  </dd>
                  <dt className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {h.label}
                  </dt>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-xs leading-relaxed text-muted-foreground/70">
              Ratings and pricing are approximate, as publicly listed on Google
              and Zomato.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── WHY ROMA'S ───────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24" aria-labelledby="why-heading">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Why Roma's"
            title={<span id="why-heading">Five good reasons to pull up a chair.</span>}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {WHY.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="card-quiet h-full p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                  <span className="font-display text-sm font-semibold text-brass">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
            <Reveal delay={0.25} className="md:col-span-2 lg:col-span-1">
              <div className="flex h-full flex-col justify-between rounded-lg bg-ink p-6">
                <div>
                  <Star className="size-5 fill-brass text-brass" aria-hidden="true" />
                  <p className="mt-4 font-display text-xl font-semibold leading-snug tracking-tight text-ivory">
                    {RESTAURANT.googleRating}★ from {RESTAURANT.googleReviews}{" "}
                    guests on Google.
                  </p>
                </div>
                <Button
                  asChild
                  className="mt-6 h-11 rounded-full bg-brass px-6 font-sans text-[13px] font-semibold tracking-wide text-ivory shadow-none transition-colors hover:bg-ivory hover:text-ink"
                >
                  <Link to="/visit">Visit Us</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────────── */}
      <section className="border-t border-border py-16 md:py-24" aria-labelledby="reviews-heading">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            align="center"
            eyebrow="Guest Reviews"
            title={<span id="reviews-heading">In the words of the city.</span>}
            lede="No invented testimonials here — just the public numbers guests can verify themselves."
          />
          <Reveal delay={0.1} className="mt-10">
            <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
              <div className="card-quiet px-6 py-8 text-center">
                <p className="font-display text-3xl font-semibold text-ink">
                  {RESTAURANT.googleRating}
                  <Star className="mb-1.5 ml-1 inline size-3.5 fill-brass text-brass" aria-hidden="true" />
                </p>
                <RatingStars rating={RESTAURANT.googleRating} className="mt-2" />
                <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Google Rating
                </p>
              </div>
              <div className="card-quiet px-6 py-8 text-center">
                <p className="font-display text-3xl font-semibold text-ink">
                  {RESTAURANT.googleReviews}
                </p>
                <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Google Reviews
                </p>
              </div>
              <div className="card-quiet px-6 py-8 text-center">
                <p className="font-display text-3xl font-semibold text-ink">
                  {RESTAURANT.zomatoRating}
                  <Star className="mb-1.5 ml-1 inline size-3.5 fill-brass text-brass" aria-hidden="true" />
                </p>
                <RatingStars rating={RESTAURANT.zomatoRating} />
                <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Zomato Dining
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="mt-8 text-center">
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border border-ink/20 bg-transparent px-8 font-sans text-sm font-semibold tracking-wide text-ink shadow-none transition-colors hover:bg-ink hover:text-ivory"
            >
              <a href={RESTAURANT.mapsUrl} target="_blank" rel="noopener noreferrer">
                View Reviews on Google
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </a>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}

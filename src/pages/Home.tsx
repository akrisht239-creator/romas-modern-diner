import { useRef } from "react";
import { Link } from "react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin, Star } from "lucide-react";
import { RESTAURANT } from "@/data/restaurant";
import { MENU_ITEMS } from "@/data/menu";
import { InstagramSection } from "@/components/InstagramSection";
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

const HERO_IMG =
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=2000&q=75";
const INTRO_IMG_TALL =
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=75";
const INTRO_IMG_SMALL =
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=75";

const TRUST_STATS = [
  { value: "4.3", label: "Google Rating", star: true },
  { value: "9,500+", label: "Google Reviews", star: false },
  { value: "4.6", label: "Zomato Dining Rating", star: true },
  { value: "Since 2016", label: "Established", star: false },
] as const;

const FEATURED = MENU_ITEMS.filter((item) => item.featured);

export default function Home() {
  usePageMeta(
    "Roma's Café Diner — Cafe, Restaurant & Diner in Varanasi",
    "Good Food. Great Company. Roma's Café Diner — a welcoming cafe, restaurant and diner in Varanasi since 2016. Explore the menu and visit us, open daily 11 AM – 11 PM.",
  );

  const introImgRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: introImgRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-36, 36]);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink">
        <div className="absolute inset-0" aria-hidden="true">
          <SmartImage
            src={HERO_IMG}
            alt=""
            className="size-full"
            imgClassName="hero-zoom-img"
            zoom
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/40 to-ink/85" />
        </div>

        {/* Vertical side note */}
        <span
          aria-hidden="true"
          className="writing-vertical absolute right-6 top-1/2 hidden -translate-y-1/2 select-none font-display text-xs tracking-[0.35em] text-ivory/45 lg:block"
        >
          EST. 2016 — {RESTAURANT.city.toUpperCase()}
        </span>

        <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-28 pt-36 md:px-8 md:pt-40">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.p
              variants={staggerChild}
              className="eyebrow mb-5 flex items-center gap-3 text-brass"
            >
              <span aria-hidden="true" className="inline-block h-px w-10 bg-brass" />
              Cafe · Restaurant · Diner
            </motion.p>

            <motion.h1
              variants={staggerChild}
              className="font-display text-[2.9rem] font-semibold leading-[1.04] tracking-tight text-ivory sm:text-6xl md:text-7xl"
            >
              Good Food. Great Company.
              <span className="mt-1 block italic text-brass">Roma&rsquo;s.</span>
            </motion.h1>

            <motion.p
              variants={staggerChild}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-ivory/70 md:text-base"
            >
              A welcoming cafe, restaurant and diner in {RESTAURANT.city} —
              serving a varied menu of food and beverages to guests since{" "}
              {RESTAURANT.established}.
            </motion.p>

            <motion.div
              variants={staggerChild}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Button
                asChild
                className="h-12 rounded-full bg-brass px-8 font-sans text-sm font-semibold tracking-wide text-ivory shadow-none transition-colors hover:bg-ivory hover:text-ink"
              >
                <Link to="/menu">
                  View Menu
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                className="h-12 rounded-full border border-ivory/30 bg-transparent px-8 font-sans text-sm font-semibold tracking-wide text-ivory shadow-none transition-colors hover:border-ivory hover:bg-ivory/10"
                variant="outline"
              >
                <Link to="/visit">Visit Us</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={staggerChild}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-ivory/60"
            >
              <span className="flex items-center gap-2">
                <Star className="size-3.5 fill-brass text-brass" aria-hidden="true" />
                <strong className="font-semibold text-ivory">{RESTAURANT.googleRating}</strong>
                Google rating
              </span>
              <span className="hidden h-3 w-px bg-ivory/25 sm:block" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-ivory">{RESTAURANT.googleReviews}</strong>{" "}
                Google reviews
              </span>
              <span className="hidden h-3 w-px bg-ivory/25 sm:block" aria-hidden="true" />
              <span>Open daily · {RESTAURANT.openingHoursShort}</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-ivory/40">
            Scroll
          </span>
          <span className="relative block h-10 w-px overflow-hidden bg-ivory/15">
            <motion.span
              className="absolute left-0 top-0 block h-4 w-px bg-brass"
              animate={{ y: [0, 40] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.div>
      </section>

      {/* ── TRUST STRIP ──────────────────────────────────────────────────── */}
      <section aria-label="Guest ratings and reviews" className="border-b border-border bg-ivory">
        <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-12">
          <Reveal>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
              {TRUST_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col items-start gap-1">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                    {stat.value}
                    {stat.star && (
                      <Star
                        className="mb-1.5 ml-1 inline size-4 fill-brass text-brass"
                        aria-label="out of 5 stars"
                      />
                    )}
                  </dd>
                  <dd className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-sm text-muted-foreground">
              Serving guests since {RESTAURANT.established}.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── EDITORIAL INTRODUCTION ───────────────────────────────────────── */}
      <section className="py-16 md:py-28" aria-labelledby="intro-heading">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Sticky heading column */}
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Since 2016"
                title={
                  <span id="intro-heading">
                    A Place to Eat, Unwind &amp; Stay a Little Longer
                  </span>
                }
              />
              <Reveal delay={0.1} className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  Roma&rsquo;s Café Diner is a cafe, restaurant and diner rolled
                  into one — a relaxed room where long lunches, quick coffee
                  stops and unhurried dinners all feel at home.
                </p>
                <p>
                  The kitchen covers a lot of ground: hearty mains, pastas,
                  pizzas and café classics, alongside shakes, coffees and
                  all-day beverages. Whether it&rsquo;s a table of friends or a
                  quiet corner seat, there&rsquo;s something on the menu for
                  everyone.
                </p>
                <p>
                  Serving {RESTAURANT.city} since {RESTAURANT.established}, the
                  diner has grown into a familiar name — with thousands of
                  guests sharing their experience on Google and Zomato.
                </p>
              </Reveal>
              <Reveal delay={0.18} className="mt-8">
                <Button
                  asChild
                  className="h-11 rounded-full border border-ink/20 bg-transparent px-6 font-sans text-[13px] font-semibold tracking-wide text-ink shadow-none transition-colors hover:bg-ink hover:text-ivory"
                  variant="outline"
                >
                  <Link to="/about">Our Story</Link>
                </Button>
              </Reveal>
            </div>

            {/* Asymmetric image composition */}
            <div ref={introImgRef} className="relative">
              <Reveal className="relative z-10 ml-auto w-[86%]">
                <SmartImage
                  src={INTRO_IMG_TALL}
                  alt="Inside Roma's Café Diner — warm café atmosphere"
                  className="aspect-[4/5] rounded-lg border border-border"
                />
              </Reveal>
              <motion.div
                style={{ y: parallaxY }}
                className="absolute -bottom-10 left-0 z-20 w-[52%]"
              >
                <SmartImage
                  src={INTRO_IMG_SMALL}
                  alt="Fresh coffee and café moments at Roma's"
                  className="aspect-square rounded-lg border-4 border-ivory shadow-lg"
                />
              </motion.div>
              <Reveal
                delay={0.2}
                className="absolute -right-1 bottom-10 z-30 hidden md:block"
              >
                <div className="card-quiet px-5 py-4">
                  <p className="font-display text-2xl font-semibold text-ink">
                    {RESTAURANT.established}
                  </p>
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Serving since
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED DISHES ──────────────────────────────────────────────── */}
      <section className="bg-secondary/60 py-16 md:py-24" aria-labelledby="featured-heading">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Guest Favourites"
              title={<span id="featured-heading">Known for these</span>}
              lede="Dishes and drinks our guests come back for — from the sizzler-grade steak to the shake everyone photographs."
            />
            <Reveal delay={0.1} className="hidden md:block">
              <Button
                asChild
                className="rounded-full border border-ink/20 bg-transparent px-6 font-sans text-[13px] font-semibold tracking-wide text-ink shadow-none transition-colors hover:bg-ink hover:text-ivory"
                variant="outline"
              >
                <Link to="/menu">
                  Explore Full Menu
                  <ArrowUpRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {FEATURED.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.06}>
                <Link
                  to="/menu"
                  className="group block overflow-hidden rounded-lg border border-border bg-card transition-shadow duration-500 hover:shadow-xl"
                >
                  <SmartImage
                    src={item.image!}
                    alt={item.name}
                    className="aspect-[4/3]"
                    imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="flex items-center justify-between gap-3 px-4 py-3.5 md:px-5">
                    <div>
                      <h3 className="font-display text-[15px] font-semibold tracking-tight text-ink md:text-base">
                        {item.name}
                      </h3>
                      {item.subcategory && (
                        <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          {item.subcategory === "veg" ? "Veg" : "Non-Veg"}
                        </p>
                      )}
                    </div>
                    <ArrowRight
                      className="size-4 shrink-0 text-brass transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center md:hidden">
            <Button
              asChild
              className="h-12 rounded-full bg-ink px-8 font-sans text-sm font-semibold tracking-wide text-ivory shadow-none transition-colors hover:bg-brass"
            >
              <Link to="/menu">Explore Full Menu</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────────── */}
      <section className="bg-ink py-16 md:py-24" aria-labelledby="reviews-heading">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            dark
            align="center"
            eyebrow="Guest Reviews"
            title={<span id="reviews-heading">Loved by the city</span>}
            lede={`Serving guests since ${RESTAURANT.established} — with a strong public review presence across Google and Zomato.`}
          />

          <Reveal delay={0.1} className="mt-12">
            <dl className="grid gap-4 md:grid-cols-3">
              <div className="card-quiet border-ivory/10 bg-ivory/[0.04] px-6 py-8 text-center">
                <dd className="font-display text-4xl font-semibold text-ivory">
                  {RESTAURANT.googleRating}
                  <Star className="mb-2 ml-1 inline size-4 fill-brass text-brass" aria-hidden="true" />
                </dd>
                <dt className="mt-2 flex items-center justify-center gap-2">
                  <RatingStars rating={RESTAURANT.googleRating} />
                </dt>
                <dd className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-ivory/50">
                  Google Rating
                </dd>
              </div>
              <div className="card-quiet border-ivory/10 bg-ivory/[0.04] px-6 py-8 text-center">
                <dd className="font-display text-4xl font-semibold text-ivory">
                  {RESTAURANT.googleReviews}
                </dd>
                <dd className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-ivory/50">
                  Google Reviews
                </dd>
              </div>
              <div className="card-quiet border-ivory/10 bg-ivory/[0.04] px-6 py-8 text-center">
                <dd className="font-display text-4xl font-semibold text-ivory">
                  {RESTAURANT.zomatoRating}
                  <Star className="mb-2 ml-1 inline size-4 fill-brass text-brass" aria-hidden="true" />
                </dd>
                <dd className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-ivory/50">
                  Zomato Dining Rating
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 text-center">
            <Button
              asChild
              className="h-12 rounded-full bg-brass px-8 font-sans text-sm font-semibold tracking-wide text-ivory shadow-none transition-colors hover:bg-ivory hover:text-ink"
            >
              <a href={RESTAURANT.mapsUrl} target="_blank" rel="noopener noreferrer">
                View Reviews
                <ArrowUpRight className="ml-2 size-4" aria-hidden="true" />
              </a>
            </Button>
            <p className="mt-4 text-xs text-ivory/40">
              Ratings shown are approximate, as publicly listed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── RESERVATION CTA ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-24" aria-labelledby="reserve-cta-heading">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <div className="card-quiet relative overflow-hidden px-6 py-12 text-center md:px-16 md:py-16">
              <MapPin
                className="pointer-events-none absolute -right-8 -top-8 size-48 text-brass/[0.07]"
                aria-hidden="true"
              />
              <p className="eyebrow text-brass">Plan Your Visit</p>
              <h2
                id="reserve-cta-heading"
                className="mx-auto mt-4 max-w-xl font-display text-3xl font-semibold leading-[1.12] tracking-tight text-ink md:text-4xl"
              >
                Save your seat at Roma&rsquo;s.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                Send a table enquiry and the team will confirm by phone.
                Walk-ins are welcome daily from {RESTAURANT.openingHoursShort}.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  className="h-12 rounded-full bg-ink px-8 font-sans text-sm font-semibold tracking-wide text-ivory shadow-none transition-colors hover:bg-brass"
                >
                  <Link to="/visit#reserve">Reserve a Table</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border border-ink/20 bg-transparent px-8 font-sans text-sm font-semibold tracking-wide text-ink shadow-none transition-colors hover:bg-ink hover:text-ivory"
                >
                  <Link to="/menu">View Menu</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <InstagramSection />
    </>
  );
}

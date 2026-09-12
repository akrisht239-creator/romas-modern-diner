import { useRef } from "react";
import { Link } from "react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin, Quote, Star } from "lucide-react";
import { RESTAURANT, isOpenNow } from "@/data/restaurant";
import { MENU_ITEMS } from "@/data/menu";
import { GUEST_REVIEWS, GALLERY_IMAGES, HERO_IMAGE, INTRO_IMAGES } from "@/data/reviews";
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

/** Generic fallback if a dish hotlink is ever blocked. */
const DISH_FALLBACK =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=70";

const TRUST_STATS = [
  { value: RESTAURANT.googleRating, label: "Google Rating", star: true },
  { value: RESTAURANT.googleReviews, label: "Google Reviews", star: false },
  { value: RESTAURANT.zomatoRating, label: "Zomato Rating", star: true },
  { value: RESTAURANT.zomatoDeliveryReviews, label: "Zomato Delivery Ratings", star: false },
] as const;

const FEATURED = MENU_ITEMS.filter((item) => item.featured);

export default function Home() {
  usePageMeta(
    "Roma's Café Diner — Cafe, Restaurant & Diner in Lanka, Varanasi",
    "Roma's Café Diner, Lanka Varanasi — pizzas, pastas, steaks, sushi, Indian classics, shakes & desserts since 2016. Zomato 4.5★ · Open daily 11 AM – 11 PM.",
  );

  const introImgRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: introImgRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-36, 36]);
  const open = isOpenNow();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink">
        <div className="absolute inset-0" aria-hidden="true">
          <SmartImage
            src={HERO_IMAGE.src}
            fallbackSrc={HERO_IMAGE.fallback}
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
          EST. {RESTAURANT.established} — {RESTAURANT.area.toUpperCase()}, {RESTAURANT.city.toUpperCase()}
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
              Cafe · Restaurant · Diner — {RESTAURANT.area}, {RESTAURANT.city}
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
              {MENU_ITEMS.length}+ dishes & pours — pizzas, pastas, sizzling
              steaks, sushi, tandoor classics & thick shakes — served in the
              heart of {RESTAURANT.area} since {RESTAURANT.established}.
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
                <a href={RESTAURANT.zomatoOrderUrl} target="_blank" rel="noopener noreferrer">
                  Order on Zomato
                  <ArrowUpRight className="ml-2 size-4" aria-hidden="true" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={staggerChild}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-ivory/60"
            >
              <span className="flex items-center gap-2">
                <Star className="size-3.5 fill-brass text-brass" aria-hidden="true" />
                <strong className="font-semibold text-ivory">{RESTAURANT.zomatoRating}</strong>
                on Zomato ({RESTAURANT.zomatoDeliveryReviews})
              </span>
              <span className="hidden h-3 w-px bg-ivory/25 sm:block" aria-hidden="true" />
              <span className="flex items-center gap-2">
                <Star className="size-3.5 fill-brass text-brass" aria-hidden="true" />
                <strong className="font-semibold text-ivory">{RESTAURANT.googleRating}</strong>
                on Google
              </span>
              <span className="hidden h-3 w-px bg-ivory/25 sm:block" aria-hidden="true" />
              <span className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={`size-1.5 rounded-full ${open ? "bg-emerald-400" : "bg-red-400"}`}
                />
                {open ? "Open now" : "Opens 11 AM"} · {RESTAURANT.openingHoursShort} daily
              </span>
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
              Serving {RESTAURANT.area}, {RESTAURANT.city} since {RESTAURANT.established} ·{" "}
              {RESTAURANT.costForTwo} for two (approx).
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
                eyebrow={`Since ${RESTAURANT.established}`}
                title={
                  <span id="intro-heading">
                    A Place to Eat, Unwind &amp; Stay a Little Longer
                  </span>
                }
              />
              <Reveal delay={0.1} className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  Roma&rsquo;s Café Diner is a cafe, restaurant and diner rolled
                  into one — a relaxed, white exposed-brick room above Swastik
                  Plaza where long lunches, quick coffee stops and unhurried
                  dinners all feel at home.
                </p>
                <p>
                  The kitchen covers serious ground: wood-fired-style pizzas,
                  pastas & lasagne, sizzling steaks, sushi & dim sums, tandoor
                  classics, dum biryanis — plus shakes, coffees, mocktails and
                  all-day beverages. {RESTAURANT.cuisines.join(" · ")}.
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
                  src={INTRO_IMAGES.tall.src}
                  fallbackSrc={INTRO_IMAGES.tall.fallback}
                  alt="Inside Roma's Café Diner — warm café atmosphere"
                  className="aspect-[4/5] rounded-lg border border-border"
                />
              </Reveal>
              <motion.div
                style={{ y: parallaxY }}
                className="absolute -bottom-10 left-0 z-20 w-[52%]"
              >
                <SmartImage
                  src={INTRO_IMAGES.small.src}
                  fallbackSrc={INTRO_IMAGES.small.fallback}
                  alt="Fresh plates at Roma's Café Diner"
                  className="aspect-square rounded-lg border-4 border-ivory shadow-lg"
                />
              </motion.div>
              <Reveal
                delay={0.2}
                className="absolute -right-1 bottom-10 z-30 hidden md:block"
              >
                <div className="card-quiet px-5 py-4">
                  <p className="font-display text-2xl font-semibold text-ink">
                    {MENU_ITEMS.length}+
                  </p>
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Dishes & pours
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
              lede="From the tandoor to Tokyo via Italy — the plates Varanasi keeps coming back for."
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

          <div className="mt-12 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {FEATURED.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.05}>
                <Link
                  to="/menu"
                  className="group block overflow-hidden rounded-lg border border-border bg-card transition-shadow duration-500 hover:shadow-xl"
                >
                  {item.image && (
                    <SmartImage
                      src={item.image}
                      fallbackSrc={DISH_FALLBACK}
                      alt={item.name}
                      className="aspect-[4/3]"
                      imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}
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

      {/* ── GALLERY ──────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24" aria-labelledby="gallery-heading">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Glimpses"
            title={<span id="gallery-heading">Inside Roma&rsquo;s</span>}
            lede="Real plates, real room — from the diner's own gallery."
          />
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <Reveal key={img.src} delay={i * 0.05}>
                <SmartImage
                  src={img.src}
                  fallbackSrc={DISH_FALLBACK}
                  alt={img.alt}
                  className="aspect-[4/3] rounded-lg border border-border"
                  imgClassName="transition-transform duration-700 ease-out hover:scale-105"
                />
              </Reveal>
            ))}
          </div>
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
                  Google · {RESTAURANT.googleReviews} reviews
                </dd>
              </div>
              <div className="card-quiet border-ivory/10 bg-ivory/[0.04] px-6 py-8 text-center">
                <dd className="font-display text-4xl font-semibold text-ivory">
                  {RESTAURANT.zomatoRating}
                  <Star className="mb-2 ml-1 inline size-4 fill-brass text-brass" aria-hidden="true" />
                </dd>
                <dt className="mt-2 flex items-center justify-center gap-2">
                  <RatingStars rating={RESTAURANT.zomatoRating} />
                </dt>
                <dd className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-ivory/50">
                  Zomato Dining · {RESTAURANT.zomatoDiningReviews}
                </dd>
              </div>
              <div className="card-quiet border-ivory/10 bg-ivory/[0.04] px-6 py-8 text-center">
                <dd className="font-display text-4xl font-semibold text-ivory">
                  {RESTAURANT.zomatoDeliveryRating}
                  <Star className="mb-2 ml-1 inline size-4 fill-brass text-brass" aria-hidden="true" />
                </dd>
                <dt className="mt-2 flex items-center justify-center gap-2">
                  <RatingStars rating={RESTAURANT.zomatoDeliveryRating} />
                </dt>
                <dd className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-ivory/50">
                  Zomato Delivery · {RESTAURANT.zomatoDeliveryReviews}
                </dd>
              </div>
            </dl>
          </Reveal>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {GUEST_REVIEWS.slice(0, 3).map((review, i) => (
              <Reveal key={review.name} delay={0.1 + i * 0.06}>
                <figure className="flex h-full flex-col rounded-lg border border-ivory/10 bg-ivory/[0.04] px-6 py-7">
                  <Quote className="size-5 text-brass" aria-hidden="true" />
                  <blockquote className="mt-4 flex-1 font-display text-lg leading-snug text-ivory">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-ivory">{review.name}</p>
                      <p className="mt-0.5 text-xs text-ivory/45">
                        {review.meta} · via Zomato
                      </p>
                    </div>
                    <RatingStars rating={String(review.rating)} />
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="mt-10 text-center">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                className="h-12 rounded-full bg-brass px-8 font-sans text-sm font-semibold tracking-wide text-ivory shadow-none transition-colors hover:bg-ivory hover:text-ink"
              >
                <a href={RESTAURANT.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Google Reviews
                  <ArrowUpRight className="ml-2 size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border border-ivory/25 bg-transparent px-8 font-sans text-sm font-semibold tracking-wide text-ivory shadow-none transition-colors hover:border-ivory hover:bg-ivory/10"
              >
                <a href={RESTAURANT.zomatoReviewsUrl} target="_blank" rel="noopener noreferrer">
                  Zomato Reviews
                  <ArrowUpRight className="ml-2 size-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
            <p className="mt-4 text-xs text-ivory/40">
              Ratings shown are approximate, as publicly listed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── ORDER ONLINE BAND ────────────────────────────────────────────── */}
      <section className="border-b border-border bg-brass py-14 md:py-16" aria-label="Order online">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center md:flex-row md:justify-between md:px-8 md:text-left">
          <div>
            <p className="eyebrow text-ivory/70">Craving Roma&rsquo;s at home?</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ivory md:text-4xl">
              Order delivery on Zomato.
            </h2>
            <p className="mt-2 text-sm text-ivory/70">
              {RESTAURANT.zomatoDeliveryRating}★ across {RESTAURANT.zomatoDeliveryReviews} delivery ratings.
            </p>
          </div>
          <Button
            asChild
            className="h-12 shrink-0 rounded-full bg-ivory px-8 font-sans text-sm font-semibold tracking-wide text-ink shadow-none transition-colors hover:bg-ink hover:text-ivory"
          >
            <a href={RESTAURANT.zomatoOrderUrl} target="_blank" rel="noopener noreferrer">
              Order Now
              <ArrowUpRight className="ml-2 size-4" aria-hidden="true" />
            </a>
          </Button>
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
                Swastik Plaza, {RESTAURANT.area} — walk-ins welcome daily from{" "}
                {RESTAURANT.openingHoursShort}, or send a table enquiry and the
                team will confirm by phone.
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

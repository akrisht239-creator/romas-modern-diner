import { useMemo, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CupSoda,
  Drumstick,
  LayoutGrid,
  Leaf,
  Search,
  UtensilsCrossed,
} from "lucide-react";
import { MENU_ITEMS, MENU_SECTIONS, type MenuItem } from "@/data/menu";
import { RESTAURANT } from "@/data/restaurant";
import {
  Reveal,
  SectionHeading,
  usePageMeta,
} from "@/components/shared";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type MainFilter = "all" | "food" | "beverages";
type DietFilter = "all" | "veg" | "non-veg";

const MAIN_FILTERS: { key: MainFilter; label: string; icon: typeof Leaf }[] = [
  { key: "all", label: "All", icon: LayoutGrid },
  { key: "food", label: "Food", icon: UtensilsCrossed },
  { key: "beverages", label: "Beverages", icon: CupSoda },
];

const DIET_FILTERS: { key: DietFilter; label: string; icon?: typeof Leaf }[] = [
  { key: "all", label: "All" },
  { key: "veg", label: "Veg", icon: Leaf },
  { key: "non-veg", label: "Non-Veg", icon: Drumstick },
];

function VegBadge({ type }: { type: "veg" | "non-veg" }) {
  const veg = type === "veg";
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]",
        veg
          ? "border-emerald-700/25 text-emerald-800"
          : "border-red-800/25 text-red-900",
      )}
      title={veg ? "Vegetarian" : "Non-vegetarian"}
    >
      <span
        aria-hidden="true"
        className={cn(
          "grid size-3 place-items-center rounded-[3px] border",
          veg ? "border-emerald-700" : "border-red-800",
        )}
      >
        <span
          className={cn(
            "size-1.5 rounded-full",
            veg ? "bg-emerald-700" : "bg-red-800",
          )}
        />
      </span>
      {veg ? "Veg" : "Non-Veg"}
    </span>
  );
}

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const [imgOk, setImgOk] = useState(true);
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.02, 0.25),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex gap-4 rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brass/40 hover:shadow-lg sm:gap-5 md:p-5"
    >
      {item.image && imgOk && (
        <div className="relative size-20 shrink-0 overflow-hidden rounded-md bg-ink/5 sm:size-24">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            decoding="async"
            onError={() => setImgOk(false)}
            className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-ink/10 transition-opacity duration-500 group-hover:opacity-0"
          />
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[17px] font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-brass md:text-lg">
            {item.name}
          </h3>
          {item.subcategory && <VegBadge type={item.subcategory} />}
        </div>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
          {item.description}
        </p>
        <div className="mt-auto flex items-center gap-3 pt-2.5">
          {item.price && (
            <span className="font-display text-[15px] font-semibold text-ink">
              {item.price}
            </span>
          )}
          {item.featured && (
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brass">
              ★ Guest favourite
            </span>
          )}
        </div>
      </div>

      <span
        aria-hidden="true"
        className="absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-brass/50 transition-transform duration-500 group-hover:scale-x-100"
      />
    </motion.article>
  );
}

export default function MenuPage() {
  usePageMeta(
    "Menu — Roma's Café Diner, Lanka Varanasi | Pizzas, Pastas, Sushi & More",
    "Explore the Roma's Café Diner menu — pizzas, pastas, steaks, sushi, dim sums, Indian mains, biryani, shakes & desserts. Dine in at Lanka, Varanasi or order on Zomato.",
  );

  const [mainFilter, setMainFilter] = useState<MainFilter>("all");
  const [dietFilter, setDietFilter] = useState<DietFilter>("all");
  const [query, setQuery] = useState("");

  const counts = useMemo(
    () => ({
      all: MENU_ITEMS.length,
      food: MENU_ITEMS.filter((i) => i.category === "food").length,
      beverages: MENU_ITEMS.filter((i) => i.category === "beverages").length,
    }),
    [],
  );

  const sections = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MENU_SECTIONS.map((section) => {
      if (mainFilter !== "all" && section.category !== mainFilter) return null;
      const items = MENU_ITEMS.filter((item) => {
        if (item.section !== section.id) return false;
        // Diet filter applies to food; beverages always pass through.
        if (
          item.category === "food" &&
          dietFilter !== "all" &&
          item.subcategory !== dietFilter
        )
          return false;
        if (
          q &&
          !`${item.name} ${item.description}`.toLowerCase().includes(q)
        )
          return false;
        return true;
      });
      if (items.length === 0) return null;
      return { section, items };
    }).filter(Boolean) as { section: (typeof MENU_SECTIONS)[number]; items: MenuItem[] }[];
  }, [mainFilter, dietFilter, query]);

  const totalVisible = sections.reduce((n, s) => n + s.items.length, 0);

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────────────── */}
      <section className="bg-ink pb-14 pt-32 md:pb-20 md:pt-44">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow mb-4 flex items-center gap-3 text-brass">
              <span aria-hidden="true" className="inline-block h-px w-10 bg-brass" />
              The Menu
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ivory md:text-6xl">
              Eat well.
              <span className="italic text-brass"> Drink well.</span>
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ivory/65">
              {counts.all} dishes & pours — from wood-fired-style pizzas to
              sushi, tandoor classics to thick shakes. Served daily from{" "}
              {RESTAURANT.openingHoursShort}.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STICKY FILTER BAR ────────────────────────────────────────────── */}
      <div className="sticky top-16 z-40 border-b border-border bg-ivory/95 backdrop-blur-md md:top-[72px]">
        <div className="mx-auto max-w-6xl px-5 py-3 md:px-8">
          <div className="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <div role="tablist" aria-label="Menu categories" className="flex gap-2">
                {MAIN_FILTERS.map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={mainFilter === key}
                    onClick={() => setMainFilter(key)}
                    className={cn(
                      "flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold tracking-wide transition-all duration-300",
                      mainFilter === key
                        ? "bg-ink text-ivory"
                        : "border border-border bg-card text-muted-foreground hover:border-ink/30 hover:text-ink",
                    )}
                  >
                    <Icon className="size-3.5" aria-hidden="true" />
                    {label}
                    <span
                      className={cn(
                        "text-[10px] font-medium",
                        mainFilter === key ? "text-ivory/60" : "text-muted-foreground/60",
                      )}
                    >
                      {counts[key]}
                    </span>
                  </button>
                ))}
              </div>
              <div role="tablist" aria-label="Diet preference" className="flex gap-2">
                {DIET_FILTERS.map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={dietFilter === key}
                    onClick={() => setDietFilter(key)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-semibold tracking-wide transition-all duration-300",
                      dietFilter === key
                        ? "border-brass bg-brass/10 text-brass"
                        : "border-border bg-card text-muted-foreground hover:border-brass/40 hover:text-ink",
                    )}
                  >
                    {Icon && <Icon className="size-3" aria-hidden="true" />}
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <label className="relative block lg:w-64">
              <span className="sr-only">Search the menu</span>
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground/70"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search — try “sushi” or “shake”…"
                className="w-full rounded-full border border-border bg-card py-2 pl-10 pr-4 text-[13px] text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-brass"
              />
            </label>
          </div>
        </div>
      </div>

      {/* ── MENU LIST ────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16" aria-live="polite">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`${mainFilter}-${dietFilter}-${query}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {sections.length === 0 ? (
                <div className="py-20 text-center">
                  <p className="font-display text-2xl font-semibold text-ink">
                    Nothing found{query ? ` for “${query}”` : ""}.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Try another search — or browse the full menu on Zomato.
                  </p>
                </div>
              ) : (
                <>
                  <p className="mb-8 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Showing {totalVisible} of {counts.all} items
                  </p>
                  {sections.map(({ section, items }, si) => (
                    <div key={section.id} className={si > 0 ? "mt-14" : ""}>
                      <div className="mb-6 flex items-baseline gap-4">
                        <h2 className="font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
                          {section.label}
                        </h2>
                        <span className="hidden text-xs text-muted-foreground sm:inline">
                          {section.blurb}
                        </span>
                        <span aria-hidden="true" className="hairline flex-1" />
                        <span className="text-xs font-medium text-muted-foreground/70">
                          {items.length}
                        </span>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2 md:gap-5">
                        {items.map((item, i) => (
                          <MenuCard key={item.name} item={item} index={i} />
                        ))}
                      </div>
                    </div>
                  ))}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── BELOW-MENU CTA ───────────────────────────────────────────────── */}
      <section className="border-t border-border py-14">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="flex flex-col items-center gap-6 text-center">
            <SectionHeading
              align="center"
              title="Hungry already?"
              lede="Order delivery on Zomato — or save a table and taste it fresh at Lanka."
            />
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                className="h-12 rounded-full bg-ink px-8 font-sans text-sm font-semibold tracking-wide text-ivory shadow-none transition-colors hover:bg-brass"
              >
                <a
                  href={RESTAURANT.zomatoOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order on Zomato
                  <ArrowUpRight className="ml-2 size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border border-ink/20 bg-transparent px-8 font-sans text-sm font-semibold tracking-wide text-ink shadow-none transition-colors hover:bg-ink hover:text-ivory"
              >
                <Link to="/visit#reserve">Reserve a Table</Link>
              </Button>
            </div>
            <p className="mt-2 max-w-md text-center text-[11px] leading-relaxed text-muted-foreground/80">
              Prices as per the in-cafe menu & Zomato listing. Menu items may
              vary with seasonal availability.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

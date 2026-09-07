import { useMemo, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf, Drumstick, CupSoda, UtensilsCrossed, LayoutGrid } from "lucide-react";
import { MENU_ITEMS, type MenuItem } from "@/data/menu";
import { RESTAURANT } from "@/data/restaurant";
import {
  DisclaimerNote,
  Reveal,
  SectionHeading,
  usePageMeta,
} from "@/components/shared";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type MainFilter = "all" | "food" | "beverages";
type FoodFilter = "all-food" | "veg" | "non-veg";

const MAIN_FILTERS: { key: MainFilter; label: string; icon?: typeof Leaf }[] = [
  { key: "all", label: "All", icon: LayoutGrid },
  { key: "food", label: "Food", icon: UtensilsCrossed },
  { key: "beverages", label: "Beverages", icon: CupSoda },
];

const FOOD_FILTERS: { key: FoodFilter; label: string; icon?: typeof Leaf }[] = [
  { key: "all-food", label: "All Food" },
  { key: "veg", label: "Veg", icon: Leaf },
  { key: "non-veg", label: "Non-Veg", icon: Drumstick },
];

function VegBadge({ type }: { type: "veg" | "non-veg" }) {
  const veg = type === "veg";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]",
        veg
          ? "border-emerald-700/25 text-emerald-800"
          : "border-red-800/25 text-red-900",
      )}
      title={veg ? "Vegetarian" : "Contains non-vegetarian items"}
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
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.03, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex gap-4 rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brass/40 hover:shadow-lg sm:gap-5 md:p-5"
    >
      {/* Item photo */}
      {item.image && (
        <div className="relative size-20 shrink-0 overflow-hidden rounded-md bg-ink/5 sm:size-24">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          />
          {/* warm duotone veil that lifts on hover */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-ink/10 transition-opacity duration-500 group-hover:opacity-0"
          />
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-brass md:text-xl">
            {item.name}
          </h3>
          {item.subcategory && <VegBadge type={item.subcategory} />}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>

      {/* hairline accent on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-brass/50 transition-transform duration-500 group-hover:scale-x-100"
      />
    </motion.article>
  );
}

export default function MenuPage() {
  usePageMeta(
    "Menu — Roma's Café Diner | Food & Beverages",
    "Browse the Roma's Café Diner menu — veg and non-veg food, shakes, coffees and more. Sample preview; official menu coming from the restaurant's verified menu.",
  );

  const [mainFilter, setMainFilter] = useState<MainFilter>("all");
  const [foodFilter, setFoodFilter] = useState<FoodFilter>("all-food");

  const visibleItems = useMemo(() => {
    let items = MENU_ITEMS;
    if (mainFilter === "food") {
      items = items.filter((i) => i.category === "food");
      if (foodFilter === "veg")
        items = items.filter((i) => i.subcategory === "veg");
      if (foodFilter === "non-veg")
        items = items.filter((i) => i.subcategory === "non-veg");
    } else if (mainFilter === "beverages") {
      items = items.filter((i) => i.category === "beverages");
    }
    return items;
  }, [mainFilter, foodFilter]);

  const counts = useMemo(
    () => ({
      all: MENU_ITEMS.length,
      food: MENU_ITEMS.filter((i) => i.category === "food").length,
      beverages: MENU_ITEMS.filter((i) => i.category === "beverages").length,
    }),
    [],
  );

  // Group for section headings when "All" is active
  const showGroupLabels = mainFilter === "all";
  const foodGroup = showGroupLabels
    ? visibleItems.filter((i) => i.category === "food")
    : visibleItems;
  const beverageGroup = showGroupLabels
    ? visibleItems.filter((i) => i.category === "beverages")
    : [];

  function handleMain(next: MainFilter) {
    setMainFilter(next);
    if (next !== "food") setFoodFilter("all-food");
  }

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
              From hearty plates to café classics and everything between the
              two — here&rsquo;s what&rsquo;s on at Roma&rsquo;s, served daily
              from {RESTAURANT.openingHoursShort}.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STICKY FILTER BAR ────────────────────────────────────────────── */}
      <div className="sticky top-16 z-40 border-b border-border bg-ivory/95 backdrop-blur-md md:top-[72px]">
        <div className="mx-auto max-w-6xl px-5 py-3 md:px-8">
          <div className="flex flex-col gap-2.5 md:flex-row md:items-center md:justify-between">
            {/* Main categories */}
            <div
              role="tablist"
              aria-label="Menu categories"
              className="flex gap-2"
            >
              {MAIN_FILTERS.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={mainFilter === key}
                  onClick={() => handleMain(key)}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold tracking-wide transition-all duration-300",
                    mainFilter === key
                      ? "bg-ink text-ivory"
                      : "border border-border bg-card text-muted-foreground hover:border-ink/30 hover:text-ink",
                  )}
                >
                  {Icon && <Icon className="size-3.5" aria-hidden="true" />}
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

            {/* Secondary veg/non-veg filters — only when FOOD is selected */}
            <AnimatePresence initial={false}>
              {mainFilter === "food" && (
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.25 }}
                  role="tablist"
                  aria-label="Food filters"
                  className="flex gap-2"
                >
                  {FOOD_FILTERS.map(({ key, label, icon: Icon }) => (
                    <button
                      key={key}
                      role="tab"
                      aria-selected={foodFilter === key}
                      onClick={() => setFoodFilter(key)}
                      className={cn(
                        "flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300",
                        foodFilter === key
                          ? "border-brass bg-brass/10 text-brass"
                          : "border-border bg-card text-muted-foreground hover:border-brass/40 hover:text-ink",
                      )}
                    >
                      {Icon && <Icon className="size-3" aria-hidden="true" />}
                      {label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── MENU LIST ────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16" aria-live="polite">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`${mainFilter}-${foodFilter}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {visibleItems.length === 0 ? (
                <p className="py-20 text-center text-muted-foreground">
                  No items in this category yet.
                </p>
              ) : (
                <>
                  {showGroupLabels && foodGroup.length > 0 && (
                    <div className="mb-6 flex items-center gap-4">
                      <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
                        Food
                      </h2>
                      <span aria-hidden="true" className="hairline flex-1" />
                    </div>
                  )}
                  <div className="grid gap-4 sm:grid-cols-2 md:gap-5">
                    {(showGroupLabels ? foodGroup : visibleItems).map(
                      (item, i) => (
                        <MenuCard key={item.name} item={item} index={i} />
                      ),
                    )}
                  </div>

                  {showGroupLabels && beverageGroup.length > 0 && (
                    <>
                      <div className="mb-6 mt-14 flex items-center gap-4">
                        <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
                          Beverages
                        </h2>
                        <span aria-hidden="true" className="hairline flex-1" />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2 md:gap-5">
                        {beverageGroup.map((item, i) => (
                          <MenuCard key={item.name} item={item} index={i} />
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── BELOW-MENU CTA + DISCLAIMER ──────────────────────────────────── */}
      <section className="border-t border-border py-14">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="flex flex-col items-center gap-6 text-center">
            <SectionHeading
              align="center"
              title="Fancy a table with that?"
              lede="Send a table enquiry and the team will confirm by phone."
            />
            <Button
              asChild
              className="h-12 rounded-full bg-ink px-8 font-sans text-sm font-semibold tracking-wide text-ivory shadow-none transition-colors hover:bg-brass"
            >
              <Link to="/visit#reserve">Reserve a Table</Link>
            </Button>
            <DisclaimerNote className="mt-2 max-w-md" />
          </Reveal>
        </div>
      </section>
    </>
  );
}

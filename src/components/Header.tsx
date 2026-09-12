import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";
import { RESTAURANT, telHref } from "@/data/restaurant";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About Us" },
  { to: "/visit", label: "Visit Us" },
];

export function Monogram({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center rounded-md bg-ink font-display font-semibold text-brass",
        compact ? "size-8 text-sm" : "size-10 text-lg",
      )}
      aria-hidden="true"
    >
      R
    </span>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const phone = telHref(RESTAURANT.phone);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/80 bg-ivory/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-[72px] md:px-8",
          !scrolled &&
            "text-ivory [&_.text-foreground]:text-ivory [&_.text-muted-foreground]:text-ivory/60",
        )}
      >
        <Link
          to="/"
          className="group flex items-center gap-3"
          aria-label="Roma's Café Diner — Home"
        >
          <Monogram />
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-semibold tracking-tight text-foreground">
              Roma&rsquo;s Café Diner
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
              Cafe · Diner · Varanasi
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-[13px] font-medium tracking-wide transition-colors hover:text-foreground",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {phone && (
            <a
              href={phone}
              className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Call
            </a>
          )}
          <a
            href={RESTAURANT.zomatoOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Order Online
          </a>
          <Button
            asChild
            className={cn(
              "rounded-full px-5 font-sans text-[13px] font-semibold tracking-wide shadow-none transition-colors",
              scrolled
                ? "bg-ink text-ivory hover:bg-brass hover:text-ivory"
                : "bg-ivory text-ink hover:bg-brass hover:text-ivory",
            )}
          >
            <Link to="/menu">View Menu</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="grid size-10 place-items-center rounded-md border border-border bg-card/70 text-foreground md:hidden"
          aria-label="Open navigation menu"
          aria-expanded={open}
        >
          <MenuIcon className="size-5" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-ink/60 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="ml-auto flex h-full w-[82%] max-w-sm flex-col bg-ivory p-6"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold">
                  Roma&rsquo;s Café Diner
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid size-10 place-items-center rounded-md border border-border bg-card text-foreground"
                  aria-label="Close navigation menu"
                >
                  <X className="size-5" />
                </button>
              </div>

              <nav aria-label="Mobile" className="mt-10 flex flex-col">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.3 }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "border-b border-border/70 py-4 font-display text-2xl tracking-tight transition-colors",
                          isActive ? "text-brass" : "text-foreground",
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 pb-2">
                {phone && (
                  <a
                    href={phone}
                    className="rounded-full border border-ink/20 py-3 text-center text-sm font-semibold tracking-wide text-ink"
                  >
                    Call {RESTAURANT.phoneDisplay}
                  </a>
                )}
                <a
                  href={RESTAURANT.zomatoOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ink/20 py-3 text-center text-sm font-semibold tracking-wide text-ink"
                >
                  Order on Zomato
                </a>
                <Button
                  asChild
                  className="h-12 rounded-full bg-ink font-sans text-sm font-semibold tracking-wide text-ivory hover:bg-brass"
                >
                  <Link to="/menu" onClick={() => setOpen(false)}>
                    View Menu
                  </Link>
                </Button>
                <p className="pt-2 text-center text-xs text-muted-foreground">
                  Open daily · {RESTAURANT.openingHoursShort}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

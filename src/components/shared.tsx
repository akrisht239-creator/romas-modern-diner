import { useEffect, useRef, useState, type ReactNode } from "react";
import { useLocation } from "react-router";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/* ── ScrollToTop: resets scroll on route change ─────────────────────────── */

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

/* ── usePageMeta: per-page document title + meta description ────────────── */

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    const desc = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (desc) desc.content = description;
  }, [title, description]);
}

/* ── Reveal: scroll-triggered section reveal ────────────────────────────── */

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger container + item for text reveals ──────────────────────────── */

export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

export const staggerChild = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ── SectionHeading: eyebrow + display heading + optional lede ──────────── */

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow mb-3 flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "inline-block h-px w-8",
              dark ? "bg-brass" : "bg-brass",
            )}
          />
          <span className={dark ? "text-brass" : "text-brass"}>
            {eyebrow}
          </span>
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-semibold leading-[1.12] tracking-tight md:text-[2.6rem]",
          dark ? "text-ivory" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "mt-4 text-[15px] leading-relaxed",
            dark ? "text-ivory/60" : "text-muted-foreground",
          )}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}

/* ── SmartImage: lazy, responsive Unsplash image with slow zoom option ──── */

export function SmartImage({
  src,
  alt,
  className,
  imgClassName,
  zoom = false,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  zoom?: boolean;
  priority?: boolean;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    <span
      className={cn(
        "relative block overflow-hidden bg-muted",
        className,
      )}
    >
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          "size-full object-cover transition-[opacity,transform] duration-700 ease-out",
          loaded ? "opacity-100" : "opacity-0",
          zoom && "hero-zoom-img",
          imgClassName,
        )}
      />
    </span>
  );
}

/* ── RatingStars: accessible static star rating ─────────────────────────── */

export function RatingStars({
  rating,
  className,
}: {
  rating: string;
  className?: string;
}) {
  const value = parseFloat(rating);
  return (
    <span
      className={cn("inline-flex items-center gap-0.5", className)}
      role="img"
      aria-label={`Rated ${rating} out of 5`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={cn(
            "size-3.5",
            value >= i - 0.3 ? "fill-brass" : "fill-border",
          )}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

/* ── DisclaimerNote: subtle sample-menu development label ───────────────── */

export function DisclaimerNote({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "flex items-start justify-center gap-2 text-center text-[11px] leading-relaxed text-muted-foreground/80",
        className,
      )}
    >
      <svg
        viewBox="0 0 16 16"
        className="mt-0.5 size-3 shrink-0 fill-none stroke-current"
        aria-hidden="true"
      >
        <circle cx="8" cy="8" r="6.5" strokeWidth="1.2" />
        <path d="M8 5v3.5M8 10.8v.2" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      Sample menu shown for website preview. Official menu will be updated
      from the restaurant&rsquo;s verified menu.
    </p>
  );
}

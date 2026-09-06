/**
 * ROMA'S CAFÉ DINER — VERIFIED BUSINESS DATA
 *
 * Every fact below comes from the client's business brief (Sept 2026).
 * Do NOT invent facts here: no awards, chefs, founders, branches, fake
 * testimonials, offers or delivery partnerships. If a fact is unknown,
 * leave it as `null` — UI components hide themselves when a value is null.
 */

export const RESTAURANT = {
  name: "Roma's Café Diner",
  shortName: "Roma's",
  tagline: "Cafe • Restaurant • Diner",
  established: 2016,

  // Public review presence — approximate, as supplied. Do not round up / inflate.
  googleRating: "4.3",
  googleReviews: "9,500+",
  zomatoRating: "4.6",
  costForTwo: "₹1,200",
  openingHours: "11:00 AM – 11:00 PM",
  openingHoursShort: "11 AM – 11 PM",

  city: "Varanasi",

  // ── VERIFIED CONTACT — not yet supplied by the client ────────────────────
  // Add the real values here and every CALL / DIRECTIONS affordance on the
  // site activates automatically. Until then they are intentionally hidden.
  phone: null as string | null, // e.g. "+91XXXXXXXXXX"
  phoneDisplay: null as string | null, // e.g. "+91 98XXX XXXXX"
  address: null as string | null, // e.g. "…", Varanasi, Uttar Pradesh
  mapsQuery: "Roma's Café Diner Varanasi", // used for "Get directions" / maps link
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Roma's Café Diner Varanasi"),
  instagramUrl: null as string | null, // only set once verified by client

  seo: {
    title: "Roma's Café Diner — Cafe, Restaurant & Diner in Varanasi",
    description:
      "Roma's Café Diner — a welcoming cafe, restaurant and diner serving Varanasi since 2016. Steaks, pastas, shakes, waffles and more. Rated 4.3★ on Google with 9,500+ reviews. Open daily 11 AM – 11 PM.",
    siteUrl: "https://romascafediner.com", // update when the real domain is live
  },
} as const;

export function telHref(phone: string | null): string | null {
  return phone ? `tel:${phone.replace(/\s+/g, "")}` : null;
}

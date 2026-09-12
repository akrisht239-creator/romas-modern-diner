/**
 * ROMA'S CAFÉ DINER — VERIFIED BUSINESS DATA
 *
 * Sources: Google Maps listing + Zomato listing (verified Sept 2026).
 * - Maps: https://maps.app.goo.gl/QVPHNZGx41B9BQjP8
 * - Zomato: https://www.zomato.com/RomasCafeDiner
 *
 * Do NOT invent facts here: no awards, chefs, founders, branches, fake
 * testimonials, offers or delivery partnerships. If a fact is unknown,
 * leave it as `null` — UI components hide themselves when a value is null.
 */

export const RESTAURANT = {
  name: "Roma's Café Diner",
  shortName: "Roma's",
  tagline: "Cafe • Restaurant • Diner",
  established: 2016,

  // Public review presence — as listed on Google / Zomato. Do not inflate.
  googleRating: "4.3",
  googleReviews: "9,500+",
  zomatoRating: "4.5",
  zomatoDiningReviews: "1,500+",
  zomatoDeliveryRating: "4.5",
  zomatoDeliveryReviews: "29.4K",
  costForTwo: "₹1,200",
  openingHours: "11:00 AM – 11:00 PM",
  openingHoursShort: "11 AM – 11 PM",

  city: "Varanasi",
  area: "Lanka",

  // ── VERIFIED CONTACT (from Zomato listing) ───────────────────────────────
  phone: "+919984444095",
  phoneDisplay: "+91 99844 44095",
  extraPhones: [
    { display: "+91 81159 98404", href: "tel:+918115998404" },
    { display: "0542 236 6138", href: "tel:+915422366138" },
  ],
  whatsapp:
    "https://wa.me/919984444095?text=" +
    encodeURIComponent("Hello Roma's! I'd like to reserve a table."),
  address:
    "24, 2nd Floor, Swastik Plaza, near Ravidas Gate, Lanka, Varanasi, Uttar Pradesh 221005",
  mapsQuery:
    "Roma's Café Diner, Swastik Plaza, near Ravidas Gate, Lanka, Varanasi",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Roma's Café Diner, Swastik Plaza, Lanka, Varanasi"),
  mapsShareUrl: "https://maps.app.goo.gl/QVPHNZGx41B9BQjP8?g_st=ac",

  // ── ORDERING / BOOKING ───────────────────────────────────────────────────
  zomatoUrl: "https://www.zomato.com/RomasCafeDiner",
  zomatoOrderUrl: "https://www.zomato.com/RomasCafeDiner/order",
  zomatoBookUrl: "https://www.zomato.com/RomasCafeDiner/book",
  zomatoReviewsUrl: "https://www.zomato.com/RomasCafeDiner/reviews",

  instagramUrl: null as string | null, // only set once verified by client

  cuisines: [
    "Cafe",
    "Continental",
    "North Indian",
    "Italian",
    "Asian",
    "Fast Food",
    "Beverages",
    "Sichuan",
  ],
  fssai: "12716038000425",
  geo: { lat: 25.2811435, lng: 83.0035045 },

  seo: {
    title: "Roma's Café Diner — Cafe, Restaurant & Diner in Lanka, Varanasi",
    description:
      "Roma's Café Diner, Lanka Varanasi — cafe, restaurant & diner since 2016. Pizzas, pastas, sizzlers, sushi, shakes & more. Zomato 4.5★ · Open daily 11 AM – 11 PM. Call +91 99844 44095.",
    siteUrl: "https://romascafediner.com", // update when the real domain is live
  },
} as const;

export function telHref(phone: string | null): string | null {
  return phone ? `tel:${phone.replace(/\s+/g, "")}` : null;
}

/** True when the current local time falls inside 11:00–23:00 opening hours. */
export function isOpenNow(now = new Date()): boolean {
  const h = now.getHours();
  return h >= 11 && h < 23;
}

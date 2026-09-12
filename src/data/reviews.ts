/**
 * GUEST REVIEWS + GALLERY — real public data (Zomato listing, Sept 2026).
 * Reviews are quoted verbatim with attribution + link to the source.
 * Gallery photos are the restaurant's own public Zomato gallery photos.
 */

export interface GuestReview {
  name: string;
  rating: number;
  text: string;
  meta: string;
}

export const GUEST_REVIEWS: GuestReview[] = [
  { name: "Khaza", rating: 5, text: "Amazing food. Good staff!", meta: "Dining review" },
  { name: "Prabhat Anand", rating: 5, text: "Very nice food and variety.", meta: "Dining review" },
  { name: "Priya Pandey", rating: 5, text: "Good cafe, good ambience.", meta: "Dining review" },
  { name: "Saurabh Tripathi", rating: 5, text: "Very excellent.", meta: "Dining review" },
  { name: "Shaurya", rating: 5, text: "Food was great.", meta: "Dining review" },
  { name: "Aditya", rating: 5, text: "Happy with service.", meta: "Dining review" },
];

const gallery = (id: string, w = 900, h = 700) =>
  `https://b.zmtcdn.com/data/pictures/7/3900267/${id}.jpg?fit=around|${w}:${h}&crop=${w}:${h};*,*`;

export const HERO_IMAGE = {
  src: "https://b.zmtcdn.com/data/pictures/7/3900267/276d2cd073dfbdc3308effdfbfd922cf_featured_v2.jpg?output-format=webp&fit=around|1600:900&crop=1600:900;*,*",
  fallback:
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=2000&q=75",
};

export const GALLERY_IMAGES: { src: string; alt: string }[] = [
  { src: gallery("1605744338a75ab5906ed62f8070ccc5"), alt: "Dining room at Roma's Café Diner" },
  { src: gallery("3525c3f3aa7e254432aa05a925e41511"), alt: "Plates at Roma's Café Diner" },
  { src: gallery("9ab842712bbf4d06b7ec863a12afdd5f"), alt: "Café moments at Roma's" },
  { src: gallery("5f1f415d5ccde27dd86c1ca19a9ab9d5"), alt: "Food at Roma's Café Diner" },
  { src: gallery("c0af098ac383a780085bca1cac862962"), alt: "Inside Roma's Café Diner" },
  {
    src: "https://b.zmtcdn.com/data/pictures/7/3900267/276d2cd073dfbdc3308effdfbfd922cf_featured_v2.jpg?output-format=webp&fit=around|900:700&crop=900:700;*,*",
    alt: "Signature spread at Roma's Café Diner",
  },
];

export const INTRO_IMAGES = {
  tall: {
    src: gallery("1605744338a75ab5906ed62f8070ccc5", 800, 1000),
    fallback:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=75",
  },
  small: {
    src: gallery("3525c3f3aa7e254432aa05a925e41511", 700, 700),
    fallback:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=75",
  },
};

export const ABOUT_IMAGES = {
  story: {
    src: gallery("9ab842712bbf4d06b7ec863a12afdd5f", 1400, 900),
    fallback:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=75",
  },
  detail: {
    src: gallery("5f1f415d5ccde27dd86c1ca19a9ab9d5", 800, 800),
    fallback:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=75",
  },
};

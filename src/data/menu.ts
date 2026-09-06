// TEMPORARY SAMPLE MENU — REPLACE WITH VERIFIED ROMA'S CAFÉ DINER MENU BEFORE FINAL DEPLOYMENT.

/**
 * TEMPORARY SAMPLE MENU
 * ─────────────────────
 * The items below are PLACEHOLDERS supplied for the current website build.
 * They are NOT confirmed Roma's Café Diner menu items and must never be
 * presented as official offerings.
 *
 * WHEN THE REAL MENU ARRIVES, edit ONLY this file:
 *   1. Replace the array with verified items (same field shape).
 *   2. Keep category/subcategory values within "food"/"beverages" and
 *      "veg"/"non-veg" — the UI, filtering, animations and responsive
 *      layout stay untouched.
 *   3. Delete this comment and swap in: "VERIFIED MENU" when the swap is
 *      complete. Never mix sample and verified items.
 */

export type MenuCategory = "food" | "beverages";
export type MenuSubcategory = "veg" | "non-veg";

export interface MenuItem {
  /** "food" | "beverages" */
  category: MenuCategory;
  /** "veg" | "non-veg" — beverages are left undefined */
  subcategory?: MenuSubcategory;
  name: string;
  description: string;
  /** Optional "featured" flag — drives the Home "Signature dishes" section */
  featured?: boolean;
  /** Optional larger image for featured dishes (item cards stay image-free by design) */
  image?: string;
}

const unsplash = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const MENU_ITEMS: MenuItem[] = [
  // ── FOOD · VEG ────────────────────────────────────────────────────────────
  { category: "food", subcategory: "veg", name: "Veg Manchurian", description: "Golden-fried vegetable dumplings tossed in a glossy, garlicky soy sauce." },
  { category: "food", subcategory: "veg", name: "Honey Chilli Potato", description: "Crisp potato batons lacquered in a sweet-heat honey chilli glaze.", featured: true, image: unsplash("1573080496219-bb080dd4f877") },
  { category: "food", subcategory: "veg", name: "Paneer Tikka", description: "Char-grilled paneer, marinated in spiced yoghurt, off the tandoor." },
  { category: "food", subcategory: "veg", name: "Paneer Butter Masala", description: "Soft paneer folded into a silky tomato-butter gravy." },
  { category: "food", subcategory: "veg", name: "Veg Hakka Noodles", description: "Wok-tossed noodles with julienned vegetables and a smoky edge." },
  { category: "food", subcategory: "veg", name: "Veg Fried Rice", description: "Steamed rice tossed with garden vegetables, soy and spring onion." },
  { category: "food", subcategory: "veg", name: "Margherita Pizza", description: "Slow-risen base, tangy tomato sauce and melted mozzarella." },
  { category: "food", subcategory: "veg", name: "Veg Sandwich", description: "Toasted sandwich stacked with fresh, garden-crisp vegetables." },
  { category: "food", subcategory: "veg", name: "White Sauce Pasta", description: "Pasta ribbons folded through a creamy white sauce." },
  { category: "food", subcategory: "veg", name: "Veg Lasagna", description: "Baked layers of pasta, vegetable ragù and molten cheese." },
  { category: "food", subcategory: "veg", name: "French Fries", description: "Golden, crisp and salted — the classic diner side." },
  { category: "food", subcategory: "veg", name: "Garlic Bread", description: "Buttered baguette, garlic butter and a light herb finish." },
  { category: "food", subcategory: "veg", name: "Waffles", description: "Fresh-made waffles served warm, with your choice of topping.", featured: true, image: unsplash("1562376552-0d160a2f238d") },

  // ── FOOD · NON-VEG ────────────────────────────────────────────────────────
  { category: "food", subcategory: "non-veg", name: "Chicken Steak", description: "Flame-seared chicken steak with a pan-drip jus.", featured: true, image: unsplash("1600891964092-4316c288032e") },
  { category: "food", subcategory: "non-veg", name: "Chicken Burger", description: "Crisp-fried chicken fillet in a soft bun with house sauces." },
  { category: "food", subcategory: "non-veg", name: "Chicken Sandwich", description: "Toasted sandwich layered with seasoned chicken and greens." },
  { category: "food", subcategory: "non-veg", name: "Chicken Lasagna", description: "Oven-baked layers of pasta, chicken ragù and béchamel.", featured: true, image: unsplash("1619895092538-128341789043") },
  { category: "food", subcategory: "non-veg", name: "Chicken Hakka Noodles", description: "Wok-tossed noodles with shredded chicken and vegetables." },
  { category: "food", subcategory: "non-veg", name: "Chicken Fried Rice", description: "Fried rice tossed with chicken, egg and spring onion." },
  { category: "food", subcategory: "non-veg", name: "Chicken Tikka", description: "Char-grilled chicken, marinated in spiced yoghurt." },
  { category: "food", subcategory: "non-veg", name: "Chicken Omelette", description: "Fluffy three-egg omelette folded with seasoned chicken.", featured: true, image: unsplash("1510693206972-df098062cb71") },
  { category: "food", subcategory: "non-veg", name: "Chicken Pasta", description: "Pasta tossed with chicken in a creamy sauce." },
  { category: "food", subcategory: "non-veg", name: "Chicken Pizza", description: "Wood-fired style base topped with chicken and mozzarella." },

  // ── BEVERAGES ─────────────────────────────────────────────────────────────
  { category: "beverages", name: "KitKat Shake", description: "Thick chocolate milkshake blended with crunchy wafer.", featured: true, image: unsplash("1572490122747-3968b75cc699") },
  { category: "beverages", name: "Chocolate Shake", description: "Rich chocolate blended thick and poured tall." },
  { category: "beverages", name: "Cold Coffee", description: "Chilled, blended coffee served over ice." },
  { category: "beverages", name: "Iced Tea", description: "Freshly brewed tea, served chilled over ice." },
  { category: "beverages", name: "Fresh Lime Soda", description: "Lime, soda and a choice of sweet, salted or mixed." },
  { category: "beverages", name: "Hot Coffee", description: "Freshly brewed filter coffee, served hot." },
  { category: "beverages", name: "Cappuccino", description: "Espresso capped with steamed-milk foam." },
  { category: "beverages", name: "Cafe Latte", description: "Smooth espresso stretched with silky steamed milk." },
  { category: "beverages", name: "Masala Tea", description: "Black tea simmered with milk, ginger and warming spices." },
  { category: "beverages", name: "Soft Drink", description: "Chilled bottled soft drinks." },
];

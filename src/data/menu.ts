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
 *
 * IMAGES: the Unsplash photos below are SAMPLE PLACEHOLDER photography for
 * the preview build — they are not photos of Roma's Café Diner's dishes.
 * Replace them alongside the verified menu (or keep them as styled
 * placeholders until the restaurant supplies real dish photography).
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
  /** Optional item photo — shown as the menu-card thumbnail and on featured dishes */
  image?: string;
}

const unsplash = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const MENU_ITEMS: MenuItem[] = [
  // ── FOOD · VEG ────────────────────────────────────────────────────────────
  { category: "food", subcategory: "veg", name: "Veg Manchurian", description: "Golden-fried vegetable dumplings tossed in a glossy, garlicky soy sauce.", image: unsplash("1606491956689-2ea866880c84") },
  { category: "food", subcategory: "veg", name: "Honey Chilli Potato", description: "Crisp potato batons lacquered in a sweet-heat honey chilli glaze.", featured: true, image: unsplash("1573080496219-bb080dd4f877") },
  { category: "food", subcategory: "veg", name: "Paneer Tikka", description: "Char-grilled paneer, marinated in spiced yoghurt, off the tandoor.", image: unsplash("1567188040759-fb8a883dc6d8") },
  { category: "food", subcategory: "veg", name: "Paneer Butter Masala", description: "Soft paneer folded into a silky tomato-butter gravy.", image: unsplash("1631452180519-c014fe946bc7") },
  { category: "food", subcategory: "veg", name: "Veg Hakka Noodles", description: "Wok-tossed noodles with julienned vegetables and a smoky edge.", image: unsplash("1585032226651-759b368d7246") },
  { category: "food", subcategory: "veg", name: "Veg Fried Rice", description: "Steamed rice tossed with garden vegetables, soy and spring onion.", image: unsplash("1603133872878-684f208fb84b") },
  { category: "food", subcategory: "veg", name: "Margherita Pizza", description: "Slow-risen base, tangy tomato sauce and melted mozzarella.", image: unsplash("1574071318508-1cdbab80d002") },
  { category: "food", subcategory: "veg", name: "Veg Sandwich", description: "Toasted sandwich stacked with fresh, garden-crisp vegetables.", image: unsplash("1528735602780-2552fd46c7af") },
  { category: "food", subcategory: "veg", name: "White Sauce Pasta", description: "Pasta ribbons folded through a creamy white sauce.", image: unsplash("1621996346565-e3dbc646d9a9") },
  { category: "food", subcategory: "veg", name: "Veg Lasagna", description: "Baked layers of pasta, vegetable ragù and molten cheese.", image: unsplash("1574894709920-11b28e7367e3") },
  { category: "food", subcategory: "veg", name: "French Fries", description: "Golden, crisp and salted — the classic diner side.", image: unsplash("1541592106381-b31e9677c0e5") },
  { category: "food", subcategory: "veg", name: "Garlic Bread", description: "Buttered baguette, garlic butter and a light herb finish.", image: unsplash("1619535860434-ba1d8fa12536") },
  { category: "food", subcategory: "veg", name: "Waffles", description: "Fresh-made waffles served warm, with your choice of topping.", featured: true, image: unsplash("1562376552-0d160a2f238d") },

  // ── FOOD · NON-VEG ────────────────────────────────────────────────────────
  { category: "food", subcategory: "non-veg", name: "Chicken Steak", description: "Flame-seared chicken steak with a pan-drip jus.", featured: true, image: unsplash("1600891964092-4316c288032e") },
  { category: "food", subcategory: "non-veg", name: "Chicken Burger", description: "Crisp-fried chicken fillet in a soft bun with house sauces.", image: unsplash("1568901346375-23c9450c58cd") },
  { category: "food", subcategory: "non-veg", name: "Chicken Sandwich", description: "Toasted sandwich layered with seasoned chicken and greens.", image: unsplash("1553909489-cd47e0907980") },
  { category: "food", subcategory: "non-veg", name: "Chicken Lasagna", description: "Oven-baked layers of pasta, chicken ragù and béchamel.", featured: true, image: unsplash("1619895092538-128341789043") },
  { category: "food", subcategory: "non-veg", name: "Chicken Hakka Noodles", description: "Wok-tossed noodles with shredded chicken and vegetables.", image: unsplash("1555126634-323283e090fa") },
  { category: "food", subcategory: "non-veg", name: "Chicken Fried Rice", description: "Fried rice tossed with chicken, egg and spring onion.", image: unsplash("1512058564366-18510be2db19") },
  { category: "food", subcategory: "non-veg", name: "Chicken Tikka", description: "Char-grilled chicken, marinated in spiced yoghurt.", image: unsplash("1603360946369-dc9bb6258143") },
  { category: "food", subcategory: "non-veg", name: "Chicken Omelette", description: "Fluffy three-egg omelette folded with seasoned chicken.", featured: true, image: unsplash("1510693206972-df098062cb71") },
  { category: "food", subcategory: "non-veg", name: "Chicken Pasta", description: "Pasta tossed with chicken in a creamy sauce.", image: unsplash("1563379926898-05f4575a45d8") },
  { category: "food", subcategory: "non-veg", name: "Chicken Pizza", description: "Wood-fired style base topped with chicken and mozzarella.", image: unsplash("1565299624946-b28f40a0ae38") },

  // ── BEVERAGES ─────────────────────────────────────────────────────────────
  { category: "beverages", name: "KitKat Shake", description: "Thick chocolate milkshake blended with crunchy wafer.", featured: true, image: unsplash("1572490122747-3968b75cc699") },
  { category: "beverages", name: "Chocolate Shake", description: "Rich chocolate blended thick and poured tall.", image: unsplash("1541658016709-82535e94bc69") },
  { category: "beverages", name: "Cold Coffee", description: "Chilled, blended coffee served over ice.", image: unsplash("1517701550927-30cf4ba1dba5") },
  { category: "beverages", name: "Iced Tea", description: "Freshly brewed tea, served chilled over ice.", image: unsplash("1556679343-c7306c1976bc") },
  { category: "beverages", name: "Fresh Lime Soda", description: "Lime, soda and a choice of sweet, salted or mixed.", image: unsplash("1621263764928-df1444c5e859") },
  { category: "beverages", name: "Hot Coffee", description: "Freshly brewed filter coffee, served hot.", image: unsplash("1495474472287-4d71bcdd2085") },
  { category: "beverages", name: "Cappuccino", description: "Espresso capped with steamed-milk foam.", image: unsplash("1572442388796-11668a67e53d") },
  { category: "beverages", name: "Cafe Latte", description: "Smooth espresso stretched with silky steamed milk.", image: unsplash("1541167760496-1628856ab772") },
  { category: "beverages", name: "Masala Tea", description: "Black tea simmered with milk, ginger and warming spices.", image: unsplash("1571934811356-5cc061b6821f") },
  { category: "beverages", name: "Soft Drink", description: "Chilled bottled soft drinks.", image: unsplash("1581636625402-29b2a704ef13") },
];

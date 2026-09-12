/**
 * ROMA'S CAFÉ DINER — REAL MENU (from the restaurant's Zomato listing)
 * Source: https://www.zomato.com/RomasCafeDiner/order (verified Sept 2026)
 *
 * Item names, descriptions & photos are the restaurant's own public data.
 * `price` stays null until the official in-cafe menu is supplied — the UI
 * hides prices gracefully and points guests to Zomato / the in-cafe menu.
 */

export type MenuCategory = "food" | "beverages";
export type MenuSubcategory = "veg" | "non-veg";

export interface MenuItem {
  /** Menu section id (see MENU_SECTIONS) */
  section: string;
  /** "food" | "beverages" */
  category: MenuCategory;
  /** "veg" | "non-veg" — beverages are left undefined */
  subcategory?: MenuSubcategory;
  name: string;
  description: string;
  /** Official price — null until the in-cafe menu is supplied */
  price?: string | null;
  /** "featured" drives the Home "Guest favourites" section */
  featured?: boolean;
  /** Item photo (restaurant's own Zomato photo) */
  image?: string;
}

export interface MenuSection {
  id: string;
  label: string;
  blurb: string;
  category: MenuCategory;
}

export const MENU_SECTIONS: MenuSection[] = [
  { id: "chef-specials", label: "Chef's Specials", blurb: "New on the menu", category: "food" },
  { id: "soups", label: "Soups", blurb: "To start warm", category: "food" },
  { id: "salads", label: "Salads", blurb: "Fresh & crisp", category: "food" },
  { id: "sandwiches", label: "Sandwiches", blurb: "Stacked & toasted", category: "food" },
  { id: "burgers", label: "Burgers", blurb: "Including Roma's Specials", category: "food" },
  { id: "pizza", label: "Pizzas", blurb: "Loaded & cheesy", category: "food" },
  { id: "pasta", label: "Pastas & Lasagne", blurb: "Italian classics", category: "food" },
  { id: "continental-starters", label: "Continental Starters", blurb: "Small plates", category: "food" },
  { id: "continental-mains", label: "Continental Mains", blurb: "Steaks & grills", category: "food" },
  { id: "mediterranean", label: "Mediterranean", blurb: "Mezze, hummus & wraps", category: "food" },
  { id: "mexican", label: "Mexican", blurb: "Nachos, burritos & fajitas", category: "food" },
  { id: "asian-starters", label: "Asian Starters", blurb: "Wok-tossed favourites", category: "food" },
  { id: "asian-mains", label: "Asian Mains", blurb: "Thai curries & gravies", category: "food" },
  { id: "dimsum-sushi", label: "Dim Sums & Sushi", blurb: "Steamed & rolled", category: "food" },
  { id: "noodles-rice", label: "Noodles & Rice", blurb: "Hakka to Thai basil", category: "food" },
  { id: "indian-starters", label: "Tandoor & Indian Starters", blurb: "From the tandoor", category: "food" },
  { id: "indian-mains", label: "Indian Mains", blurb: "Slow-cooked gravies", category: "food" },
  { id: "breads-biryani", label: "Breads & Biryani", blurb: "Tandoor-fresh & dum-cooked", category: "food" },
  { id: "bowls", label: "Power & Asian Bowls", blurb: "Complete meals in a bowl", category: "food" },
  { id: "balanced", label: "Balanced Bites", blurb: "High-protein & light", category: "food" },
  { id: "hot-beverages", label: "Hot Beverages", blurb: "Espresso & more", category: "beverages" },
  { id: "juices", label: "Cold-Pressed Juices", blurb: "Fresh & raw", category: "beverages" },
  { id: "cold-beverages", label: "Cold Beverages", blurb: "Iced teas, lassi & juices", category: "beverages" },
  { id: "shakes", label: "Shakes & Smoothies", blurb: "Thick & indulgent", category: "beverages" },
  { id: "mocktails", label: "Mocktails", blurb: "Zero-proof pours", category: "beverages" },
  { id: "desserts", label: "Desserts & Cakes", blurb: "Save some room", category: "food" },
];

/** Restaurant's own dish photo, served from its public Zomato CDN listing. */
const dish = (p: string) =>
  `https://b.zmtcdn.com/data/dish_photos/${p}?fit=around|400:400&crop=400:400;*,*`;

export const MENU_ITEMS: MenuItem[] = [
  // ── CHEF'S SPECIALS ─────────────────────────────────────────────────────
  { section: "chef-specials", category: "food", subcategory: "non-veg", name: "Mutton Ghee Roast Tacos", description: "Crispy flaky paratha tacos filled with Malabar-style ghee roast.", featured: true, image: dish("a73/9ae2b74bcf6c3831dad312277086ba73.jpeg") },
  { section: "chef-specials", category: "food", subcategory: "non-veg", name: "Malabar Fish Curry with Butter Rice", description: "Succulent fish simmered in a fragrant Malabar curry of coconut & kokum." },
  { section: "chef-specials", category: "food", subcategory: "non-veg", name: "Chicken Korma", description: "Chicken simmered in a rich, aromatic Mughlai gravy of slow-cooked onions." },
  { section: "chef-specials", category: "food", subcategory: "non-veg", name: "Mutton Korma", description: "Mutton simmered in aromatic Mughlai gravy of caramelised onions & yoghurt." },
  { section: "chef-specials", category: "food", subcategory: "non-veg", name: "5 Spice Fish Dry", description: "Fish fillets marinated with aromatic Chinese 5-spice, soy & garlic." },
  { section: "chef-specials", category: "food", subcategory: "non-veg", name: "Turkish Eggs", description: "Poached eggs on creamy garlicky yoghurt, finished with spiced butter." },
  { section: "chef-specials", category: "food", subcategory: "non-veg", name: "Chicken Chick Pea Pasta", description: "Gluten-free, protein-packed chickpea pasta in red arrabbiata sauce." },
  { section: "chef-specials", category: "food", subcategory: "veg", name: "Veg Chick Pea Pasta", description: "Gluten-free, protein-packed chickpea pasta in red arrabbiata sauce." },
  { section: "chef-specials", category: "food", subcategory: "veg", name: "Green Garden Pizza", description: "Grilled zucchini, sweet cherry tomatoes & fragrant basil." },
  { section: "chef-specials", category: "food", subcategory: "veg", name: "Mac N Cheese Burger", description: "Crumb-fried veg patty layered with creamy macaroni & crisp greens." },
  { section: "chef-specials", category: "food", subcategory: "veg", name: "Lemon Meringue Pie", description: "Crisp buttery crust, silky tangy lemon curd, torched meringue." },

  // ── SOUPS ───────────────────────────────────────────────────────────────
  { section: "soups", category: "food", subcategory: "non-veg", name: "Chicken Thukpa Soup", description: "Tibetan noodle soup with chopped chicken & veggies." },
  { section: "soups", category: "food", subcategory: "non-veg", name: "Chicken Manchow Soup", description: "All-time favourite spicy thick soup with garlic & coriander." },
  { section: "soups", category: "food", subcategory: "non-veg", name: "Chicken Tomkha Soup", description: "Coconut-milk Thai soup with lemongrass & galangal." },
  { section: "soups", category: "food", subcategory: "non-veg", name: "Cream of Chicken Soup", description: "Thick, creamy & mild with chunks of chicken." },
  { section: "soups", category: "food", subcategory: "non-veg", name: "Chicken Hot & Sour Soup", description: "Classic Chinese soup with soy, chilli & vinegar." },
  { section: "soups", category: "food", subcategory: "non-veg", name: "Chicken Sweet Corn Soup", description: "Creamy soup with sweet corn & vegetables." },
  { section: "soups", category: "food", subcategory: "veg", name: "Veg Manchow Soup", description: "All-time favourite spicy thick soup with garlic & coriander." },
  { section: "soups", category: "food", subcategory: "veg", name: "Tomato & Basil Soup", description: "Tomato soup flavoured with sweet basil." },
  { section: "soups", category: "food", subcategory: "veg", name: "Cream of Mushroom Soup", description: "Thick, creamy & mild with chunks of mushroom." },
  { section: "soups", category: "food", subcategory: "veg", name: "Veg Hot & Sour Soup", description: "Classic Chinese soup with soy, chilli & vinegar." },
  { section: "soups", category: "food", subcategory: "veg", name: "Lemon Coriander Soup", description: "Healthy thin soup flavoured with lemon & coriander." },
  { section: "soups", category: "food", subcategory: "veg", name: "Minestrone Soup", description: "Thick Italian soup with penne, tomato & garden vegetables." },

  // ── SALADS ──────────────────────────────────────────────────────────────
  { section: "salads", category: "food", subcategory: "non-veg", name: "Greek Grilled Chicken Salad", description: "Grilled chicken over mixed greens, tomatoes & olives.", image: dish("82e/b400d80f9f80c7e898ff39d141ee982e.jpeg") },
  { section: "salads", category: "food", subcategory: "non-veg", name: "Tangy Chicken Tikka Pineapple Salad", description: "Chicken tikka meets sweet pineapple — savoury & fresh.", image: dish("e84/1141a1532a55df09eb0c8add8e46de84.jpeg") },
  { section: "salads", category: "food", subcategory: "non-veg", name: "Classic Caesar Salad — Chicken", description: "Crunchy iceberg, sun-dried tomatoes, croutons & parmesan." },
  { section: "salads", category: "food", subcategory: "non-veg", name: "Char-Grilled Chicken Salad", description: "Continental spicy salad with char-grilled chicken & cucumber." },
  { section: "salads", category: "food", subcategory: "veg", name: "Apple, Broccoli & Walnut Salad", description: "Crisp apples & broccoli tossed with toasted walnuts." },
  { section: "salads", category: "food", subcategory: "veg", name: "My Big Fat Greek Salad", description: "Iceberg, peppers, cucumber, olives & feta." },
  { section: "salads", category: "food", subcategory: "veg", name: "Cheese & Pineapple Salad", description: "Signature blend of cheese, pineapple & crunchy iceberg." },
  { section: "salads", category: "food", subcategory: "veg", name: "Classic Caesar Salad — Veg", description: "Crunchy iceberg, sun-dried tomatoes, croutons & parmesan." },

  // ── SANDWICHES ──────────────────────────────────────────────────────────
  { section: "sandwiches", category: "food", subcategory: "veg", name: "Paneer Tikka Sandwich", description: "Paneer tikka, onions & melted cheese." },
  { section: "sandwiches", category: "food", subcategory: "veg", name: "Veg Club Sandwich", description: "Double-decker with onion, cucumber, tomato, coleslaw & cheese." },
  { section: "sandwiches", category: "food", subcategory: "veg", name: "Exotic Vegetable Sandwich", description: "Sautéed exotic vegetables & melted cheese." },
  { section: "sandwiches", category: "food", subcategory: "veg", name: "Spinach & Corn Sandwich", description: "Sautéed spinach, corn & melted cheese." },
  { section: "sandwiches", category: "food", subcategory: "non-veg", name: "Chicken Tikka Sandwich", description: "Chicken tikka, onions & melted cheese." },
  { section: "sandwiches", category: "food", subcategory: "non-veg", name: "Non-Veg Club Sandwich", description: "Double-decker with chicken salami, coleslaw & fried egg." },
  { section: "sandwiches", category: "food", subcategory: "non-veg", name: "Grilled Chicken Sandwich in Pesto", description: "Grilled chicken in pesto sauce & melted cheese." },
  { section: "sandwiches", category: "food", subcategory: "non-veg", name: "Chicken Panini Sandwich", description: "Smoked chicken, chicken salami & melted cheese in panini." },

  // ── BURGERS ─────────────────────────────────────────────────────────────
  { section: "burgers", category: "food", subcategory: "veg", name: "Roma's Special Veg Burger", description: "Grilled cottage cheese, veg patty, gherkins, jalapeños & cheese." },
  { section: "burgers", category: "food", subcategory: "veg", name: "Dynamite Burger", description: "Crumb-fried veg patty in mayo spread with lettuce & onion." },
  { section: "burgers", category: "food", subcategory: "veg", name: "Grilled Cottage Cheese Burger", description: "Cottage cheese, gherkins & melted cheese." },
  { section: "burgers", category: "food", subcategory: "veg", name: "Corn Crusted Potato Burger", description: "Crumb-fried potato-corn patty with lettuce & tomato." },
  { section: "burgers", category: "food", subcategory: "non-veg", name: "Roma's Special Chicken Burger", description: "Grilled chicken patty, chicken salami & mayo spread." },
  { section: "burgers", category: "food", subcategory: "non-veg", name: "Butterfly Chicken Burger", description: "Crumb-fried chicken fillets, sautéed mushrooms & cheese." },
  { section: "burgers", category: "food", subcategory: "non-veg", name: "Juicy Lucy Burger", description: "Signature juicy lamb patty with jalapeños & melted cheese." },
  { section: "burgers", category: "food", subcategory: "non-veg", name: "Barbeque Chicken Burger", description: "Juicy chicken fillets in barbeque sauce." },

  // ── PIZZAS ──────────────────────────────────────────────────────────────
  { section: "pizza", category: "food", subcategory: "veg", name: "Margherita Pizza", description: "Mozzarella & fresh basil — the timeless classic." },
  { section: "pizza", category: "food", subcategory: "veg", name: "Exotic Veg Pizza", description: "Broccoli, olives, jalapeños, peppers, corn & onion." },
  { section: "pizza", category: "food", subcategory: "veg", name: "Paneer Tikka Pizza", description: "Mozzarella & paneer tikka with dashes of mint sauce." },
  { section: "pizza", category: "food", subcategory: "veg", name: "Veg Mediterranean Pizza", description: "Peppers, olives, sun-dried tomatoes & feta." },
  { section: "pizza", category: "food", subcategory: "veg", name: "Mushroom Pizza", description: "Mushrooms, American corn & onion." },
  { section: "pizza", category: "food", subcategory: "veg", name: "Popeyes Pizza", description: "Spinach, garlic, sun-dried tomatoes, walnuts & mozzarella." },
  { section: "pizza", category: "food", subcategory: "veg", name: "Veg Extravaganza Pizza", description: "Mushroom, zucchini, baby corn, broccoli, peppers & olives." },
  { section: "pizza", category: "food", subcategory: "veg", name: "Veg 4-Cheese Pizza", description: "Mozzarella, cheddar, parmesan & feta." },
  { section: "pizza", category: "food", subcategory: "veg", name: "Golden Corn Pizza", description: "Sautéed golden corn & mozzarella." },
  { section: "pizza", category: "food", subcategory: "veg", name: "Veg Hawaiian Pizza", description: "Pineapple, cottage cheese & mozzarella." },
  { section: "pizza", category: "food", subcategory: "non-veg", name: "Chicken Overload Pizza", description: "Grilled chicken, sausages, salami & smoked chicken." },
  { section: "pizza", category: "food", subcategory: "non-veg", name: "Butter Chicken Pizza", description: "Indian butter chicken meets Italian base — a house fusion." },
  { section: "pizza", category: "food", subcategory: "non-veg", name: "Hot Barbeque Chicken Pizza", description: "Diced chicken tossed in barbeque sauce." },
  { section: "pizza", category: "food", subcategory: "non-veg", name: "Chicken Tikka Pizza", description: "Mozzarella & chicken tikka with dashes of mint sauce." },
  { section: "pizza", category: "food", subcategory: "non-veg", name: "Chicken Mediterranean Pizza", description: "Peppers, olives, sun-dried tomatoes & feta." },
  { section: "pizza", category: "food", subcategory: "non-veg", name: "Chicken 4-Cheese Pizza", description: "Mozzarella, cheddar, parmesan & feta." },
  { section: "pizza", category: "food", subcategory: "non-veg", name: "Chicken Hawaiian Pizza", description: "Pineapple, chicken & mozzarella." },

  // ── PASTAS ──────────────────────────────────────────────────────────────
  { section: "pasta", category: "food", subcategory: "veg", name: "Make Your Own Veg Pasta", description: "Pick your pasta & sauce — alfredo, arrabbiata & more." },
  { section: "pasta", category: "food", subcategory: "veg", name: "Veg Aglio-e-Olio Spaghetti", description: "Garlic, olive oil, Italian herbs & chilli." },
  { section: "pasta", category: "food", subcategory: "veg", name: "Veg Fettuccine in Creamy Pesto", description: "Flat pasta in creamy pesto with exotic vegetables.", image: dish("031/0838058fbe429b94915e2af22cff5031.jpeg") },
  { section: "pasta", category: "food", subcategory: "veg", name: "Lasagne Primavera", description: "Creamy white sauce layered with chopped exotic vegetables.", image: dish("6c6/5daea675233443cce94348398a7856c6.jpeg") },
  { section: "pasta", category: "food", subcategory: "veg", name: "Veg Cannelloni Pasta", description: "Filled with cheese, spinach-corn & Italian herbs.", image: dish("bc1/63c0c0f098e3b22b000af22effa1cbc1.jpeg") },
  { section: "pasta", category: "food", subcategory: "veg", name: "Veg Baked Mac & Cheese", description: "Macaroni in creamy cheesy sauce, mozzarella-topped." },
  { section: "pasta", category: "food", subcategory: "non-veg", name: "Lasagne Con Pollo", description: "Creamy white sauce layered with chunks of chicken.", featured: true, image: dish("ef9/4c0e03008c6cf6917c58e5c09887def9.jpeg") },
  { section: "pasta", category: "food", subcategory: "non-veg", name: "Makhani Chicken Pasta", description: "Butter-chicken creaminess meets Italian pasta.", image: dish("709/ebc30634819dc7203db51eeac604c709.jpeg") },
  { section: "pasta", category: "food", subcategory: "non-veg", name: "Chicken Fettuccine in Creamy Pesto", description: "Flat pasta in creamy pesto with chicken.", image: dish("67b/5db657bd513977b65bed2c3c8ef1067b.jpeg") },
  { section: "pasta", category: "food", subcategory: "non-veg", name: "Chicken Cannelloni Pasta", description: "Filled with cheese, chicken & Italian herbs.", image: dish("ef7/252e46bed84e5406c9317de695648ef7.jpeg") },
  { section: "pasta", category: "food", subcategory: "non-veg", name: "Chicken Aglio-e-Olio Spaghetti", description: "Garlic, olive oil, Italian herbs & chilli with chicken." },
  { section: "pasta", category: "food", subcategory: "non-veg", name: "Chicken Baked Mac & Cheese", description: "Macaroni in creamy cheesy sauce with chicken." },
  { section: "pasta", category: "food", subcategory: "non-veg", name: "Make Your Own Chicken Pasta", description: "Pick your pasta & sauce — alfredo, arrabbiata & more." },

  // ── CONTINENTAL STARTERS ────────────────────────────────────────────────
  { section: "continental-starters", category: "food", subcategory: "veg", name: "Classic French Fries", description: "Served with garlic mayo.", image: dish("287/8d68bec7e836b6343980f33467cb0287.jpeg") },
  { section: "continental-starters", category: "food", subcategory: "veg", name: "Cheese Garlic Bread", description: "Topped with mozzarella, baked to perfection.", image: dish("c99/db07b5f8ccdab648f0e3e309396f8c99.jpeg") },
  { section: "continental-starters", category: "food", subcategory: "veg", name: "American Corn Cheese Balls", description: "Crumb-fried corn-cheese balls with chipotle sauce." },
  { section: "continental-starters", category: "food", subcategory: "veg", name: "Sautéed Exotic Vegetables", description: "With herbs, butter & garlic.", image: dish("e1f/e9962d5aa1d68686782818b6c5e80e1f.jpeg") },
  { section: "continental-starters", category: "food", subcategory: "veg", name: "Peri Peri French Fries", description: "Fiery peri peri dust, served with chipotle." },
  { section: "continental-starters", category: "food", subcategory: "veg", name: "Mac & Cheese Fritters", description: "Crumb-fried slabs of mac & cheese with jalapeño mayo." },
  { section: "continental-starters", category: "food", subcategory: "veg", name: "Crostini Trio", description: "Toasted crostini with chef's toppings." },
  { section: "continental-starters", category: "food", subcategory: "non-veg", name: "Fish & Chips", description: "Crumb-fried fish fillets on finger chips with tartar sauce.", image: dish("70f/fa95f98e7407208a832a3c51ad3e170f.jpeg") },
  { section: "continental-starters", category: "food", subcategory: "non-veg", name: "Fish Fingers", description: "Crumb-fried fish with tartar sauce.", image: dish("4de/29194bffeaa757dab66648a17f5b84de.jpeg") },
  { section: "continental-starters", category: "food", subcategory: "non-veg", name: "Spicy Chicken Wings", description: "Marinated wings in the chef's special spicy sauce.", image: dish("081/23b639da4d38c73dd66d04ecf1738081.jpeg") },
  { section: "continental-starters", category: "food", subcategory: "non-veg", name: "Panko-Fried Prawns", description: "Jumbo prawns in French mustard with tartar sauce." },
  { section: "continental-starters", category: "food", subcategory: "non-veg", name: "Barbeque Chicken Wings", description: "Marinated wings tossed in barbeque sauce." },
  { section: "continental-starters", category: "food", subcategory: "non-veg", name: "Prawn Honey Mustard", description: "Grilled prawns in garlic & honey-mustard sauce." },

  // ── CONTINENTAL MAINS ───────────────────────────────────────────────────
  { section: "continental-mains", category: "food", subcategory: "veg", name: "Vegetable Stroganoff", description: "Cottage cheese in creamy cheesy sauce with exotic vegetables.", image: dish("eb7/35e6c535200894e73df0c10db645feb7.jpeg") },
  { section: "continental-mains", category: "food", subcategory: "veg", name: "Vegetable Au Gratin", description: "Baked in creamy sauce with mozzarella & cheddar." },
  { section: "continental-mains", category: "food", subcategory: "veg", name: "Herb-Grilled Cottage Cheese Steak", description: "With sautéed exotic vegetables & jus.", image: dish("a58/153ee67ed61dcc5466e54eecc7fca58.jpeg") },
  { section: "continental-mains", category: "food", subcategory: "veg", name: "Veg Bunny Chow", description: "Spicy-tangy vegetables stuffed inside bread." },
  { section: "continental-mains", category: "food", subcategory: "non-veg", name: "Chicken Steak", description: "Grilled chicken breast, mushroom sauce & sautéed vegetables.", featured: true, image: dish("f4a/60b3d5756922aac44d9046202dd69f4a.jpeg") },
  { section: "continental-mains", category: "food", subcategory: "non-veg", name: "Chicken Stroganoff", description: "Chicken & mushroom in creamy cheesy sauce with herbed rice.", image: dish("c41/5f12f950f92fb48cc951eb622d821c41.jpeg") },
  { section: "continental-mains", category: "food", subcategory: "non-veg", name: "Chicken Cordon Bleu", description: "Chicken wrapped around cheese & ham, breaded & served with jus.", image: dish("06a/b3e425eb5488831e2a788989f8de606a.jpeg") },
  { section: "continental-mains", category: "food", subcategory: "non-veg", name: "Grilled Fish Fillet", description: "With lemon-caper or lemon-butter sauce.", image: dish("554/125ee48c5965483028f8b4660a47a554.jpeg") },
  { section: "continental-mains", category: "food", subcategory: "non-veg", name: "Peri Peri Chicken", description: "Diced chicken in hot peri peri sauce with Mexican rice.", image: dish("d73/aba0e45b61b6029d03cd7d36518cdd73.jpeg") },
  { section: "continental-mains", category: "food", subcategory: "non-veg", name: "Stuffed Chicken Breast", description: "Stuffed with cheese, olives & gherkins; spinach jus." },
  { section: "continental-mains", category: "food", subcategory: "non-veg", name: "Chicken Bunny Chow", description: "Spicy-tangy chicken stuffed inside bread." },

  // ── MEDITERRANEAN ───────────────────────────────────────────────────────
  { section: "mediterranean", category: "food", subcategory: "veg", name: "Veg Lebanese Mezze Platter", description: "Chickpea patty, shashlik, pita, olives & dips.", image: dish("c57/e36fa1e7c4936780a378a8edc0804c57.jpeg") },
  { section: "mediterranean", category: "food", subcategory: "veg", name: "Hummus with Pita Bread", description: "Traditional chickpea dip with soft Lebanese flatbread.", image: dish("f4d/7d3fb0ea5fdb14090a96408ead450f4d.jpeg") },
  { section: "mediterranean", category: "food", subcategory: "veg", name: "Cottage Cheese Wrap", description: "Cottage cheese, peppers, beetroot & garlic aioli in pita." },
  { section: "mediterranean", category: "food", subcategory: "veg", name: "Falafel with Hummus & Tzatziki", description: "Crisp chickpea balls with classic dips." },
  { section: "mediterranean", category: "food", subcategory: "non-veg", name: "Non-Veg Lebanese Mezze Platter", description: "Chicken shawarma, kebbeh, pita, olives & pickles." },
  { section: "mediterranean", category: "food", subcategory: "non-veg", name: "Chicken Wrap", description: "Sautéed chicken, beetroot & peppers in tortilla." },
  { section: "mediterranean", category: "food", subcategory: "non-veg", name: "Chicken Hummus with Pita", description: "Classic hummus topped with julienned chicken." },

  // ── MEXICAN ─────────────────────────────────────────────────────────────
  { section: "mexican", category: "food", subcategory: "veg", name: "Veg Loaded Nachos", description: "Baked nachos with beans, peppers, cheese & salsa.", image: dish("5ed/9000ab2ac1c8255c4845e6a3ec3885ed.jpeg") },
  { section: "mexican", category: "food", subcategory: "veg", name: "Veg Burrito", description: "Beans, peppers, rice & cheese in grilled tortilla.", image: dish("745/7eaf59a8a0b8eb197f7ab91dff85e745.jpeg") },
  { section: "mexican", category: "food", subcategory: "veg", name: "Veg Enchiladas", description: "Corn-filled tortillas baked under mozzarella & cheddar." },
  { section: "mexican", category: "food", subcategory: "veg", name: "Grilled Veg Quesadillas", description: "Corn & cheese in grilled tortilla." },
  { section: "mexican", category: "food", subcategory: "veg", name: "Classic Cottage Cheese Fajitas", description: "Sizzling cottage cheese with onions, peppers & herbs.", image: dish("91c/b6c827fb2d60e16dd7025ec2fa16091c.jpeg") },
  { section: "mexican", category: "food", subcategory: "non-veg", name: "Chicken Loaded Nachos", description: "Baked nachos with beans, peppers, chicken & cheese." },
  { section: "mexican", category: "food", subcategory: "non-veg", name: "Chicken Burrito", description: "Chicken, beans, rice & cheese in grilled tortilla." },
  { section: "mexican", category: "food", subcategory: "non-veg", name: "Chicken Enchiladas", description: "Chicken-filled tortillas baked under cheese." },
  { section: "mexican", category: "food", subcategory: "non-veg", name: "Chicken Quesadillas", description: "Chicken, beans & cheese in grilled tortilla." },
  { section: "mexican", category: "food", subcategory: "non-veg", name: "Spicy Chicken Fajita", description: "Sizzling julienne chicken with onions & peppers.", image: dish("081/7c3ab47877339cf971b9ed2922c07081.jpeg") },

  // ── ASIAN STARTERS ──────────────────────────────────────────────────────
  { section: "asian-starters", category: "food", subcategory: "veg", name: "Honey Chilli Potato", description: "Potato strips in honey-chilli glaze, sesame finish.", image: dish("78e/fda9f3f91b7794c5d788e572a334e78e.jpeg") },
  { section: "asian-starters", category: "food", subcategory: "veg", name: "Veg Manchurian (Dry)", description: "Crisp vegetable balls with onion, garlic & green chilli.", image: dish("e82/fadb6a70f36b7c0370629407233aae82.jpeg") },
  { section: "asian-starters", category: "food", subcategory: "veg", name: "Chilli Paneer", description: "Batter-fried paneer with chillies, onion & capsicum." },
  { section: "asian-starters", category: "food", subcategory: "veg", name: "Veg Spring Rolls", description: "Hot & crispy, served with sweet chilli dip.", image: dish("d28/186391ef4db565eb1e4d7026d5073d28.jpeg") },
  { section: "asian-starters", category: "food", subcategory: "veg", name: "Chilli Corn", description: "Crisp American corn with onion, garlic & chilli.", image: dish("c24/735dabfa5966245f9c75776e91fc2c24.jpeg") },
  { section: "asian-starters", category: "food", subcategory: "veg", name: "Chilli Mushrooms", description: "Batter-fried mushrooms with capsicum & garlic.", image: dish("ae0/a3d55e212c5bc9a5049b18c48bb90ae0.jpeg") },
  { section: "asian-starters", category: "food", subcategory: "veg", name: "Crispy Fried Baby Corn", description: "Tossed with onion in hot garlic sauce.", image: dish("b5c/be9c20c5daaadcfddad633f9adb71b5c.jpeg") },
  { section: "asian-starters", category: "food", subcategory: "veg", name: "Crispy Vegetable Salt & Pepper", description: "Crisp diced vegetables with onion & garlic.", image: dish("422/d9afd3ef090f37f174ea722ec5ffa422.jpeg") },
  { section: "asian-starters", category: "food", subcategory: "veg", name: "Szechuan Chilli Paneer", description: "Paneer tossed in fiery Szechuan sauce." },
  { section: "asian-starters", category: "food", subcategory: "non-veg", name: "Chilli Chicken", description: "Diced chicken with chillies, onion & capsicum.", image: dish("7a9/ca9bf272a9d8cc70624caca1e54b77a9.jpeg") },
  { section: "asian-starters", category: "food", subcategory: "non-veg", name: "Honey Chilli Chicken", description: "Chicken with peppers in honey-chilli sauce.", image: dish("807/b3c77e2c7d83e9c7c8f3d505bf1c1807.jpeg") },
  { section: "asian-starters", category: "food", subcategory: "non-veg", name: "Korean Fried Chicken", description: "Crisp wings with ginger, garlic & oyster sauce.", image: dish("812/ca236c144e4c9c5d14642bba1b3c3812.jpeg") },
  { section: "asian-starters", category: "food", subcategory: "non-veg", name: "Lemon Chicken", description: "Lemon-flavoured chicken with onion & capsicum.", image: dish("7b1/8cf6a1982261e2e9ffadb93f5c7c17b1.jpeg") },
  { section: "asian-starters", category: "food", subcategory: "non-veg", name: "Chilli Fish", description: "Batter-fried fish with chillies, onion & capsicum." },
  { section: "asian-starters", category: "food", subcategory: "non-veg", name: "Drums of Heaven", description: "Chicken wings in tangy-spicy garlic sauce." },
  { section: "asian-starters", category: "food", subcategory: "non-veg", name: "Kung Pao Chicken", description: "Chicken & peppers in oyster sauce, peanut crunch." },
  { section: "asian-starters", category: "food", subcategory: "non-veg", name: "Szechuan Chilli Chicken", description: "Fiery Szechuan-tossed chicken with peppers." },
  { section: "asian-starters", category: "food", subcategory: "non-veg", name: "Butter Chilli Garlic Prawns", description: "Jumbo prawns with peppers in chilli-garlic butter." },

  // ── ASIAN MAINS ─────────────────────────────────────────────────────────
  { section: "asian-mains", category: "food", subcategory: "veg", name: "Veg Manchurian Gravy", description: "Vegetable balls in a rich soya-based gravy.", image: dish("b72/9862681271c42497a79fd4855eaa0b72.jpeg") },
  { section: "asian-mains", category: "food", subcategory: "veg", name: "Chilli Paneer Gravy", description: "Paneer in red-chilli gravy with peppers.", image: dish("9fa/bae7fb65cc84226f8ace0de25166a9fa.jpeg") },
  { section: "asian-mains", category: "food", subcategory: "veg", name: "Veg Green Thai Curry", description: "Exotic vegetables, Thai herbs & coconut." },
  { section: "asian-mains", category: "food", subcategory: "veg", name: "Veg Red Thai Curry", description: "Exotic vegetables, red Thai paste & coconut." },
  { section: "asian-mains", category: "food", subcategory: "veg", name: "Veg Khao Suey", description: "Burmese noodle soup in spiced coconut-milk sauce." },
  { section: "asian-mains", category: "food", subcategory: "non-veg", name: "Kung Pao Chicken Gravy", description: "Chicken & peppers in oyster sauce, peanut crunch.", image: dish("314/7f0c5e72b2a51d385b7a784211c52314.jpeg") },
  { section: "asian-mains", category: "food", subcategory: "non-veg", name: "Chicken in Hot Garlic Sauce", description: "Diced chicken with peppers in hot garlic sauce.", image: dish("c20/b01c88f751533d458cddbb3ad4b42c20.jpeg") },
  { section: "asian-mains", category: "food", subcategory: "non-veg", name: "Chilli Chicken Gravy", description: "Chicken with chillies, onion & capsicum.", image: dish("7bb/3a2fd36c11539bbeb305673a1848a7bb.jpeg") },
  { section: "asian-mains", category: "food", subcategory: "non-veg", name: "Chilli Fish Gravy", description: "Batter-fried fish in red-chilli sauce.", image: dish("879/866b0095ff7964bc6bcf795fb1472879.jpeg") },
  { section: "asian-mains", category: "food", subcategory: "non-veg", name: "Chicken Green Thai Curry", description: "Chicken & vegetables, green Thai paste & coconut." },
  { section: "asian-mains", category: "food", subcategory: "non-veg", name: "Chicken Red Thai Curry", description: "Chicken & vegetables, red Thai paste & coconut." },
  { section: "asian-mains", category: "food", subcategory: "non-veg", name: "Prawn Red Thai Curry", description: "Prawns & vegetables, red Thai paste & herbs." },
  { section: "asian-mains", category: "food", subcategory: "non-veg", name: "Szechuan Chilli Chicken Gravy", description: "Fiery Szechuan gravy with peppers & onion." },
  { section: "asian-mains", category: "food", subcategory: "non-veg", name: "Chicken Khao Suey", description: "Burmese chicken-noodle soup in coconut-milk sauce." },

  // ── DIM SUMS & SUSHI ────────────────────────────────────────────────────
  { section: "dimsum-sushi", category: "food", subcategory: "veg", name: "Exotic Veg Dim Sum", description: "Minced exotic vegetables in thin dough, Szechuan dip.", featured: true, image: dish("af7/78381d0775a6a8d212ffc829070b2af7.jpeg") },
  { section: "dimsum-sushi", category: "food", subcategory: "veg", name: "Crystal Veg Dim Sum", description: "Translucent parcels of cheese & Chinese vegetables.", image: dish("054/41e4e7e948296d76d3235839734d4054.jpeg") },
  { section: "dimsum-sushi", category: "food", subcategory: "veg", name: "Veg Thai Herbs Dim Sum", description: "Chef's special with Thai herbs & peanuts.", image: dish("8e9/0ba3818de37336e6d3c5ed76b1b9f8e9.jpeg") },
  { section: "dimsum-sushi", category: "food", subcategory: "veg", name: "Veg Dim Sum Platter (12 pc)", description: "An assorted platter of veg dim sums.", image: dish("12d/e144d29ddd0229ed11a54d3cc2fc012d.jpeg") },
  { section: "dimsum-sushi", category: "food", subcategory: "veg", name: "Cream Cheese Avocado Sushi", description: "Rolled fresh — creamy & delicate." },
  { section: "dimsum-sushi", category: "food", subcategory: "veg", name: "Asparagus Tempura Sushi", description: "Crisp tempura asparagus roll." },
  { section: "dimsum-sushi", category: "food", subcategory: "veg", name: "Tempura Paneer Sushi", description: "Crisp tempura paneer roll." },
  { section: "dimsum-sushi", category: "food", subcategory: "non-veg", name: "Classic Chicken Dim Sum", description: "Minced chicken in thin dough, Szechuan dip.", image: dish("b77/0cb9403e1f20384694eb2a4fd6d0fb77.jpeg") },
  { section: "dimsum-sushi", category: "food", subcategory: "non-veg", name: "Chicken Thai Herbs Dim Sum", description: "Chef's special with chicken, Thai herbs & peanuts.", image: dish("90b/a0b77d4a7e8b2352c32f8118f5f5b90b.jpeg") },
  { section: "dimsum-sushi", category: "food", subcategory: "non-veg", name: "Seafood Har Gow Dim Sum", description: "Juicy minced fish & prawn, steamed to perfection.", image: dish("a18/380bd4ed0ec0a8ce39d28e34aac5fa18.png") },
  { section: "dimsum-sushi", category: "food", subcategory: "non-veg", name: "Non-Veg Dim Sum Platter (12 pc)", description: "An assorted platter of non-veg dim sums." },
  { section: "dimsum-sushi", category: "food", subcategory: "non-veg", name: "Prawn Tempura Sushi", description: "Crisp prawn tempura roll." },
  { section: "dimsum-sushi", category: "food", subcategory: "non-veg", name: "Chicken Tempura Sushi", description: "Crisp chicken tempura roll." },
  { section: "dimsum-sushi", category: "food", subcategory: "non-veg", name: "California Roll", description: "The all-time favourite roll." },

  // ── NOODLES & RICE ──────────────────────────────────────────────────────
  { section: "noodles-rice", category: "food", subcategory: "veg", name: "Veg Hakka Noodles", description: "Wok-tossed with onion, carrot, capsicum & beans.", image: dish("1cc/b59acb0c5d4a79ba5e03d499f55cb1cc.jpeg") },
  { section: "noodles-rice", category: "food", subcategory: "veg", name: "Veg Chilli Garlic Noodles", description: "Spicy hakka-style noodles with chilli & garlic.", image: dish("f06/d82d7e3fc748dad6d3f4bc3ab0d6bf06.jpeg") },
  { section: "noodles-rice", category: "food", subcategory: "veg", name: "Veg Szechuan Noodles", description: "Fiery Szechuan-tossed noodles.", image: dish("389/3bfba2b5a225e51b7e383a51fe4a0389.jpeg") },
  { section: "noodles-rice", category: "food", subcategory: "veg", name: "Veg Pad Thai Noodles", description: "Tangy flat noodles with garlic & peanuts.", image: dish("cbd/58b0436fa86dc60b834e14644462ecbd.jpeg") },
  { section: "noodles-rice", category: "food", subcategory: "veg", name: "Veg American Chopsuey", description: "Crisp noodles under a loaded veg gravy.", image: dish("21f/170383ebccb5e1f0092a0d48f8e7121f.jpeg") },
  { section: "noodles-rice", category: "food", subcategory: "veg", name: "Veg Fried Rice", description: "Smoky wok rice with garden vegetables.", image: dish("3c9/e5556f5af67a1f70481ef88610df93c9.jpeg") },
  { section: "noodles-rice", category: "food", subcategory: "non-veg", name: "Chicken Hakka Noodles", description: "Wok-tossed noodles with chicken & vegetables.", image: dish("493/68683d2c82e5152d4b39e27fad964493.jpeg") },
  { section: "noodles-rice", category: "food", subcategory: "non-veg", name: "Chicken Szechuan Fried Rice", description: "Fiery Szechuan rice with chicken.", image: dish("40c/af51a5abefb67f2111879d349ff4c40c.jpeg") },
  { section: "noodles-rice", category: "food", subcategory: "non-veg", name: "Chicken Chilli Garlic Noodles", description: "Spicy noodles tossed with chilli & garlic.", image: dish("4cd/47cf88706cced4bd707e7b4f8f9dc4cd.jpeg") },
  { section: "noodles-rice", category: "food", subcategory: "non-veg", name: "Mixed Meat Noodles", description: "Egg, chicken, mutton & prawn — the full house.", image: dish("011/b156b22500f2d5d69ff7155db5725011.jpeg") },
  { section: "noodles-rice", category: "food", subcategory: "non-veg", name: "Mixed Meat Rice", description: "Egg, chicken, mutton & prawn — the full house.", image: dish("6dd/800985398740142a04b3bf63770b36dd.jpeg") },
  { section: "noodles-rice", category: "food", subcategory: "non-veg", name: "Egg Fried Rice", description: "Classic wok rice with egg & spring onion.", image: dish("64d/584b657c838b2f2624f2296ac9b0764d.jpeg") },

  // ── TANDOOR & INDIAN STARTERS ───────────────────────────────────────────
  { section: "indian-starters", category: "food", subcategory: "veg", name: "Paneer Achari Tikka", description: "Paneer in curd & pickle spices, tandoor-roasted.", image: dish("162/1d332eb23100459ae40c71f118bcf162.jpeg") },
  { section: "indian-starters", category: "food", subcategory: "veg", name: "Tandoori Soya Chaap", description: "Soya with Indian spices, mustard oil & curd.", image: dish("f1f/e94960023acf981d3bc54be23149bf1f.jpeg") },
  { section: "indian-starters", category: "food", subcategory: "veg", name: "Paneer Malai Tikka", description: "Creamy, mild & melt-in-mouth tandoori paneer." },

  // ── INDIAN MAINS ────────────────────────────────────────────────────────
  { section: "indian-mains", category: "food", subcategory: "veg", name: "Amritsari Chhole", description: "Kabuli chickpeas in thick onion-tomato gravy.", image: dish("aa4/9879c07120f3fb3ecbdf16e99959caa4.jpeg") },
  { section: "indian-mains", category: "food", subcategory: "veg", name: "Paneer Dhaniya Adraki", description: "Paneer with ginger in tomato-onion gravy.", image: dish("70a/f47a9a33f035f1d8f2ed00eae8fce70a.jpeg") },
  { section: "indian-mains", category: "food", subcategory: "veg", name: "Aloo Gobhi Masala", description: "Potato & cauliflower in chopped onion-tomato gravy.", image: dish("2e2/7b6fc349aca874bcad41772b682d42e2.jpeg") },
  { section: "indian-mains", category: "food", subcategory: "veg", name: "Shahi Kofta", description: "Paneer balls with dry fruits in rich cashew gravy." },
  { section: "indian-mains", category: "food", subcategory: "veg", name: "Shaam Savera", description: "Double-gravy dish of cashew-tomato makhani." },
  { section: "indian-mains", category: "food", subcategory: "veg", name: "Sabjiyon Ka Guldasta", description: "Assorted vegetables in onion-tomato gravy." },
  { section: "indian-mains", category: "food", subcategory: "veg", name: "Soya Chaap Masala", description: "Roasted chaap in chopped masala gravy." },
  { section: "indian-mains", category: "food", subcategory: "veg", name: "Matar Mushroom", description: "Mushroom & peas in onion-tomato brown gravy." },
  { section: "indian-mains", category: "food", subcategory: "veg", name: "Corn Capsicum Lababdar", description: "American corn & peppers in onion-tomato gravy." },
  { section: "indian-mains", category: "food", subcategory: "veg", name: "Lehsooni Palak", description: "Spinach tempered with garlic." },
  { section: "indian-mains", category: "food", subcategory: "veg", name: "Paneer Palak", description: "Paneer folded into silky spinach gravy." },
  { section: "indian-mains", category: "food", subcategory: "non-veg", name: "Butter Chicken", description: "Roasted chicken in tomato-cashew gravy, cream finish.", featured: true, image: dish("9f5/96fbd50c7b8dc751922a7a688cdaf9f5.jpeg") },
  { section: "indian-mains", category: "food", subcategory: "non-veg", name: "Bhuna Murgh", description: "Roasted chicken in brown chopped-masala gravy.", image: dish("6d8/b6dc98b664a607dc68f25025992756d8.jpeg") },
  { section: "indian-mains", category: "food", subcategory: "non-veg", name: "Kadhai Chicken", description: "Chicken in kadhai masala with peppers & onion.", image: dish("9fd/3d38cb4dac2c7b67f9df2ba61d4069fd.jpeg") },
  { section: "indian-mains", category: "food", subcategory: "non-veg", name: "Murgh Rara", description: "Chicken with minced chicken in chopped masala.", image: dish("b2e/0797c668b99d3f3ec12425a028883b2e.jpeg") },
  { section: "indian-mains", category: "food", subcategory: "non-veg", name: "Mutton Ghee Roast", description: "Fiery spiced mutton tossed in ghee.", image: dish("b4b/105537c660659b319ff18458f1e0cb4b.jpeg") },
  { section: "indian-mains", category: "food", subcategory: "non-veg", name: "Murgh Matka", description: "Chicken with minced mutton in brown onion gravy.", image: dish("495/45833a566dcd69bdf4e494c1e77b5495.jpeg") },
  { section: "indian-mains", category: "food", subcategory: "non-veg", name: "Punjabi Makhani Chicken", description: "Boneless chicken in tomato-cashew gravy.", image: dish("6dd/986e6030a3634c52a10ca17fef0d16dd.jpeg") },
  { section: "indian-mains", category: "food", subcategory: "non-veg", name: "Punjabi Style Fish Curry", description: "Boneless fish in Punjabi onion-tomato gravy.", image: dish("a0b/691832f17e4ea899b49790e189857a0b.jpeg") },
  { section: "indian-mains", category: "food", subcategory: "non-veg", name: "Chicken Curry", description: "Home-style brown onion gravy & Indian spices.", image: dish("3c3/69a92e335c16b03bfb5392be77f8d3c3.jpeg") },
  { section: "indian-mains", category: "food", subcategory: "non-veg", name: "Chicken Tikka Masala", description: "Roasted boneless chicken in chopped masala gravy." },
  { section: "indian-mains", category: "food", subcategory: "non-veg", name: "Mutton Rogan Josh", description: "Kashmiri classic in brown onion gravy." },
  { section: "indian-mains", category: "food", subcategory: "non-veg", name: "Hari Mirch Ka Bhuna Gosht", description: "Green-chilli mutton in brown onion gravy." },
  { section: "indian-mains", category: "food", subcategory: "non-veg", name: "Murgh Handi Lazeez", description: "Chicken in onion-tomato masala, seekh finish." },

  // ── BREADS & BIRYANI ────────────────────────────────────────────────────
  { section: "breads-biryani", category: "food", subcategory: "veg", name: "Butter Naan", description: "Tandoor-fresh, brushed with butter.", image: dish("359/345ced59f4b4fc2f695dfa4773d2c359.jpeg") },
  { section: "breads-biryani", category: "food", subcategory: "veg", name: "Garlic Naan", description: "Tandoor-fresh with roasted garlic.", image: dish("96b/3562391a344f59f6dee2fffb87bbb96b.jpeg") },
  { section: "breads-biryani", category: "food", subcategory: "veg", name: "Cheese Garlic Naan", description: "Stuffed with cheese, garlic finish.", image: dish("8b3/aef7ae45f84c3399595b0b9249a748b3.jpeg") },
  { section: "breads-biryani", category: "food", subcategory: "veg", name: "Missi Roti", description: "Gram-flour roti with onion & spices." },
  { section: "breads-biryani", category: "food", subcategory: "veg", name: "Butter Laccha Paratha", description: "Flaky, layered & buttery." },
  { section: "breads-biryani", category: "food", subcategory: "non-veg", name: "Chicken Kulcha", description: "Amritsari-style stuffed kulcha." },
  { section: "breads-biryani", category: "food", subcategory: "veg", name: "Subz Dum Tarkari Biryani", description: "Dum-cooked basmati with garden vegetables.", image: dish("040/95c86ea81670417a2307d1239093a040.jpeg") },
  { section: "breads-biryani", category: "food", subcategory: "veg", name: "Navratan Pulao", description: "Fragrant rice with nine gems of veg & fruit.", image: dish("6f8/c3f343c4b7f84ffceecbe1d3978066f8.jpeg") },
  { section: "breads-biryani", category: "food", subcategory: "veg", name: "Jeera Rice", description: "Basmati tossed with ghee & cumin.", image: dish("5e5/1c6fab1135c550e6ca40b7fa285145e5.jpeg") },
  { section: "breads-biryani", category: "food", subcategory: "veg", name: "Peas Pulao", description: "Basmati with green peas & whole spices." },
  { section: "breads-biryani", category: "food", subcategory: "non-veg", name: "Murg Dum Biryani", description: "Authentic dum biryani — basmati & chicken.", featured: true, image: dish("005/b315612f4466803e4a089d01f24e7005.jpeg") },
  { section: "breads-biryani", category: "food", subcategory: "non-veg", name: "Hyderabadi Mutton Dum Biryani", description: "Authentic dum biryani — basmati & mutton.", image: dish("475/58bc02bcf148dedadb5c19fa465b4475.jpeg") },
  { section: "breads-biryani", category: "food", subcategory: "non-veg", name: "Zafrani Chicken Tikka Biryani", description: "Dum biryani with saffron chicken tikka." },
  { section: "breads-biryani", category: "food", subcategory: "non-veg", name: "Egg Biryani", description: "Dum biryani with spiced eggs & basmati." },

  // ── POWER & ASIAN BOWLS ─────────────────────────────────────────────────
  { section: "bowls", category: "food", subcategory: "veg", name: "Veg Power Bowl", description: "Brown rice, tofu, avocado salsa & sautéed vegetables." },
  { section: "bowls", category: "food", subcategory: "non-veg", name: "Non-Veg Power Bowl", description: "Jerk-spiced chicken, brown rice & green apple salad." },
  { section: "bowls", category: "food", subcategory: "veg", name: "Kung Pao Paneer with Butter Rice", description: "Paneer & cashews in oyster sauce over butter rice." },
  { section: "bowls", category: "food", subcategory: "non-veg", name: "Spicy Thai Basil Chicken with Jasmine Rice", description: "Bangkok-street minced chicken over jasmine rice." },
  { section: "bowls", category: "food", subcategory: "non-veg", name: "Szechuan Prawns with Butter Rice", description: "Jumbo prawns in spicy Szechuan sauce over butter rice." },
  { section: "bowls", category: "food", subcategory: "non-veg", name: "Lemon Chilli Cilantro Fish Bowl", description: "Steamed fish in lemon-chilli stock with hakka noodles." },

  // ── BALANCED BITES ──────────────────────────────────────────────────────
  { section: "balanced", category: "food", subcategory: "veg", name: "Protein Omelette — Spinach", description: "Two-egg-white omelette filled with spinach." },
  { section: "balanced", category: "food", subcategory: "non-veg", name: "Protein Omelette — Sausage", description: "Two-egg-white omelette filled with sausage." },
  { section: "balanced", category: "food", subcategory: "non-veg", name: "Ladhaki Chicken Thukpa Soup", description: "Traditional Himalayan chicken noodle soup." },
  { section: "balanced", category: "food", subcategory: "veg", name: "Broccoli & Walnut Soup", description: "Simmered broccoli blended with hearty walnuts." },
  { section: "balanced", category: "food", subcategory: "non-veg", name: "Honey Mustard Chicken Power Wrap", description: "Grilled chicken in honey-mustard glaze with crisp greens.", image: dish("9bc/2de4b1b42e6ea99c313da60a444d79bc.jpeg") },
  { section: "balanced", category: "food", subcategory: "veg", name: "Cucumber Pesto Hummus Sandwich", description: "Brown bread, cucumber, pesto & hummus.", image: dish("ca4/e64e4e56107ff7ca9c35affa52a13ca4.jpeg") },

  // ── HOT BEVERAGES ───────────────────────────────────────────────────────
  { section: "hot-beverages", category: "beverages", name: "Cappuccino", description: "Espresso with steamed milk & froth." },
  { section: "hot-beverages", category: "beverages", name: "Cafe Latte", description: "Espresso with lots of steamed milk & froth." },
  { section: "hot-beverages", category: "beverages", name: "Cafe Mocha", description: "Espresso, chocolate syrup, steamed milk & froth." },
  { section: "hot-beverages", category: "beverages", name: "Cafe Americano", description: "Espresso lengthened with hot water." },
  { section: "hot-beverages", category: "beverages", name: "Espresso Doppio", description: "A double shot of espresso." },
  { section: "hot-beverages", category: "beverages", name: "Hot Chocolate", description: "Steamed milk with hot chocolate." },
  { section: "hot-beverages", category: "beverages", name: "Peanut Butter Latte", description: "Espresso, milk & peanut butter blended smooth." },

  // ── COLD-PRESSED JUICES ─────────────────────────────────────────────────
  { section: "juices", category: "beverages", name: "Triple Power ABC Elixir", description: "Apple, beet, carrot, ginger & lemon." },
  { section: "juices", category: "beverages", name: "Immune Booster Juice", description: "Orange, apple, ginger & lemon." },
  { section: "juices", category: "beverages", name: "Kale Kickstart", description: "Orange, strawberry, kale, carrot & banana." },
  { section: "juices", category: "beverages", name: "Beet Blast", description: "Beet, cucumber, apple, carrot, lemon & ginger." },
  { section: "juices", category: "beverages", name: "Green Goddess Juice", description: "Celery, cucumber, apple, kale, ginger & lemon." },
  { section: "juices", category: "beverages", name: "Pom-Pine Twist", description: "Pomegranate, pineapple & orange." },

  // ── COLD BEVERAGES ──────────────────────────────────────────────────────
  { section: "cold-beverages", category: "beverages", name: "Cold Coffee", description: "Blended cold & frothy." },
  { section: "cold-beverages", category: "beverages", name: "Cold Coffee with Ice Cream", description: "Blended cold, crowned with ice cream." },
  { section: "cold-beverages", category: "beverages", name: "Cafe Frappe", description: "Iced, shaken & frothy." },
  { section: "cold-beverages", category: "beverages", name: "Mango Lassi", description: "Thick churned yoghurt with mango." },
  { section: "cold-beverages", category: "beverages", name: "Lassi", description: "Thick churned yoghurt — sweet or salted." },
  { section: "cold-beverages", category: "beverages", name: "Fresh Lime Soda", description: "Sweet, salted or mixed." },
  { section: "cold-beverages", category: "beverages", name: "Lemon Iced Tea", description: "Brewed tea, chilled over ice." },
  { section: "cold-beverages", category: "beverages", name: "Masala Lemonade", description: "Desi-spiced & sparkling." },
  { section: "cold-beverages", category: "beverages", name: "Iced Americano", description: "Espresso over cold water & ice." },
  { section: "cold-beverages", category: "beverages", name: "Orange Juice", description: "Freshly squeezed." },
  { section: "cold-beverages", category: "beverages", name: "Mango Juice", description: "Fresh & pulpy." },
  { section: "cold-beverages", category: "beverages", name: "Apple Cinnamon Iced Tea", description: "Brewed tea with apple & cinnamon." },

  // ── SHAKES & SMOOTHIES ──────────────────────────────────────────────────
  { section: "shakes", category: "beverages", name: "Kitkat Shake", description: "Thick chocolate shake with crunchy wafer.", featured: true, image: dish("eae/f03207694152615764418277f6732eae.jpeg") },
  { section: "shakes", category: "beverages", name: "Oreo Shake", description: "Cookies & cream, blended thick.", image: dish("dce/b06ae6a01101396e63bc6a25a89e9dce.jpg") },
  { section: "shakes", category: "beverages", name: "Popcorn Caramel Shake", description: "Buttery caramel with a popcorn twist.", image: dish("a99/64c62417e44d237ebb0f87c5a10c1a99.jpeg") },
  { section: "shakes", category: "beverages", name: "Brownie Shake", description: "Chocolate brownie blended thick." },
  { section: "shakes", category: "beverages", name: "Biscoff Biscuit Shake", description: "Caramelised biscuit indulgence." },
  { section: "shakes", category: "beverages", name: "Peanut Butter Vanilla Shake", description: "Nutty, creamy & thick." },
  { section: "shakes", category: "beverages", name: "Chocolate Shake", description: "Rich chocolate, poured tall." },
  { section: "shakes", category: "beverages", name: "Butterscotch Shake", description: "Buttery caramel classic." },
  { section: "shakes", category: "beverages", name: "Mango Shake", description: "Seasonal mangoes & milk." },
  { section: "shakes", category: "beverages", name: "Strawberry Shake", description: "Berry-pink & creamy." },
  { section: "shakes", category: "beverages", name: "Banana Caramel Shake", description: "Banana meets buttery caramel." },
  { section: "shakes", category: "beverages", name: "Vanilla Shake", description: "The clean classic." },
  { section: "shakes", category: "beverages", name: "Mango Smoothie", description: "Thick-blended fruit smoothie." },
  { section: "shakes", category: "beverages", name: "Strawberry Smoothie", description: "Thick-blended fruit smoothie." },

  // ── MOCKTAILS ───────────────────────────────────────────────────────────
  { section: "mocktails", category: "beverages", name: "Virgin Pina Colada", description: "Pineapple & coconut — zero proof." },
  { section: "mocktails", category: "beverages", name: "Classic Mojito", description: "Mint, lime & soda over crunch ice." },
  { section: "mocktails", category: "beverages", name: "Paan Flavoured Mojito", description: "Banarasi paan meets mojito." },
  { section: "mocktails", category: "beverages", name: "Green Apple Mojito", description: "Crisp apple, mint & soda." },
  { section: "mocktails", category: "beverages", name: "Watermelon Mojito", description: "Fresh watermelon, mint & soda." },
  { section: "mocktails", category: "beverages", name: "Electric Blue Lemonade", description: "Citrus sparkle, electric hue." },
  { section: "mocktails", category: "beverages", name: "Fruit Punch", description: "A medley of fruits over ice." },
  { section: "mocktails", category: "beverages", name: "Shirley Temple", description: "Ginger ale, grenadine & cherry." },
  { section: "mocktails", category: "beverages", name: "Lychee Blush", description: "Lychee & blush-pink sparkle." },
  { section: "mocktails", category: "beverages", name: "MAI TAI", description: "Tropical & bold — new pour." },

  // ── DESSERTS ────────────────────────────────────────────────────────────
  { section: "desserts", category: "food", subcategory: "veg", name: "Tiramisu", description: "Espresso-soaked, mascarpone-clouded classic.", featured: true, image: dish("a02/1c253526f0c3d9bab02cb4109e44ca02.jpeg") },
  { section: "desserts", category: "food", subcategory: "veg", name: "Banarasi Matka Kulfi", description: "Dense, malai-rich kulfi set in clay matkas.", image: dish("eff/8f528e28cdf29840e22e2e591d62eeff.jpeg") },
  { section: "desserts", category: "food", subcategory: "veg", name: "Biscoff Cheesecake (Slice)", description: "Caramelised biscuit cheesecake.", image: dish("784/c9f272c7118a5263ec530c740ed5d784.jpeg") },
  { section: "desserts", category: "food", subcategory: "veg", name: "Mississippi Mud Pie", description: "Dark, dense & unapologetically chocolate.", image: dish("c63/9195f42b2119e11adc62439d580bec63.jpeg") },
  { section: "desserts", category: "food", subcategory: "veg", name: "Apple Cinnamon Pie with Ice Cream", description: "Warm spiced apples under a scoop.", image: dish("ed0/ed5d4a149f7bf0f70441ca87b53a2ed0.jpeg") },
  { section: "desserts", category: "food", subcategory: "veg", name: "Shahi Tukda", description: "Saffron-soaked bread, rabri & nuts.", image: dish("db0/32d6a606eab32da7d321751efe5d7db0.jpeg") },
  { section: "desserts", category: "food", subcategory: "veg", name: "Baklava (6 pc)", description: "Layered pastry, nuts & honey syrup.", image: dish("6c9/30004d3dd8e0d691fb7ca95d5dd746c9.png") },
  { section: "desserts", category: "food", subcategory: "veg", name: "Chocolate Mousse", description: "Light, dark & silky.", image: dish("468/5afc9121b3f61d52f9b2ff2e591b5468.jpeg") },
  { section: "desserts", category: "food", subcategory: "veg", name: "Mango Matka Kulfi", description: "Seasonal mango kulfi in clay matkas.", image: dish("5f6/431b14ac2a1a003729d8751e390d65f6.jpg") },
  { section: "desserts", category: "food", subcategory: "veg", name: "Banoffee Pie with Ice Cream", description: "Banana, toffee & cream under a scoop." },
  { section: "desserts", category: "food", subcategory: "veg", name: "Molten Lava Cake", description: "Crack it open — chocolate flows." },
  { section: "desserts", category: "food", subcategory: "veg", name: "Blueberry Cheesecake (Slice)", description: "Baked cheesecake with blueberry." },
  { section: "desserts", category: "food", subcategory: "veg", name: "Classic Waffle with Ice Cream", description: "Crisp waffle, cold scoop." },
  { section: "desserts", category: "food", subcategory: "veg", name: "Kesar Pista Ice Cream", description: "Saffron & pistachio scoop." },
  { section: "desserts", category: "food", subcategory: "veg", name: "Chocolate Truffle Cake", description: "Dense truffle layers.", image: dish("c79/2dbda88169bc01fa65de8605608bec79.jpeg") },
  { section: "desserts", category: "food", subcategory: "veg", name: "Black Forest Cake", description: "Cherry, cream & chocolate shavings." },
];

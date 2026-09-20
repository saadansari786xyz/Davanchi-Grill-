import { MenuItem, MenuCategoryMeta } from '../types';
import { DISH_IMAGES } from './menuImages';

export const MENU_CATEGORIES: MenuCategoryMeta[] = [
  { id: 'chef-recommendation', name: 'Chef Recommendation', group: 'Chef Specials', description: 'Exclusive prime cuts, imported lobster, and house culinary masterpieces.' },
  { id: 'steaks', name: 'Steaks', group: 'Steaks & Grills', description: 'Char-grilled to your preferred temperature, served with signature sides.' },
  { id: 'sizzling-pepper-fajitas', name: 'Sizzling Pepper Fajitas', group: 'Steaks & Grills', description: 'Char-grilled meat served sizzling on a platter of grilled onion and pepper, capsicum, tomatoes. Served with Mexican rice and warm tortillas, bread, cheese, sour cream, and salsa.' },
  { id: 'entrees', name: 'Entrées', group: 'Food', description: 'Crispy starters, signature sharing platters, and appetizing small plates.' },
  { id: 'chicken-section', name: 'Chicken Section', group: 'Food', description: 'Chef-crafted chicken mains and gourmet stuffed cutlets.' },
  { id: 'italian-section', name: 'Italian Section', group: 'Food', description: 'Authentic pasta recipes, handcrafted sauces, and layered lasagna.' },
  { id: 'seafood', name: 'Seafood', group: 'Food', description: 'Fresh tiger prawns, crispy calamari, grilled fillets, and oceanic platters.' },
  { id: 'pizzas', name: 'Pizzas', group: 'Food', description: 'Stone-baked artisan crusts loaded with premium cheeses and meats.' },
  { id: 'burgers-sandwiches', name: 'Burgers & Sandwiches', group: 'Food', description: 'All burgers and sandwiches served with fries and fresh coleslaw.' },
  { id: 'k-fusion-chinese-bowl', name: 'K. Fusion Chinese Bowl', group: 'Food', description: 'Wok-tossed fiery bowls, noodles, and fusion aromatics.' },
  { id: 'vegetarian-options', name: 'Vegetarian Options', group: 'Food', description: 'Crafted vegetarian mains, burgers, and pastas.' },
  { id: 'salads', name: 'Salads', group: 'Food', description: 'Crisp seasonal greens, infused quinoa, and wholesome bowls.' },
  { id: 'soups', name: 'Soups', group: 'Food', description: 'Velvety house broths and warming slow-simmered soups.' },
  { id: 'family-soups', name: 'Family Soups', group: 'Food', note: 'Serving 4', description: 'Generous sharing tureen for table dining.' },
  { id: 'side-orders', name: 'Side Orders', group: 'Food', description: 'Potatoes, seasoned rices, and artisanal dipping sauces.' },
  { id: 'dessert', name: 'Dessert', group: 'Beverages & Desserts', description: 'Decadent cakes, warm puddings, cheesecakes, and sweet endings.' },
  { id: 'margarita', name: 'Margarita', group: 'Beverages & Desserts', description: 'Chilled artisanal mocktail margaritas with fresh citrus and berries.' },
  { id: 'cocktails', name: 'Cocktails', group: 'Beverages & Desserts', description: 'Hand-crafted non-alcoholic mojitos, coladas, and tropical coolers.' },
  { id: 'refreshingly-lemonades', name: 'Refreshingly Lemonades', group: 'Beverages & Desserts', description: 'Zesty sparkling lemonades infused with herbs and fruits.' },
  { id: 'smoothies', name: 'Smoothies', group: 'Beverages & Desserts', description: 'Thick gourmet shakes, protein blends, and chilled smoothies.' },
  { id: 'juices-blends', name: 'Juices & Blends', group: 'Beverages & Desserts', description: 'Cold-pressed seasonal juices and vital detox elixirs.' },
  { id: 'hot-beverages', name: 'Hot Beverages', group: 'Beverages & Desserts', description: 'Espressos, velvety lattes, and premium teas.' },
  { id: 'cold-coffees', name: 'Cold Coffees', group: 'Beverages & Desserts', description: 'Iced mochas, iced matcha, and chilled caramel brews.' },
  { id: 'frappe', name: 'Frappe', group: 'Beverages & Desserts', description: 'Blended icy frappes topped with whipped cream.' },
  { id: 'boba-tea', name: 'Boba Tea', group: 'Beverages & Desserts', description: 'Fresh fruit-infused boba teas with chewy pearls.' },
  { id: 'accompaniments', name: 'Accompaniments', group: 'Beverages & Desserts', description: 'Soft beverages, mineral waters, and energy refreshments.' },
];

const RAW_MENU_ITEMS: MenuItem[] = [
  // --- SOUPS (Page 2) ---
  { id: 'soup-davinci-special', name: 'DaVinci Special Soup', category: 'Soups', price: 760, isSignature: true },
  { id: 'soup-roasted-tomato-basil', name: 'Roasted Tomato Basil Soup', category: 'Soups', price: 690, isVegetarian: true },
  { id: 'soup-wild-mushroom-medley', name: 'Wild Mushroom Medley Soup', category: 'Soups', price: 750, isVegetarian: true },
  { id: 'soup-seafood-chowder', name: 'Seafood Chowder Soup', category: 'Soups', price: 790 },
  { id: 'soup-chicken-asparagus', name: 'Chicken Asparagus Soup', category: 'Soups', price: 790 },
  { id: 'soup-hot-sour', name: 'Hot & Sour Soup', category: 'Soups', price: 650, isSpicy: true },
  { id: 'soup-chicken-corn', name: 'Chicken Corn Soup', category: 'Soups', price: 650 },
  { id: 'soup-korean-vegetarian', name: 'Korean Vegetarian Soup', category: 'Soups', price: 600, isVegetarian: true },

  // --- FAMILY SOUPS (Page 2) ---
  { id: 'fam-soup-hot-sour', name: 'Family Hot & Sour Soup', category: 'Family Soups', price: 1970, servingNote: 'Serving 4', isSpicy: true },
  { id: 'fam-soup-chicken-corn', name: 'Family Chicken Corn Soup', category: 'Family Soups', price: 1950, servingNote: 'Serving 4' },
  { id: 'fam-soup-korean-veg', name: 'Family Korean Vegetable Soup', category: 'Family Soups', price: 1790, servingNote: 'Serving 4', isVegetarian: true },

  // --- SALADS (Page 3) ---
  { id: 'salad-vinci-citrus-quinoa', name: 'Vinci Citrus-Infused Quinoa Salad', category: 'Salads', price: 1050, isSignature: true },
  { id: 'salad-grilled-chicken-caesar', name: 'Grilled Chicken Caesar Salad', category: 'Salads', price: 950 },
  { id: 'salad-loaded-cheese-jacket', name: 'Loaded Cheese Jacket Salad', category: 'Salads', price: 980 },
  { id: 'salad-seafood-garden', name: 'Seafood Garden Salad', category: 'Salads', price: 1250 },
  { id: 'salad-pink-velvet-hummus', name: 'Pink Velvet Hummus', category: 'Salads', price: 1050, isVegetarian: true },

  // --- ENTRÉES (Page 4) ---
  { id: 'entree-davinci-platter', name: 'DaVinci Platter', category: 'Entrées', price: 1670, isSignature: true },
  { id: 'entree-spicy-korean-wings', name: 'Spicy Korean Wings', category: 'Entrées', price: 950, isSpicy: true },
  { id: 'entree-korean-cheese-balls', name: 'Korean Cheese Balls', category: 'Entrées', price: 1050, isVegetarian: true },
  { id: 'entree-chicken-tacos', name: 'Chicken Tacos', category: 'Entrées', price: 980 },
  { id: 'entree-crispy-finger-fish', name: 'Crispy Finger Fish', category: 'Entrées', price: 1230 },
  { id: 'entree-trio-fusion-fries', name: 'Trio Fusion Fries', category: 'Entrées', price: 1050 },
  { id: 'entree-dynamite-prawns', name: 'Dynamite Prawns', category: 'Entrées', price: 1350, isSpicy: true },
  { id: 'entree-dynamite-chicken', name: 'Dynamite Chicken', category: 'Entrées', price: 1050, isSpicy: true },
  { id: 'entree-four-cheese-strips', name: 'Four Cheese Chicken Strips', category: 'Entrées', price: 1210 },
  { id: 'entree-loaded-chilli-fries', name: 'Loaded Chilli Fries', category: 'Entrées', price: 1050, isSpicy: true },
  { id: 'entree-peri-bites', name: 'Peri Bites', category: 'Entrées', price: 1080, isSpicy: true },
  { id: 'entree-nachos-royale', name: 'Nachos Royale', category: 'Entrées', price: 1240 },
  { id: 'entree-mini-trio-burger', name: 'Mini Trio Burger', category: 'Entrées', price: 1240 },
  { id: 'entree-crispy-chicken-tender', name: 'Crispy Chicken Tender', category: 'Entrées', price: 1080 },
  { id: 'entree-mozzarella-sticks', name: 'Mozzarella Sticks', category: 'Entrées', price: 1150, isVegetarian: true },
  { id: 'entree-crispy-calamari', name: 'Crispy Calamari', category: 'Entrées', price: 1250 },

  // --- ITALIAN SECTION (Page 5) ---
  { id: 'italian-smoky-sun-dried', name: 'Smoky Sun-Dried Pasta', category: 'Italian Section', price: 1550 },
  { id: 'italian-rigatoni', name: 'Rigatoni Pasta', category: 'Italian Section', price: 1480 },
  { id: 'italian-velvet-spiced-alfredo', name: 'Velvet Spiced Alfredo Pasta', category: 'Italian Section', price: 1560 },
  { id: 'italian-penne-italiano', name: 'Penne Italiano Pasta', category: 'Italian Section', price: 1470 },
  { id: 'italian-tuscan-lasagna', name: 'Tuscan Chicken Lasagna', category: 'Italian Section', price: 1500, isSignature: true },

  // --- CHICKEN SECTION (Page 5) ---
  { id: 'chicken-davinci-fiesta-bowl', name: 'DaVinci Fiesta Pineapple Bowl', category: 'Chicken Section', price: 2490, isSignature: true },
  { id: 'chicken-parmesan-crusted', name: 'Parmesan-Crusted Delight', category: 'Chicken Section', price: 1780 },
  { id: 'chicken-crunch', name: 'Chicken Crunch', category: 'Chicken Section', price: 1720 },
  { id: 'chicken-spiced-moroccan', name: 'Spiced Moroccan Chicken', category: 'Chicken Section', price: 1710, isSpicy: true },
  { id: 'chicken-peri-peri-skewers', name: 'Peri Peri Skewers', category: 'Chicken Section', price: 1850, isSpicy: true },
  { id: 'chicken-stuffed-delight', name: 'Stuffed Delight Chicken', category: 'Chicken Section', price: 1850 },
  { id: 'chicken-golden-parmesan', name: 'Golden Parmesan Chicken', category: 'Chicken Section', price: 1960 },
  { id: 'chicken-ala-kiev', name: 'Chicken Ala Kiev', category: 'Chicken Section', price: 2450 },

  // --- STEAKS (Page 6) ---
  {
    id: 'steak-davinci-special',
    name: 'DaVinci Special Steak',
    category: 'Steaks',
    isSignature: true,
    variations: [
      { label: 'Beef', price: 2110 },
      { label: 'Chicken', price: 1560 },
    ],
  },
  {
    id: 'steak-bearnaise',
    name: 'Bearnaise Steak',
    category: 'Steaks',
    variations: [
      { label: 'Beef', price: 2050 },
      { label: 'Chicken', price: 1510 },
    ],
  },
  {
    id: 'steak-royal-mushroom',
    name: 'Royal Mushroom Beef Steak',
    category: 'Steaks',
    variations: [
      { label: 'Beef', price: 2090 },
      { label: 'Chicken', price: 1530 },
    ],
  },
  {
    id: 'steak-spicy-mexican',
    name: 'Spicy Mexican Steak',
    category: 'Steaks',
    isSpicy: true,
    variations: [
      { label: 'Beef', price: 2010 },
      { label: 'Chicken', price: 1510 },
    ],
  },
  {
    id: 'steak-chimichurri',
    name: 'Chimichurri Steak',
    category: 'Steaks',
    variations: [
      { label: 'Beef', price: 2010 },
      { label: 'Chicken', price: 1610 },
    ],
  },
  {
    id: 'steak-jalapeno-flame',
    name: 'Jalapeno Flame Steak',
    category: 'Steaks',
    isSpicy: true,
    variations: [
      { label: 'Beef', price: 2050 },
      { label: 'Chicken', price: 1580 },
    ],
  },
  {
    id: 'steak-tarragon-herb',
    name: 'Tarragon Herb Steak',
    category: 'Steaks',
    variations: [
      { label: 'Beef', price: 2080 },
      { label: 'Chicken', price: 1590 },
    ],
  },
  {
    id: 'steak-marrakesh-chilli',
    name: 'Marrakesh Chilli Steak',
    category: 'Steaks',
    isSpicy: true,
    variations: [
      { label: 'Beef', price: 2180 },
      { label: 'Chicken', price: 1610 },
    ],
  },
  {
    id: 'steak-italian',
    name: 'Italian Steak',
    category: 'Steaks',
    variations: [
      { label: 'Beef', price: 2210 },
      { label: 'Chicken', price: 1630 },
    ],
  },

  // --- SIZZLING PEPPER FAJITAS (Page 7) ---
  {
    id: 'fajita-beef',
    name: 'Beef Sizzling',
    category: 'Sizzling Pepper Fajitas',
    price: 2250,
    description: 'Char-grilled meat served sizzling on a platter of grilled onion and pepper, capsicum, tomatoes. Served with Mexican rice and warm tortillas, bread, cheese, sour cream, and salsa.',
  },
  {
    id: 'fajita-chicken',
    name: 'Chicken Sizzling',
    category: 'Sizzling Pepper Fajitas',
    price: 1700,
    description: 'Char-grilled meat served sizzling on a platter of grilled onion and pepper, capsicum, tomatoes. Served with Mexican rice and warm tortillas, bread, cheese, sour cream, and salsa.',
  },
  {
    id: 'fajita-combination',
    name: 'Combination Sizzling',
    category: 'Sizzling Pepper Fajitas',
    price: 1950,
    description: 'Char-grilled beef & chicken sizzling platter with peppers, Mexican rice, tortillas, cheese, and salsa.',
  },
  {
    id: 'fajita-seafood',
    name: 'Seafood Sizzling',
    category: 'Sizzling Pepper Fajitas',
    price: 2450,
    description: 'Char-grilled oceanic catch sizzling platter with peppers, Mexican rice, tortillas, cheese, and salsa.',
  },

  // --- SIDE ORDERS (Page 7) ---
  { id: 'side-french-fries', name: 'French Fries', category: 'Side Orders', price: 510 },
  { id: 'side-mashed-potato', name: 'Mashed Potato', category: 'Side Orders', price: 400 },
  { id: 'side-baked-potato', name: 'Baked Potato', category: 'Side Orders', price: 370 },
  { id: 'side-garlic-rice', name: 'Garlic Rice', category: 'Side Orders', price: 450 },
  { id: 'side-vegetable-fried-rice', name: 'Vegetable Fried Rice', category: 'Side Orders', price: 750, isVegetarian: true },
  { id: 'side-dip-sauce', name: 'Dip Sauce', category: 'Side Orders', price: 250 },

  // --- PIZZAS (Page 8) ---
  { id: 'pizza-creamy-alfredo', name: 'Creamy Alfredo Chicken', category: 'Pizzas', price: 1950 },
  { id: 'pizza-bbq-sizzlers', name: 'BBQ Sizzlers Chicken', category: 'Pizzas', price: 1850 },
  { id: 'pizza-spicy-peri-peri', name: 'Spicy Peri Peri Chicken', category: 'Pizzas', price: 1910, isSpicy: true },
  { id: 'pizza-four-cheese-melt', name: 'Four Cheese Melt', category: 'Pizzas', price: 1750, isVegetarian: true },
  { id: 'pizza-veggie-garden-delight', name: 'Veggie Garden Delight', category: 'Pizzas', price: 1550, isVegetarian: true },
  { id: 'pizza-beef-steak', name: 'Beef Steak Pizza', category: 'Pizzas', price: 1950, isSignature: true },

  // --- BURGERS & SANDWICHES (Page 9) ---
  {
    id: 'burger-philly-steak',
    name: 'Philly Steak & Chicken Burger',
    category: 'Burgers & Sandwiches',
    servingNote: 'Served with fries and fresh coleslaw',
    variations: [
      { label: 'Beef', price: 1080 },
      { label: 'Chicken', price: 1080 },
    ],
  },
  {
    id: 'burger-spicy-chilli',
    name: 'Spicy Chilli Burger',
    category: 'Burgers & Sandwiches',
    isSpicy: true,
    servingNote: 'Served with fries and fresh coleslaw',
    variations: [
      { label: 'Beef', price: 1090 },
      { label: 'Chicken', price: 1090 },
    ],
  },
  {
    id: 'burger-classic-beef',
    name: 'Classic Beef Burger',
    category: 'Burgers & Sandwiches',
    servingNote: 'Served with fries and fresh coleslaw',
    variations: [
      { label: 'Beef', price: 890 },
      { label: 'Chicken', price: 890 },
    ],
  },
  {
    id: 'burger-mega-zinger',
    name: 'Mega Zinger Burger',
    category: 'Burgers & Sandwiches',
    servingNote: 'Served with fries and fresh coleslaw',
    variations: [
      { label: 'Beef', price: 850 },
      { label: 'Chicken', price: 850 },
    ],
  },
  {
    id: 'burger-swiss-mushroom',
    name: 'Swiss Mushroom Burger',
    category: 'Burgers & Sandwiches',
    servingNote: 'Served with fries and fresh coleslaw',
    variations: [
      { label: 'Beef', price: 980 },
      { label: 'Chicken', price: 980 },
    ],
  },
  {
    id: 'burger-blazing-jalapeno',
    name: 'Blazing Jalapeno Burger',
    category: 'Burgers & Sandwiches',
    isSpicy: true,
    servingNote: 'Served with fries and fresh coleslaw',
    variations: [
      { label: 'Beef', price: 1080 },
      { label: 'Chicken', price: 1080 },
    ],
  },
  {
    id: 'burger-smoky-hickory',
    name: 'Smoky Hickory Nachos Burger',
    category: 'Burgers & Sandwiches',
    servingNote: 'Served with fries and fresh coleslaw',
    variations: [
      { label: 'Beef', price: 1050 },
      { label: 'Chicken', price: 1050 },
    ],
  },
  { id: 'sandwich-davinci-special', name: 'DaVinci special Sandwich', category: 'Burgers & Sandwiches', price: 1020, isSignature: true, servingNote: 'Served with fries and fresh coleslaw' },
  { id: 'sandwich-classic-club', name: 'Classic Club Sandwich', category: 'Burgers & Sandwiches', price: 1050, servingNote: 'Served with fries and fresh coleslaw' },
  { id: 'sandwich-smoky-chicken-panini', name: 'Smoky Chicken Panini', category: 'Burgers & Sandwiches', price: 1080, servingNote: 'Served with fries and fresh coleslaw' },
  { id: 'sandwich-crunchy-chicken', name: 'Crunchy Chicken Sandwich', category: 'Burgers & Sandwiches', price: 1010, servingNote: 'Served with fries and fresh coleslaw' },
  { id: 'burger-smash-korean', name: 'Smash Korean Burger', category: 'Burgers & Sandwiches', price: 1010, servingNote: 'Served with fries and fresh coleslaw' },

  // --- K. FUSION CHINESE BOWL (Page 10) ---
  { id: 'k-chicken-chilli-dry', name: 'Chicken Chilli Dry', category: 'K. Fusion Chinese Bowl', price: 1490, isSpicy: true },
  { id: 'k-spicy-dry-chilli-beef', name: 'Spicy Dry Chilli Beef', category: 'K. Fusion Chinese Bowl', price: 1850, isSpicy: true },
  { id: 'k-blazing-korean-manchurian', name: 'Blazing Korean Manchurian', category: 'K. Fusion Chinese Bowl', price: 1490, isSpicy: true },
  { id: 'k-kung-pao-fusion-bowl', name: 'Kung Pao Fusion Bowl', category: 'K. Fusion Chinese Bowl', price: 1550 },
  { id: 'k-spicy-cherry-chicken', name: 'Spicy Cherry Chicken', category: 'K. Fusion Chinese Bowl', price: 1450, isSpicy: true },
  { id: 'k-garlic-sizzle-prawns', name: 'Garlic Sizzle Prawns', category: 'K. Fusion Chinese Bowl', price: 1850 },
  { id: 'k-chicken-chowmein', name: 'Chicken Chowmein', category: 'K. Fusion Chinese Bowl', price: 1350 },

  // --- VEGETARIAN OPTIONS (Page 10) ---
  { id: 'veg-burger', name: 'Vegetable Burger', category: 'Vegetarian Options', price: 950, isVegetarian: true },
  { id: 'veg-rigatoni', name: 'Vegetable Rigatoni Pasta', category: 'Vegetarian Options', price: 1160, isVegetarian: true },
  { id: 'veg-herb-steak', name: 'Herb Vegetable Steak', category: 'Vegetarian Options', price: 1250, isVegetarian: true },
  { id: 'veg-manchurian', name: 'Vegetable Manchurian', category: 'Vegetarian Options', price: 1190, isVegetarian: true },
  { id: 'veg-chowmein', name: 'Vegetable Chowmein', category: 'Vegetarian Options', price: 980, isVegetarian: true },

  // --- SEAFOOD (Page 11) ---
  { id: 'seafood-platter', name: 'Seafood Platter', category: 'Seafood', price: 2490, isSignature: true },
  { id: 'seafood-tempura-prawns', name: 'Tempura Prawns', category: 'Seafood', price: 2120 },
  { id: 'seafood-fish-and-chips', name: 'Fish & Chips', category: 'Seafood', price: 2150 },
  { id: 'seafood-creamy-chilli-tarragon', name: 'Creamy Chilli Tarragon Fish', category: 'Seafood', price: 2230 },
  { id: 'seafood-italian-garden-fish', name: 'Italian Garden Fish', category: 'Seafood', price: 2320 },
  { id: 'seafood-herb-butter-fish', name: 'Herb Butter Fish', category: 'Seafood', price: 2160 },
  { id: 'seafood-korean-grilled-fish', name: 'Korean Grilled Fish', category: 'Seafood', price: 2170 },
  { id: 'seafood-thai-red-curry-prawns', name: 'Thai Red Curry Prawns', category: 'Seafood', price: 2240, isSpicy: true },
  { id: 'seafood-grilled-platter', name: 'Grilled Seafood Platter', category: 'Seafood', price: 2490 },

  // --- CHEF RECOMMENDATION (Page 12) ---
  { id: 'chef-tomahawk-steak', name: 'Tomahawk Steak', category: 'Chef Recommendation', price: 3450, isChefRecommendation: true, isSignature: true },
  { id: 'chef-tenderloin-steak', name: 'Tenderloin Steak', category: 'Chef Recommendation', price: 3450, isChefRecommendation: true },
  { id: 'chef-grilled-beef-morel', name: 'Grilled Beef Morel', category: 'Chef Recommendation', price: 2450, isChefRecommendation: true },
  { id: 'chef-turkish-sandwich', name: 'Turkish Sandwich', category: 'Chef Recommendation', price: 1510, isChefRecommendation: true },
  { id: 'chef-parmesan-risotto', name: 'Parmesan Risotto', category: 'Chef Recommendation', price: 1890, isChefRecommendation: true, isVegetarian: true },
  {
    id: 'chef-korean-smoky-mandi',
    name: 'Korean Smoky Mandi',
    category: 'Chef Recommendation',
    isChefRecommendation: true,
    variations: [
      { label: 'Mutton', price: 3780 },
      { label: 'Chicken', price: 2250 },
    ],
  },
  { id: 'chef-lemon-butter-tiger-prawns', name: 'Lemon Butter Tiger Prawns', category: 'Chef Recommendation', price: 2800, isChefRecommendation: true },
  { id: 'chef-fried-tiger-prawns', name: 'Fried Tiger Prawns', category: 'Chef Recommendation', price: 2800, isChefRecommendation: true },
  { id: 'chef-classic-lobster-thermidor', name: 'Classic Lobster Thermidor', category: 'Chef Recommendation', price: 6200, isChefRecommendation: true, isSignature: true },
  { id: 'chef-garlic-herb-grilled-lobster', name: 'Garlic Herb Grilled Lobster', category: 'Chef Recommendation', price: 5900, isChefRecommendation: true, image: '/okhbl.jpg' },

  // --- DESSERT (Page 13) ---
  { id: 'dessert-smoked-coconut-creme-brulee', name: 'Smoked Coconut Creme Brulee', category: 'Dessert', price: 1240, isSignature: true },
  { id: 'dessert-dreamy-delights-cake', name: 'Dreamy Delights Cake', category: 'Dessert', price: 870 },
  { id: 'dessert-lotus-cheesecake', name: 'Lotus Cheesecake', category: 'Dessert', price: 810 },
  { id: 'dessert-warm-bread-pudding', name: 'Warm Bread Pudding', category: 'Dessert', price: 850 },
  { id: 'dessert-sizzling-walnut-brownie', name: 'Sizzling Walnut Brownie', category: 'Dessert', price: 810 },
  { id: 'dessert-choco-lava-delight', name: 'Choco Lava Delight', category: 'Dessert', price: 850 },
  { id: 'dessert-golden-sweet-waffle', name: 'Golden Sweet Waffle', category: 'Dessert', price: 750 },
  { id: 'dessert-triple-milk-magic-cake', name: 'Triple Milk Magic Cake', category: 'Dessert', price: 810 },
  { id: 'dessert-pistachio-cheesecake', name: 'Pistachio Cheesecake', category: 'Dessert', price: 1050 },

  // --- MARGARITA (Page 14) ---
  { id: 'margarita-mint-twist', name: 'Mint Twist', category: 'Margarita', price: 810 },
  { id: 'margarita-lime', name: 'Lime', category: 'Margarita', price: 710 },
  { id: 'margarita-blueberry', name: 'Blueberry', category: 'Margarita', price: 710 },
  { id: 'margarita-peach', name: 'Peach', category: 'Margarita', price: 710 },
  { id: 'margarita-strawberry', name: 'Strawberry', category: 'Margarita', price: 710 },
  { id: 'margarita-passion-fruit', name: 'Passion Fruit', category: 'Margarita', price: 730 },
  { id: 'margarita-tangy-surprise', name: 'Tangy Surprise', category: 'Margarita', price: 750 },

  // --- COCKTAILS (Page 14) ---
  { id: 'cocktail-coconut-paradise', name: 'Coconut Paradise', category: 'Cocktails', price: 810 },
  { id: 'cocktail-raspberry-colada', name: 'Raspberry Colada', category: 'Cocktails', price: 790 },
  { id: 'cocktail-berry-blast', name: 'Berry Blast', category: 'Cocktails', price: 790 },
  { id: 'cocktail-island-gold', name: 'Island Gold', category: 'Cocktails', price: 780 },
  { id: 'cocktail-strawberry-mojito', name: 'Strawberry Mojito', category: 'Cocktails', price: 710 },
  { id: 'cocktail-blue-lagoon-mojito', name: 'Blue Lagoon Mojito', category: 'Cocktails', price: 720 },
  { id: 'cocktail-kiwi-mojito', name: 'Kiwi Mojito', category: 'Cocktails', price: 710 },
  { id: 'cocktail-mint-mojito', name: 'Mint Mojito', category: 'Cocktails', price: 710 },
  { id: 'cocktail-crimson-mist', name: 'Crimson Mist', category: 'Cocktails', price: 720 },
  { id: 'cocktail-blue-hawaiian-mojito', name: 'Blue Hawaiian Mojito', category: 'Cocktails', price: 750 },

  // --- REFRESHINGLY LEMONADES (Page 14) ---
  { id: 'lemonade-strawberry', name: 'Strawberry', category: 'Refreshingly Lemonades', price: 650 },
  { id: 'lemonade-passion-fruit', name: 'Passion Fruit', category: 'Refreshingly Lemonades', price: 650 },
  { id: 'lemonade-mint', name: 'Mint', category: 'Refreshingly Lemonades', price: 650 },
  { id: 'lemonade-peach', name: 'Peach', category: 'Refreshingly Lemonades', price: 650 },
  { id: 'lemonade-lemon', name: 'Lemon', category: 'Refreshingly Lemonades', price: 650 },
  { id: 'lemonade-rose', name: 'Rose', category: 'Refreshingly Lemonades', price: 670 },

  // --- SMOOTHIES (Page 15) ---
  { id: 'smoothie-peanut-butter-brownie', name: 'Peanut Butter Brownie Shake', category: 'Smoothies', price: 810 },
  { id: 'smoothie-kitkat-shake', name: 'Kitkat Shake', category: 'Smoothies', price: 790 },
  { id: 'smoothie-strawberry-shake', name: 'Strawberry Shake', category: 'Smoothies', price: 790 },
  { id: 'smoothie-protein-shake', name: 'Protien Shake', category: 'Smoothies', price: 790 },
  { id: 'smoothie-strawberry-smoothie', name: 'Strawberry Smoothie', category: 'Smoothies', price: 790 },
  { id: 'smoothie-double-twist', name: 'Double Twist Smoothie', category: 'Smoothies', price: 790 },
  { id: 'smoothie-cookies-cream', name: 'Cookies and Cream Shake', category: 'Smoothies', price: 750 },

  // --- JUICES & BLENDS (Page 15) ---
  { id: 'juice-fresh-seasonal', name: 'Fresh Seasonal Juice', category: 'Juices & Blends', price: 560 },
  { id: 'juice-abc', name: 'ABC Juice', category: 'Juices & Blends', price: 590 },
  { id: 'juice-beetroot-detox', name: 'Beetroot Detox', category: 'Juices & Blends', price: 660 },

  // --- HOT BEVERAGES (Page 15) ---
  { id: 'hot-cappuccino', name: 'Cappuccino', category: 'Hot Beverages', price: 670 },
  { id: 'hot-cafe-latte', name: 'Cafe Latte', category: 'Hot Beverages', price: 670 },
  { id: 'hot-caramel-latte', name: 'Caramel Latte', category: 'Hot Beverages', price: 710 },
  { id: 'hot-chocolate-latte', name: 'Hot Chocolate Latte', category: 'Hot Beverages', price: 730 },
  { id: 'hot-americano', name: 'Americano', category: 'Hot Beverages', price: 670 },
  { id: 'hot-pistachio-coffee', name: 'Pistachio Coffee', category: 'Hot Beverages', price: 850 },
  { id: 'hot-tea', name: 'Tea', category: 'Hot Beverages', price: 290 },
  { id: 'hot-green-tea', name: 'Green Tea', category: 'Hot Beverages', price: 260 },
  {
    id: 'hot-espresso-shot',
    name: 'Espresso Shot',
    category: 'Hot Beverages',
    variations: [
      { label: 'Single', price: 290 },
      { label: 'Double', price: 490 },
    ],
  },

  // --- COLD COFFEES (Page 16) ---
  { id: 'cold-mocha', name: 'Iced Mocha', category: 'Cold Coffees', price: 750 },
  { id: 'cold-cappuccino', name: 'Iced Cappuccino', category: 'Cold Coffees', price: 750 },
  { id: 'cold-matcha', name: 'Iced Matcha', category: 'Cold Coffees', price: 1050 },
  { id: 'cold-vanilla', name: 'Iced Vanilla', category: 'Cold Coffees', price: 760 },
  { id: 'cold-caramel', name: 'Iced Caramel', category: 'Cold Coffees', price: 710 },

  // --- FRAPPE (Page 16) ---
  { id: 'frappe-caramel', name: 'Caramel Frappe', category: 'Frappe', price: 790 },
  { id: 'frappe-vanilla', name: 'Vanilla Frappe', category: 'Frappe', price: 790 },
  { id: 'frappe-mocha', name: 'Mocha Frappe', category: 'Frappe', price: 910 },
  { id: 'frappe-pistachio', name: 'Pistachio Frappe', category: 'Frappe', price: 850 },

  // --- BOBA TEA (Page 16) ---
  { id: 'boba-strawberry', name: 'Strawberry', category: 'Boba Tea', price: 790 },
  { id: 'boba-mango', name: 'Mango', category: 'Boba Tea', price: 790 },
  { id: 'boba-peach', name: 'Peach', category: 'Boba Tea', price: 790 },
  { id: 'boba-passion-fruit', name: 'Passion Fruit', category: 'Boba Tea', price: 810 },
  { id: 'boba-lychee', name: 'Lychee', category: 'Boba Tea', price: 790 },

  // --- ACCOMPANIMENTS (Page 16) ---
  { id: 'acc-soft-drinks', name: 'Soft Drinks', category: 'Accompaniments', price: 215 },
  { id: 'acc-fresh-lime', name: 'Fresh Lime', category: 'Accompaniments', price: 299 },
  { id: 'acc-mineral-water-small', name: 'Mineral Water (Small)', category: 'Accompaniments', price: 130 },
  { id: 'acc-mineral-water-large', name: 'Mineral Water (Large)', category: 'Accompaniments', price: 290 },
  { id: 'acc-red-bull', name: 'Red Bull', category: 'Accompaniments', price: 825 },
  { id: 'acc-club-soda', name: 'Club Soda', category: 'Accompaniments', price: 750 },
];

export const ALL_MENU_ITEMS: MenuItem[] = RAW_MENU_ITEMS.map((item) => ({
  ...item,
  image: item.image || DISH_IMAGES[item.id],
}));

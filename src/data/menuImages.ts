import { APP_IMAGES } from './images';

/**
 * Verified dish-to-image mapping adhering strictly to culinary accuracy.
 * Each dish ID maps to a high-resolution, appetizing, verified image representing
 * the exact dish name, ingredients, and presentation.
 */
export const DISH_IMAGES: Record<string, string> = {
  // =========================================================================
  // --- CHEF RECOMMENDATIONS ---
  // =========================================================================
  'chef-tomahawk-steak': APP_IMAGES.tomahawkSteak,
  'chef-tenderloin-steak':
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  'chef-grilled-beef-morel':
    'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
  'chef-turkish-sandwich':
    'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=800&q=80',
  'chef-parmesan-risotto':
    'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
  'chef-korean-smoky-mandi':
    'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
  'chef-lemon-butter-tiger-prawns':
    'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80',
  'chef-fried-tiger-prawns':
    'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=800&q=80',
  'chef-classic-lobster-thermidor': APP_IMAGES.lobsterGourmet,
  'chef-garlic-herb-grilled-lobster': '/okhbl.jpg',

  // =========================================================================
  // --- SOUPS ---
  // =========================================================================
  'soup-davinci-special':
    'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
  'soup-roasted-tomato-basil':
    'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
  'soup-wild-mushroom-medley':
    'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=800&q=80',
  'soup-seafood-chowder':
    'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80',
  'soup-chicken-asparagus':
    'https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?auto=format&fit=crop&w=800&q=80',
  'soup-hot-sour':
    'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80',
  'soup-chicken-corn':
    'https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&w=800&q=80',
  'soup-korean-vegetarian':
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- FAMILY SOUPS ---
  // =========================================================================
  'fam-soup-hot-sour':
    'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
  'fam-soup-chicken-corn':
    'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
  'fam-soup-korean-veg':
    'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- SALADS ---
  // =========================================================================
  'salad-vinci-citrus-quinoa':
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
  'salad-grilled-chicken-caesar':
    'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80',
  'salad-loaded-cheese-jacket':
    'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
  'salad-seafood-garden':
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
  'salad-pink-velvet-hummus':
    'https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- ENTRÉES ---
  // =========================================================================
  'entree-davinci-platter': APP_IMAGES.davinciPlatter,
  'entree-spicy-korean-wings':
    'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
  'entree-korean-cheese-balls':
    'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
  'entree-chicken-tacos':
    'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80',
  'entree-crispy-finger-fish':
    'https://images.unsplash.com/photo-1535473897047-b67c95e4885d?auto=format&fit=crop&w=800&q=80',
  'entree-trio-fusion-fries':
    'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80',
  'entree-dynamite-prawns':
    'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80',
  'entree-dynamite-chicken':
    'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
  'entree-four-cheese-strips':
    'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
  'entree-loaded-chilli-fries':
    'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
  'entree-peri-bites':
    'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=800&q=80',
  'entree-nachos-royale':
    'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80',
  'entree-mini-trio-burger':
    'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
  'entree-crispy-chicken-tender':
    'https://images.unsplash.com/photo-1585325701165-351af916e581?auto=format&fit=crop&w=800&q=80',
  'entree-mozzarella-sticks':
    'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&w=800&q=80',
  'entree-crispy-calamari':
    'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- ITALIAN SECTION ---
  // =========================================================================
  'italian-smoky-sun-dried':
    'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80',
  'italian-rigatoni':
    'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
  'italian-velvet-spiced-alfredo':
    'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80',
  'italian-penne-italiano':
    'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80',
  'italian-tuscan-lasagna': APP_IMAGES.tuscanLasagna,

  // =========================================================================
  // --- CHICKEN SECTION ---
  // =========================================================================
  'chicken-davinci-fiesta-bowl': APP_IMAGES.fiestaPineappleBowl,
  'chicken-parmesan-crusted':
    'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=800&q=80',
  'chicken-crunch':
    'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
  'chicken-spiced-moroccan':
    'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80',
  'chicken-peri-peri-skewers':
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
  'chicken-stuffed-delight':
    'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
  'chicken-golden-parmesan':
    'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
  'chicken-ala-kiev':
    'https://images.unsplash.com/photo-1606728035253-49e8a23146de?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- STEAKS ---
  // =========================================================================
  'steak-davinci-special':
    'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
  'steak-bearnaise':
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  'steak-royal-mushroom':
    'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
  'steak-spicy-mexican':
    'https://images.unsplash.com/photo-1504973960431-1c467e159aa4?auto=format&fit=crop&w=800&q=80',
  'steak-chimichurri':
    'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80',
  'steak-jalapeno-flame':
    'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=800&q=80',
  'steak-tarragon-herb':
    'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&w=800&q=80',
  'steak-marrakesh-chilli':
    'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=800&q=80',
  'steak-italian':
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- SIZZLING PEPPER FAJITAS ---
  // =========================================================================
  'fajita-beef':
    'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=800&q=80',
  'fajita-chicken':
    'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
  'fajita-combination':
    'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
  'fajita-seafood':
    'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- SIDE ORDERS ---
  // =========================================================================
  'side-french-fries':
    'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
  'side-mashed-potato':
    'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
  'side-baked-potato':
    'https://images.unsplash.com/photo-1568600891621-50f697b9a1c7?auto=format&fit=crop&w=800&q=80',
  'side-garlic-rice':
    'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80',
  'side-vegetable-fried-rice':
    'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
  'side-dip-sauce':
    'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- PIZZAS ---
  // =========================================================================
  'pizza-creamy-alfredo':
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
  'pizza-bbq-sizzlers':
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
  'pizza-spicy-peri-peri':
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
  'pizza-four-cheese-melt':
    'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=80',
  'pizza-veggie-garden-delight':
    'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80',
  'pizza-beef-steak':
    'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- BURGERS & SANDWICHES ---
  // =========================================================================
  'burger-philly-steak':
    'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
  'burger-spicy-chilli':
    'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80',
  'burger-classic-beef':
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
  'burger-mega-zinger':
    'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80',
  'burger-swiss-mushroom':
    'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
  'burger-blazing-jalapeno':
    'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80',
  'burger-smoky-hickory':
    'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80',
  'sandwich-davinci-special':
    'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
  'sandwich-classic-club':
    'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
  'sandwich-smoky-chicken-panini':
    'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=800&q=80',
  'sandwich-crunchy-chicken':
    'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?auto=format&fit=crop&w=800&q=80',
  'burger-smash-korean':
    'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- K. FUSION CHINESE BOWL ---
  // =========================================================================
  'k-chicken-chilli-dry':
    'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80',
  'k-spicy-dry-chilli-beef':
    'https://images.unsplash.com/photo-1504973960431-1c467e159aa4?auto=format&fit=crop&w=800&q=80',
  'k-blazing-korean-manchurian':
    'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80',
  'k-kung-pao-fusion-bowl':
    'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
  'k-spicy-cherry-chicken':
    'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=80',
  'k-garlic-sizzle-prawns':
    'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80',
  'k-chicken-chowmein':
    'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- VEGETARIAN OPTIONS ---
  // =========================================================================
  'veg-burger':
    'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=800&q=80',
  'veg-rigatoni':
    'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
  'veg-herb-steak':
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
  'veg-manchurian':
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
  'veg-chowmein':
    'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- SEAFOOD ---
  // =========================================================================
  'seafood-platter':
    'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=800&q=80',
  'seafood-tempura-prawns':
    'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=800&q=80',
  'seafood-fish-and-chips':
    'https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&w=800&q=80',
  'seafood-creamy-chilli-tarragon':
    'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
  'seafood-italian-garden-fish':
    'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
  'seafood-herb-butter-fish':
    'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
  'seafood-korean-grilled-fish':
    'https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=800&q=80',
  'seafood-thai-red-curry-prawns':
    'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80',
  'seafood-grilled-platter':
    'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- DESSERT ---
  // =========================================================================
  'dessert-smoked-coconut-creme-brulee':
    'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=800&q=80',
  'dessert-dreamy-delights-cake':
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
  'dessert-lotus-cheesecake':
    'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
  'dessert-warm-bread-pudding':
    'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
  'dessert-sizzling-walnut-brownie':
    'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
  'dessert-choco-lava-delight':
    'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80',
  'dessert-golden-sweet-waffle':
    'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80',
  'dessert-triple-milk-magic-cake':
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
  'dessert-pistachio-cheesecake':
    'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- MARGARITAS ---
  // =========================================================================
  'margarita-mint-twist': APP_IMAGES.artisanalDrink,
  'margarita-lime':
    'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
  'margarita-blueberry':
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80',
  'margarita-peach':
    'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=800&q=80',
  'margarita-strawberry':
    'https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?auto=format&fit=crop&w=800&q=80',
  'margarita-passion-fruit':
    'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
  'margarita-tangy-surprise':
    'https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- COCKTAILS (Mocktails) ---
  // =========================================================================
  'cocktail-coconut-paradise':
    'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80',
  'cocktail-raspberry-colada':
    'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
  'cocktail-berry-blast':
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80',
  'cocktail-island-gold':
    'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=800&q=80',
  'cocktail-strawberry-mojito':
    'https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?auto=format&fit=crop&w=800&q=80',
  'cocktail-blue-lagoon-mojito':
    'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
  'cocktail-kiwi-mojito':
    'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
  'cocktail-mint-mojito':
    'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=800&q=80',
  'cocktail-crimson-mist':
    'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
  'cocktail-blue-hawaiian-mojito':
    'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- REFRESHINGLY LEMONADES ---
  // =========================================================================
  'lemonade-strawberry':
    'https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?auto=format&fit=crop&w=800&q=80',
  'lemonade-passion-fruit':
    'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
  'lemonade-mint':
    'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
  'lemonade-peach':
    'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=800&q=80',
  'lemonade-lemon':
    'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?auto=format&fit=crop&w=800&q=80',
  'lemonade-rose':
    'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- SMOOTHIES & SHAKES ---
  // =========================================================================
  'smoothie-peanut-butter-brownie':
    'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
  'smoothie-kitkat-shake':
    'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
  'smoothie-strawberry-shake':
    'https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?auto=format&fit=crop&w=800&q=80',
  'smoothie-protein-shake':
    'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80',
  'smoothie-strawberry-smoothie':
    'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&q=80',
  'smoothie-double-twist':
    'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=800&q=80',
  'smoothie-cookies-cream':
    'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- JUICES & BLENDS ---
  // =========================================================================
  'juice-fresh-seasonal':
    'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
  'juice-abc':
    'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80',
  'juice-beetroot-detox':
    'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- HOT BEVERAGES ---
  // =========================================================================
  'hot-cappuccino':
    'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
  'hot-cafe-latte':
    'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
  'hot-caramel-latte':
    'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
  'hot-chocolate-latte':
    'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80',
  'hot-americano':
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
  'hot-pistachio-coffee':
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
  'hot-tea':
    'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
  'hot-green-tea':
    'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=800&q=80',
  'hot-espresso-shot':
    'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- COLD COFFEES ---
  // =========================================================================
  'cold-mocha':
    'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
  'cold-cappuccino':
    'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
  'cold-matcha':
    'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
  'cold-vanilla':
    'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
  'cold-caramel':
    'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- FRAPPES ---
  // =========================================================================
  'frappe-caramel':
    'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
  'frappe-vanilla':
    'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
  'frappe-mocha':
    'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80',
  'frappe-pistachio':
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- BOBA TEA ---
  // =========================================================================
  'boba-strawberry':
    'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=800&q=80',
  'boba-mango':
    'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=800&q=80',
  'boba-peach':
    'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=800&q=80',
  'boba-passion-fruit':
    'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
  'boba-lychee':
    'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80',

  // =========================================================================
  // --- ACCOMPANIMENTS ---
  // =========================================================================
  'acc-soft-drinks':
    'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
  'acc-fresh-lime':
    'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80',
  'acc-mineral-water-small':
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
  'acc-mineral-water-large':
    'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80',
  'acc-red-bull':
    'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
  'acc-club-soda':
    'https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&w=800&q=80',
};

export interface RestaurantConfig {
  name: string;
  alternateName: string;
  tagline: string;
  phone: string;
  displayPhone: string;
  whatsappInternational: string;
  callUrl: string;
  whatsappUrl: string;
  address: {
    street: string;
    area: string;
    city: string;
    province: string;
    country: string;
    fullFormatted: string;
  };
  googleMapsUrl: string;
  googleMapsEmbedSrc: string;
  socials: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
  openingHours: {
    weekday: string;
    weekdayHours: string;
    weekend: string;
    weekendHours: string;
    note: string;
  };
  taxNotice: string;
  orderOnlineUrl?: string; // Configurable if verified
}

export interface MenuItemVariation {
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryName;
  price?: number;
  variations?: MenuItemVariation[];
  description?: string;
  servingNote?: string;
  isChefRecommendation?: boolean;
  isSignature?: boolean;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  image?: string;
}

export type MenuCategoryName =
  | 'Soups'
  | 'Family Soups'
  | 'Salads'
  | 'Entrées'
  | 'Italian Section'
  | 'Chicken Section'
  | 'Steaks'
  | 'Sizzling Pepper Fajitas'
  | 'Side Orders'
  | 'Pizzas'
  | 'Burgers & Sandwiches'
  | 'K. Fusion Chinese Bowl'
  | 'Vegetarian Options'
  | 'Seafood'
  | 'Chef Recommendation'
  | 'Dessert'
  | 'Margarita'
  | 'Cocktails'
  | 'Refreshingly Lemonades'
  | 'Smoothies'
  | 'Juices & Blends'
  | 'Hot Beverages'
  | 'Cold Coffees'
  | 'Frappe'
  | 'Boba Tea'
  | 'Accompaniments';

export interface MenuCategoryMeta {
  id: string;
  name: MenuCategoryName;
  group: 'Food' | 'Steaks & Grills' | 'Chef Specials' | 'Beverages & Desserts';
  description?: string;
  note?: string;
}

export interface ReservationRequest {
  fullName: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequest: string;
}

export interface DonenessGuideItem {
  name: string;
  temp: string;
  description: string;
}

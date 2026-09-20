import { RestaurantConfig, DonenessGuideItem } from '../types';

export const RESTAURANT_DATA: RestaurantConfig = {
  name: 'DaVinci Grill',
  alternateName: 'DaVinci Grill & Restaurant',
  tagline: 'The Art of the Flame',
  phone: '03023009005',
  displayPhone: '0302-3009-005',
  whatsappInternational: '923023009005',
  callUrl: 'tel:+923023009005',
  whatsappUrl: 'https://wa.me/923023009005',
  address: {
    street: 'Plot No 7-a, Main Autobhan Unit No: 3',
    area: 'Latifabad',
    city: 'Hyderabad',
    province: 'Sindh',
    country: 'Pakistan',
    fullFormatted: 'Plot No 7-a, Main Autobhan Unit No: 3, Latifabad, Hyderabad, Sindh, Pakistan',
  },
  googleMapsUrl: 'https://maps.app.goo.gl/GwLtMZtsNkSBZ7zq6',
  googleMapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57677.34254963369!2d68.27438943666269!3d25.376882400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c713eaa42e7db%3A0xd6e69f05c9700264!2sDa%20Vinci%20Grill!5e0!3m2!1sen!2s!4v1789902673657!5m2!1sen!2s',
  socials: {
    instagram: 'https://www.instagram.com/davincigrill.pk/',
    facebook: 'https://www.facebook.com/davincigrill.pk/',
    tiktok: 'https://www.tiktok.com/@davincigrill.pk',
  },
  openingHours: {
    weekday: 'Monday – Thursday',
    weekdayHours: '12:30 PM – 12:30 AM',
    weekend: 'Friday – Sunday',
    weekendHours: '12:30 PM – 1:00 AM',
    note: 'Operating hours may vary during public holidays and Ramadan. Please contact the restaurant for special dining reservations.',
  },
  taxNotice: '15% TAX WILL BE APPLIED ON ALL ABOVE PRICES',
  // Kept undefined/null until verified link is provided by owner
  orderOnlineUrl: undefined,
};

export const STEAK_DONENESS_GUIDE: DonenessGuideItem[] = [
  {
    name: 'Rare',
    temp: '125°F',
    description: 'Center is bright red. Pinkish towards the outside.',
  },
  {
    name: 'Medium-Rare',
    temp: '135°F',
    description: 'Center is very pink. Slightly brown towards the outside.',
  },
  {
    name: 'Medium',
    temp: '145°F',
    description: 'Center is light pink. Outer portion is brown.',
  },
  {
    name: 'Medium-Well',
    temp: '155°F',
    description: 'Center is very juicy and brown.',
  },
  {
    name: 'Well Done',
    temp: '165°F',
    description: 'Uniformly brown throughout.',
  },
];

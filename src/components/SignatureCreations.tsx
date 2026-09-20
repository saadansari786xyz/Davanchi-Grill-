import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { APP_IMAGES } from '../data/images';
import { MenuFoodImage } from './MenuFoodImage';

interface SignatureCreationsProps {
  onSelectMenuItem: (itemTitle: string) => void;
  onExploreFullMenu: () => void;
}

interface SignatureCard {
  id: string;
  name: string;
  category: string;
  priceDisplay: string;
  image: string;
  description: string;
  badge: string;
}

export const SignatureCreations: React.FC<SignatureCreationsProps> = ({
  onSelectMenuItem,
  onExploreFullMenu,
}) => {
  const signatures: SignatureCard[] = [
    {
      id: 'chicken-davinci-fiesta-bowl',
      name: 'DaVinci Fiesta Pineapple Bowl',
      category: 'Chicken Section',
      priceDisplay: '2,490/-',
      image: APP_IMAGES.fiestaPineappleBowl,
      badge: 'House Exclusive',
      description:
        'Carved half pineapple brimming with wok-seared marinated chicken cubes, sweet pineapple, capsicum, and savory glaze over fragrant rice.',
    },
    {
      id: 'chef-tomahawk-steak',
      name: 'Tomahawk Steak',
      category: 'Chef Recommendation',
      priceDisplay: '3,450/-',
      image: APP_IMAGES.tomahawkSteak,
      badge: 'Chef Masterpiece',
      description:
        'A magnificent long-bone prime cut, char-seared over glowing embers for a caramelized crust and tender center.',
    },
    {
      id: 'chef-classic-lobster-thermidor',
      name: 'Classic Lobster Thermidor',
      category: 'Chef Recommendation',
      priceDisplay: '6,200/-',
      image: APP_IMAGES.lobsterGourmet,
      badge: 'Grand Oceanic',
      description:
        'Whole lobster baked with rich velouté sauce, parmesan gratin, aromatic herbs, and tiger prawn accompaniments.',
    },
    {
      id: 'italian-tuscan-lasagna',
      name: 'Tuscan Chicken Lasagna',
      category: 'Italian Section',
      priceDisplay: '1,500/-',
      image: APP_IMAGES.tuscanLasagna,
      badge: 'Italian Classic',
      description:
        'Layers of tender pasta sheets, savory simmered chicken ragù, velvety béchamel, and melted golden mozzarella.',
    },
    {
      id: 'entree-davinci-platter',
      name: 'DaVinci Platter',
      category: 'Entrées',
      priceDisplay: '1,670/-',
      image: APP_IMAGES.davinciPlatter,
      badge: 'Signature Sharing',
      description:
        'A grand banquet appetizer platter of crispy finger fish, Korean wings, dynamite chicken bites, mozzarella sticks, and artisan dips.',
    },
    {
      id: 'steak-davinci-special',
      name: 'DaVinci Special Steak',
      category: 'Steaks',
      priceDisplay: 'Beef 2,110/- • Chicken 1,560/-',
      image: APP_IMAGES.heroFlame,
      badge: 'House Flame Signature',
      description:
        'The restaurant’s crowning flame-charred steak served with chef specialty secret demi-glace and roasted accompaniments.',
    },
  ];

  return (
    <section
      id="signature-creations"
      className="py-24 sm:py-32 bg-[#121210] relative overflow-hidden border-b border-[#2a2924]"
      aria-label="Signature Creations"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-champagne mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] font-medium">
                Culinary Highlights
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-[0.14em] font-medium text-ivory">
              SIGNATURE CREATIONS
            </h2>
            <p className="font-sans text-ivory-muted text-sm sm:text-base max-w-xl mt-3 font-light leading-relaxed">
              Dishes embodying the spirit of DaVinci Grill: intense wood-fire char, prime imported cuts, and Mediterranean-fusion flavor balances.
            </p>
          </div>

          <button
            onClick={onExploreFullMenu}
            id="signature-view-full-menu-btn"
            type="button"
            className="self-start md:self-auto px-6 py-3 border border-champagne/40 hover:border-champagne text-champagne hover:bg-champagne hover:text-[#0c0c0b] text-xs font-sans uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Complete Menu</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6-Grid Signatures */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {signatures.map((item) => (
            <div
              key={item.id}
              id={`signature-card-${item.id}`}
              onClick={() => onSelectMenuItem(item.name)}
              className="group bg-[#181815] border border-[#2a2924] hover:border-champagne/60 rounded-sm overflow-hidden transition-all duration-300 flex flex-col cursor-pointer hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Image Container with Luxury Badge */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#0c0c0b]">
                <MenuFoodImage
                  src={item.image}
                  alt={item.name}
                  category={item.category}
                  containerClassName="w-full h-full"
                />

                <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                  <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-sans font-medium bg-[#0c0c0b]/85 border border-champagne/40 text-champagne rounded-sm backdrop-blur-sm shadow-md">
                    {item.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 z-10 text-[11px] text-ivory/90 group-hover:text-champagne transition-colors flex items-center gap-1 font-sans pointer-events-none">
                  <span>Explore in Menu</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Text Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-ivory-muted font-sans">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-ivory mt-1 group-hover:text-champagne-light transition-colors font-medium">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory-muted mt-2 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mt-6 pt-4 border-t border-[#2a2924] flex items-center justify-between">
                  <span className="text-[11px] text-ivory-muted uppercase tracking-wider">
                    Menu Price
                  </span>
                  <span className="font-serif text-lg text-champagne font-medium">
                    PKR {item.priceDisplay}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

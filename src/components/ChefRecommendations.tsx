import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Crown, ArrowUpRight } from 'lucide-react';
import { DISH_IMAGES } from '../data/menuImages';
import { MenuFoodImage } from './MenuFoodImage';

interface ChefRecommendationsProps {
  onSelectDish: (dishName: string) => void;
  onExploreMenu: () => void;
}

interface ChefPick {
  id: string;
  name: string;
  priceDisplay: string;
  category: string;
  note: string;
  tag: string;
}

export const ChefRecommendations: React.FC<ChefRecommendationsProps> = ({
  onSelectDish,
  onExploreMenu,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Exact items verified from Page 12 "CHEF RECOMMENDATION" of the PDF
  const items: ChefPick[] = [
    {
      id: 'chef-classic-lobster-thermidor',
      name: 'Classic Lobster Thermidor',
      priceDisplay: '6,200/-',
      category: 'Seafood Masterpiece',
      note: 'Whole lobster prepared in traditional Thermidor velouté, gratinéed with fine cheese.',
      tag: 'Grand Prestige',
    },
    {
      id: 'chef-garlic-herb-grilled-lobster',
      name: 'Garlic Herb Grilled Lobster',
      priceDisplay: '5,900/-',
      category: 'Flame-Charred Seafood',
      note: 'Split lobster tail basted with crushed garlic, churned butter, and fragrant fresh herbs over high flame.',
      tag: 'Charred Elegance',
    },
    {
      id: 'chef-tomahawk-steak',
      name: 'Tomahawk Steak',
      priceDisplay: '3,450/-',
      category: 'Prime Cut',
      note: 'Massive bone-in rib steak, seasoned with sea salt and seared on open fire to lock in rich flavors.',
      tag: 'Centerpiece Cut',
    },
    {
      id: 'chef-tenderloin-steak',
      name: 'Tenderloin Steak',
      priceDisplay: '3,450/-',
      category: 'Prime Cut',
      note: 'The most tender cut, exceptionally lean yet buttery, paired with signature grill accompaniments.',
      tag: 'Gourmet Classic',
    },
    {
      id: 'chef-korean-smoky-mandi',
      name: 'Korean Smoky Mandi',
      priceDisplay: 'Mutton 3,780/- • Chicken 2,250/-',
      category: 'Smoky Rice Specialty',
      note: 'Aromatic fragrant Mandi basmati infused with deep smoke and distinctive Korean culinary accents.',
      tag: 'House Fusion',
    },
    {
      id: 'chef-lemon-butter-tiger-prawns',
      name: 'Lemon Butter Tiger Prawns',
      priceDisplay: '2,800/-',
      category: 'Crustacean Delicacy',
      note: 'Jumbo tiger prawns sautéed with clarified butter, fresh lemon reduction, and cracked pepper.',
      tag: 'Oceanic Pride',
    },
    {
      id: 'chef-fried-tiger-prawns',
      name: 'Fried Tiger Prawns',
      priceDisplay: '2,800/-',
      category: 'Crustacean Delicacy',
      note: 'Golden crisp batter encasing succulent whole tiger prawns served with house dip sauce.',
      tag: 'Crisp Seafood',
    },
    {
      id: 'chef-grilled-beef-morel',
      name: 'Grilled Beef Morel',
      priceDisplay: '2,450/-',
      category: 'Wild Mushroom Steak',
      note: 'Char-grilled beef medallions dressed with an earthy, velvety sauce of wild morel mushrooms.',
      tag: 'Forest & Flame',
    },
    {
      id: 'chef-parmesan-risotto',
      name: 'Parmesan Risotto',
      priceDisplay: '1,890/-',
      category: 'Italian Specialty',
      note: 'Slow-simmered arborio rice folded with aged parmesan, cream, and fine herbs.',
      tag: 'Artisan Comfort',
    },
    {
      id: 'chef-turkish-sandwich',
      name: 'Turkish Sandwich',
      priceDisplay: '1,510/-',
      category: 'Gourmet Handheld',
      note: 'Spiced marinated fillings tucked into artisanal bread, served with fries and fresh coleslaw.',
      tag: 'Street Craft',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section
      id="chef-recommendations"
      className="py-24 sm:py-32 bg-[#0c0c0b] relative overflow-hidden border-b border-[#2a2924]"
      aria-label="Chef Recommendations"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-champagne mb-3">
              <Crown className="w-3.5 h-3.5" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] font-medium">
                Menu Page 12 Selection
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-[0.14em] font-medium text-ivory">
              CHEF'S RECOMMENDATIONS
            </h2>
            <p className="font-sans text-ivory-muted text-sm sm:text-base max-w-xl mt-3 font-light leading-relaxed">
              Verified specialty creations from the official DaVinci Grill menu. Premium seafood, prime steaks, and distinctive fusion dishes.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              id="chef-carousel-prev-btn"
              type="button"
              className="w-11 h-11 rounded-sm border border-[#2a2924] bg-[#181815] text-ivory hover:text-champagne hover:border-champagne flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous recommendation"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              id="chef-carousel-next-btn"
              type="button"
              className="w-11 h-11 rounded-sm border border-[#2a2924] bg-[#181815] text-ivory hover:text-champagne hover:border-champagne flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next recommendation"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel / Multi-card Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % items.length;
            const item = items[index];
            const dishImage = DISH_IMAGES[item.id];

            return (
              <div
                key={`${item.id}-${offset}`}
                id={`chef-item-card-${item.id}`}
                onClick={() => onSelectDish(item.name)}
                className="bg-[#181815] border border-[#2a2924] hover:border-champagne/60 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group cursor-pointer"
              >
                <div>
                  {/* Food Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#121210]">
                    <MenuFoodImage
                      src={dishImage}
                      alt={item.name}
                      category={item.category}
                      containerClassName="w-full h-full"
                    />

                    <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                      <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-sans font-medium bg-[#0c0c0b]/85 border border-champagne/40 text-champagne rounded-sm backdrop-blur-sm shadow-md">
                        {item.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 z-10 text-[11px] text-ivory/90 group-hover:text-champagne transition-colors flex items-center gap-1 font-sans pointer-events-none">
                      <span>View in Menu</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[11px] text-ivory-muted uppercase tracking-wider font-sans block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-2xl text-ivory group-hover:text-champagne-light transition-colors font-medium">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-ivory-muted mt-2 font-light leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-[#2a2924] flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-ivory-muted">
                      Menu Price
                    </span>
                    <span className="font-serif text-xl text-champagne font-medium">
                      PKR {item.priceDisplay}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-ivory/70 group-hover:text-champagne transition-colors font-sans">
                    <span>Order / Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Progress Dots & Explore All Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#1f1f1d]">
          <div className="flex items-center gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-6 bg-champagne' : 'w-1.5 bg-[#2a2924] hover:bg-champagne/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={onExploreMenu}
            id="chef-view-full-menu-cta"
            type="button"
            className="text-xs uppercase tracking-[0.2em] text-champagne hover:text-champagne-light flex items-center gap-2 cursor-pointer font-sans"
          >
            <span>See All 10 Chef Specialties in Menu</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

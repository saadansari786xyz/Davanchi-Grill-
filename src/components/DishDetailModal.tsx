import React, { useEffect } from 'react';
import { X, Check, Plus, Flame, Sparkles, Utensils } from 'lucide-react';
import { MenuItem } from '../types';
import { MenuFoodImage } from './MenuFoodImage';

interface DishDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  isSelected?: boolean;
  onToggleSelect?: (dishName: string) => void;
  onBookTable?: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  item,
  onClose,
  isSelected = false,
  onToggleSelect,
  onBookTable,
}) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#000000]/85 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#141412] border border-champagne/40 rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#0c0c0b]/80 hover:bg-[#0c0c0b] text-ivory hover:text-champagne border border-[#2a2924] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close dish preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto scrollbar-none flex-1">
          {/* Dish Image */}
          <div className="w-full h-64 sm:h-80 relative">
            <MenuFoodImage
              src={item.image}
              alt={`${item.name} at DaVinci Grill`}
              category={item.category}
              containerClassName="w-full h-full"
              className="w-full h-full object-cover"
              priority={true}
            />

            {/* Badges Overlay */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2 pointer-events-none z-10">
              {item.isSignature && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] uppercase tracking-wider bg-champagne text-[#0c0c0b] font-bold rounded-xs font-sans shadow-md">
                  <Sparkles className="w-3 h-3" />
                  <span>Signature Dish</span>
                </span>
              )}
              {item.isChefRecommendation && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] uppercase tracking-wider bg-amber-500 text-[#0c0c0b] font-bold rounded-xs font-sans shadow-md">
                  <Flame className="w-3 h-3" />
                  <span>Chef's Choice</span>
                </span>
              )}
              {item.isSpicy && (
                <span className="px-2 py-1 text-xs bg-red-950/80 border border-red-500/40 text-red-300 rounded-xs shadow-md">
                  🌶️ Spicy
                </span>
              )}
              {item.isVegetarian && (
                <span className="px-2 py-1 text-xs bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 rounded-xs shadow-md">
                  🌿 Vegetarian
                </span>
              )}
            </div>
          </div>

          {/* Dish Details Content */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-[#2a2924]">
              <div>
                <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-champagne block mb-1">
                  {item.category}
                </span>
                <h3
                  id="dish-modal-title"
                  className="font-serif text-2xl sm:text-3xl text-ivory font-normal tracking-wide"
                >
                  {item.name}
                </h3>
                {item.servingNote && (
                  <p className="text-xs italic text-champagne/90 font-serif mt-1">
                    {item.servingNote}
                  </p>
                )}
              </div>

              {/* Price display */}
              {item.price !== undefined && !item.variations && (
                <div className="sm:text-right shrink-0">
                  <span className="font-serif text-2xl sm:text-3xl text-champagne font-medium block">
                    PKR {item.price}/-
                  </span>
                  <span className="text-[10px] text-ivory-muted font-sans uppercase tracking-wider">
                    Exclusive of 16% SST
                  </span>
                </div>
              )}
            </div>

            {/* Variations if applicable */}
            {item.variations && (
              <div className="py-4 border-b border-[#2a2924]">
                <span className="text-[11px] uppercase tracking-wider text-ivory-muted font-sans block mb-2">
                  Select Cut / Size Option:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {item.variations.map((v) => (
                    <div
                      key={v.label}
                      className="p-3 bg-[#1a1915] border border-champagne/30 rounded-xs flex items-center justify-between"
                    >
                      <span className="text-sm text-ivory font-medium font-sans">
                        {v.label}
                      </span>
                      <span className="font-serif text-base text-champagne font-semibold">
                        PKR {v.price}/-
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="py-4">
              <h4 className="text-xs uppercase tracking-widest text-ivory-muted font-sans mb-2">
                Preparation & Profile
              </h4>
              <p className="text-sm text-ivory-muted font-light leading-relaxed">
                {item.description ||
                  `Artisan culinary preparation by DaVinci Grill culinary brigade, crafted fresh upon order using premium seasonal cuts, imported seasonings, and precise temperature discipline.`}
              </p>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-[#2a2924] flex flex-col sm:flex-row items-center justify-between gap-4">
              {onToggleSelect && (
                <button
                  type="button"
                  onClick={() => onToggleSelect(item.name)}
                  className={`w-full sm:w-auto px-5 py-2.5 rounded-sm text-xs font-sans uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-champagne text-[#0c0c0b]'
                      : 'bg-[#1e1e1a] text-champagne border border-champagne/40 hover:bg-[#252520]'
                  }`}
                >
                  {isSelected ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Table Request</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Add to Table Request</span>
                    </>
                  )}
                </button>
              )}

              {onBookTable && (
                <button
                  type="button"
                  onClick={() => {
                    if (onToggleSelect && !isSelected) {
                      onToggleSelect(item.name);
                    }
                    onClose();
                    onBookTable();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 bg-champagne hover:bg-champagne-light text-[#0c0c0b] rounded-sm text-xs font-sans uppercase tracking-wider font-semibold transition-colors cursor-pointer"
                >
                  Reserve Table for This Dish
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

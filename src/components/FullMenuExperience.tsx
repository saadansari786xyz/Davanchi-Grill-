import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Search,
  X,
  Flame,
  Sparkles,
  Check,
  Plus,
  Utensils,
  LayoutGrid,
  List,
  Eye,
} from 'lucide-react';
import { ALL_MENU_ITEMS, MENU_CATEGORIES } from '../data/menuData';
import { MenuItem, MenuCategoryName } from '../types';
import { RESTAURANT_DATA } from '../data/restaurantData';
import { MenuFoodImage } from './MenuFoodImage';
import { DishDetailModal } from './DishDetailModal';

interface FullMenuExperienceProps {
  initialSearchQuery?: string;
  selectedDishesForReservation?: string[];
  onToggleDishSelection?: (dishName: string) => void;
  onOpenReservation?: () => void;
}

export const FullMenuExperience: React.FC<FullMenuExperienceProps> = ({
  initialSearchQuery = '',
  selectedDishesForReservation = [],
  onToggleDishSelection,
  onOpenReservation,
}) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeFilter, setActiveFilter] = useState<'all' | 'signature' | 'chef' | 'spicy' | 'veg'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedDishForModal, setSelectedDishForModal] = useState<MenuItem | null>(null);
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialSearchQuery) {
      setSearchQuery(initialSearchQuery);
      setSelectedCategory('all');
    }
  }, [initialSearchQuery]);

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return ALL_MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all') {
        const catMeta = MENU_CATEGORIES.find((c) => c.id === selectedCategory);
        if (catMeta && item.category !== catMeta.name) {
          return false;
        }
      }

      // Feature Filter (dietary / highlight)
      if (activeFilter === 'signature' && !item.isSignature) return false;
      if (activeFilter === 'chef' && !item.isChefRecommendation) return false;
      if (activeFilter === 'spicy' && !item.isSpicy) return false;
      if (activeFilter === 'veg' && !item.isVegetarian) return false;

      // Text search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesCat = item.category.toLowerCase().includes(query);
        const matchesDesc = item.description?.toLowerCase().includes(query);
        const matchesServing = item.servingNote?.toLowerCase().includes(query);
        if (!matchesName && !matchesCat && !matchesDesc && !matchesServing) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, activeFilter, searchQuery]);

  // Group items by category for clean sectioning
  const groupedItems = useMemo(() => {
    const groups: { [key in MenuCategoryName]?: MenuItem[] } = {};
    filteredItems.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category]!.push(item);
    });
    return groups;
  }, [filteredItems]);

  const activeCategories = useMemo(() => {
    return MENU_CATEGORIES.filter((cat) => groupedItems[cat.name]?.length);
  }, [groupedItems]);

  return (
    <section
      id="menu"
      className="py-24 sm:py-32 bg-[#0c0c0b] relative min-h-screen text-ivory border-b border-[#2a2924]"
      aria-label="Full Restaurant Menu"
    >
      {/* Dish Detail Inspection Modal */}
      <DishDetailModal
        item={selectedDishForModal}
        onClose={() => setSelectedDishForModal(null)}
        isSelected={
          selectedDishForModal
            ? selectedDishesForReservation.includes(selectedDishForModal.name)
            : false
        }
        onToggleSelect={onToggleDishSelection}
        onBookTable={onOpenReservation}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-champagne mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-medium">
              Verified Culinary Experience
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl tracking-[0.12em] font-medium text-ivory">
            THE MENU
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-champagne mt-2">
            The Art of the Flame
          </p>
          <p className="font-sans text-xs sm:text-sm text-ivory-muted max-w-xl mx-auto mt-3 font-light leading-relaxed">
            Every dish prepared with curated ingredients, signature marinades, and high-temperature flame mastery.
          </p>

          {/* Prominent Verified Tax Notice */}
          <div className="mt-5 inline-block px-4 py-2 bg-[#181815] border border-champagne/30 rounded-sm">
            <span className="font-sans text-[11px] sm:text-xs tracking-wider uppercase text-champagne font-medium">
              ★ {RESTAURANT_DATA.taxNotice} ★
            </span>
          </div>
        </div>

        {/* Search, Filters, and View Switcher Toolbar */}
        <div className="sticky top-16 z-30 bg-[#0c0c0b]/95 backdrop-blur-md py-4 border-y border-[#2a2924] mb-10">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full lg:max-w-md">
              <Search className="w-4 h-4 text-champagne absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                id="menu-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search steaks, pasta, seafood, drinks, desserts..."
                className="w-full bg-[#181815] border border-[#2a2924] focus:border-champagne pl-10 pr-9 py-2.5 rounded-sm text-xs sm:text-sm text-ivory placeholder:text-ivory-muted/60 focus:outline-none transition-colors"
                aria-label="Search menu items"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-ivory-muted hover:text-ivory"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Characteristic Filters & View Toggle */}
            <div className="flex items-center justify-between lg:justify-end w-full lg:w-auto gap-2 flex-wrap sm:flex-nowrap">
              {/* Characteristic Filters */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
                {[
                  { id: 'all', label: 'All Items' },
                  { id: 'signature', label: 'Signatures' },
                  { id: 'chef', label: "Chef's Picks" },
                  { id: 'spicy', label: 'Spicy 🌶️' },
                  { id: 'veg', label: 'Vegetarian 🌿' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveFilter(f.id as any)}
                    type="button"
                    id={`filter-pill-${f.id}`}
                    className={`px-3 py-1.5 text-[11px] sm:text-xs font-sans uppercase tracking-wider rounded-sm shrink-0 transition-colors cursor-pointer ${
                      activeFilter === f.id
                        ? 'bg-champagne text-[#0c0c0b] font-semibold'
                        : 'bg-[#181815] text-ivory-muted hover:text-ivory border border-[#2a2924]'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* View Mode Switcher */}
              <div className="hidden sm:flex items-center bg-[#181815] border border-[#2a2924] rounded-sm p-0.5 shrink-0 ml-2">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-xs transition-colors cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-champagne text-[#0c0c0b]'
                      : 'text-ivory-muted hover:text-ivory'
                  }`}
                  title="Visual Cards View"
                  aria-label="Visual Cards View"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-xs transition-colors cursor-pointer ${
                    viewMode === 'list'
                      ? 'bg-champagne text-[#0c0c0b]'
                      : 'text-ivory-muted hover:text-ivory'
                  }`}
                  title="Compact List View"
                  aria-label="Compact List View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Horizontal Scrolling Tabs */}
          <div
            ref={categoryScrollRef}
            className="flex items-center gap-2 overflow-x-auto pt-3 mt-3 border-t border-[#1f1f1d] scrollbar-none"
          >
            <button
              onClick={() => setSelectedCategory('all')}
              type="button"
              id="cat-tab-all"
              className={`px-3.5 py-1.5 text-[11px] uppercase tracking-wider rounded-sm shrink-0 transition-all font-sans cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#2a2924] text-champagne border border-champagne/40 font-medium'
                  : 'text-ivory-muted hover:text-ivory bg-[#121210]'
              }`}
            >
              All Categories ({ALL_MENU_ITEMS.length})
            </button>

            {MENU_CATEGORIES.map((cat) => {
              const count = ALL_MENU_ITEMS.filter((i) => i.category === cat.name).length;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  type="button"
                  id={`cat-tab-${cat.id}`}
                  className={`px-3 py-1.5 text-[11px] uppercase tracking-wider rounded-sm shrink-0 transition-all font-sans cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-champagne text-[#0c0c0b] font-semibold'
                      : 'text-ivory-muted hover:text-ivory bg-[#121210] hover:bg-[#181815]'
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Dishes Floating Notification Banner */}
        {selectedDishesForReservation.length > 0 && (
          <div className="mb-8 p-4 bg-[#181815] border border-champagne/50 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-7 h-7 rounded-full bg-champagne text-[#0c0c0b] flex items-center justify-center font-bold text-xs">
                {selectedDishesForReservation.length}
              </div>
              <span className="text-ivory">
                Dishes noted for your table request:{' '}
                <strong className="text-champagne font-medium">
                  {selectedDishesForReservation.slice(0, 3).join(', ')}
                  {selectedDishesForReservation.length > 3
                    ? ` +${selectedDishesForReservation.length - 3} more`
                    : ''}
                </strong>
              </span>
            </div>
            <button
              onClick={onOpenReservation}
              id="menu-proceed-reservation-btn"
              type="button"
              className="w-full sm:w-auto px-5 py-2 bg-champagne hover:bg-champagne-light text-[#0c0c0b] font-sans text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors cursor-pointer"
            >
              Book Table with These Dishes
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-[#121210] border border-[#2a2924] rounded-sm p-8">
            <Utensils className="w-10 h-10 text-champagne/40 mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-ivory">No Matching Dishes Found</h3>
            <p className="text-sm text-ivory-muted max-w-md mx-auto mt-2 font-light">
              We couldn't find anything matching "{searchQuery}". Try clearing the search or exploring our other categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setActiveFilter('all');
              }}
              className="mt-6 px-5 py-2.5 text-xs uppercase tracking-widest bg-champagne text-[#0c0c0b] rounded-sm font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Categories Sections */}
        <div className="space-y-16">
          {activeCategories.map((catMeta) => {
            const items = groupedItems[catMeta.name] || [];
            if (items.length === 0) return null;

            return (
              <div
                key={catMeta.id}
                id={`menu-category-section-${catMeta.id}`}
                className="scroll-mt-36"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-3 border-b border-[#2a2924] mb-6 gap-2">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="font-serif text-2xl sm:text-3xl text-ivory tracking-wide font-normal">
                        {catMeta.name}
                      </h3>
                      {catMeta.note && (
                        <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-champagne/20 text-champagne border border-champagne/40 rounded-xs font-sans">
                          {catMeta.note}
                        </span>
                      )}
                    </div>
                    {catMeta.description && (
                      <p className="text-xs text-ivory-muted font-light mt-1 max-w-2xl">
                        {catMeta.description}
                      </p>
                    )}
                  </div>

                  <span className="text-[11px] font-sans uppercase tracking-widest text-champagne/70 shrink-0">
                    {items.length} {items.length === 1 ? 'Dish' : 'Dishes'}
                  </span>
                </div>

                {/* Items Grid or List Mode */}
                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => {
                      const isSelected = selectedDishesForReservation.includes(item.name);

                      return (
                        <div
                          key={item.id}
                          id={`menu-item-${item.id}`}
                          className={`bg-[#181815] border rounded-sm overflow-hidden transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-0.5 ${
                            isSelected
                              ? 'border-champagne bg-[#1d1c18]'
                              : 'border-[#22221e] hover:border-champagne/50'
                          }`}
                        >
                          <div>
                            {/* Visual Food Photograph Card Header */}
                            <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-[#121210]">
                              <MenuFoodImage
                                src={item.image}
                                alt={`${item.name} at DaVinci Grill`}
                                category={item.category}
                                containerClassName="w-full h-full"
                                onClick={() => setSelectedDishForModal(item)}
                              />

                              {/* Badges on Image */}
                              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none z-10">
                                {item.isSignature && (
                                  <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider bg-champagne text-[#0c0c0b] font-bold rounded-xs font-sans shadow-md">
                                    Signature
                                  </span>
                                )}
                                {item.isChefRecommendation && (
                                  <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider bg-amber-500 text-[#0c0c0b] font-bold rounded-xs font-sans shadow-md">
                                    Chef's Pick
                                  </span>
                                )}
                                {item.isSpicy && (
                                  <span className="px-1.5 py-0.5 text-[9px] bg-red-950/80 border border-red-500/40 text-red-300 rounded-xs shadow-md">
                                    🌶️ Spicy
                                  </span>
                                )}
                                {item.isVegetarian && (
                                  <span className="px-1.5 py-0.5 text-[9px] bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 rounded-xs shadow-md">
                                    🌿 Veg
                                  </span>
                                )}
                              </div>

                              {/* Quick View Button on Hover */}
                              <button
                                type="button"
                                onClick={() => setSelectedDishForModal(item)}
                                className="absolute bottom-3 right-3 px-2.5 py-1 rounded-xs bg-[#0c0c0b]/80 hover:bg-[#0c0c0b] text-champagne text-[10px] font-sans uppercase tracking-wider flex items-center gap-1.5 border border-[#2a2924] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                              >
                                <Eye className="w-3 h-3" />
                                <span>Inspect</span>
                              </button>
                            </div>

                            {/* Dish Details Body */}
                            <div className="p-4 sm:p-5">
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <h4
                                  onClick={() => setSelectedDishForModal(item)}
                                  className="font-serif text-lg sm:text-xl text-ivory group-hover:text-champagne-light transition-colors font-medium cursor-pointer"
                                >
                                  {item.name}
                                </h4>

                                {/* Price tag */}
                                {item.price !== undefined && !item.variations && (
                                  <span className="font-serif text-base sm:text-lg text-champagne font-medium shrink-0">
                                    PKR {item.price}/-
                                  </span>
                                )}
                              </div>

                              {item.servingNote && (
                                <p className="text-[11px] italic text-champagne/90 font-serif mb-1.5">
                                  {item.servingNote}
                                </p>
                              )}

                              {item.description && (
                                <p className="text-xs text-ivory-muted font-light leading-relaxed line-clamp-2">
                                  {item.description}
                                </p>
                              )}

                              {/* Variations */}
                              {item.variations && (
                                <div className="mt-3 pt-2.5 border-t border-[#24231f] flex items-center justify-between gap-2 flex-wrap">
                                  <span className="text-[10px] uppercase tracking-wider text-ivory-muted">
                                    Options:
                                  </span>
                                  <div className="flex items-center gap-2 flex-wrap">
                                    {item.variations.map((v) => (
                                      <div
                                        key={v.label}
                                        className="px-2 py-0.5 bg-[#121210] border border-[#2a2924] rounded-xs flex items-center gap-1.5"
                                      >
                                        <span className="text-[11px] text-ivory/80 font-sans">{v.label}</span>
                                        <span className="font-serif text-xs text-champagne font-medium">
                                          PKR {v.price}/-
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Action Footer */}
                          <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-2 flex items-center justify-between border-t border-[#22221e]">
                            <button
                              type="button"
                              onClick={() => setSelectedDishForModal(item)}
                              className="text-[11px] text-ivory-muted hover:text-champagne transition-colors underline-offset-4 hover:underline cursor-pointer"
                            >
                              Details
                            </button>

                            {onToggleDishSelection && (
                              <button
                                onClick={() => onToggleDishSelection(item.name)}
                                type="button"
                                id={`toggle-select-dish-${item.id}`}
                                className={`text-[11px] font-sans uppercase tracking-wider px-3 py-1.5 rounded-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                                  isSelected
                                    ? 'bg-champagne text-[#0c0c0b] font-semibold'
                                    : 'text-champagne hover:text-champagne-light bg-[#121210] border border-champagne/30'
                                }`}
                              >
                                {isSelected ? (
                                  <>
                                    <Check className="w-3 h-3" />
                                    <span>Selected</span>
                                  </>
                                ) : (
                                  <>
                                    <Plus className="w-3 h-3" />
                                    <span>Request</span>
                                  </>
                                )}
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  /* Compact Culinary List View */
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {items.map((item) => {
                      const isSelected = selectedDishesForReservation.includes(item.name);

                      return (
                        <div
                          key={item.id}
                          id={`menu-item-list-${item.id}`}
                          className={`bg-[#181815] border rounded-sm p-3 sm:p-4 transition-all duration-200 flex items-center gap-4 group ${
                            isSelected
                              ? 'border-champagne bg-[#1f1e1a]'
                              : 'border-[#22221e] hover:border-champagne/40'
                          }`}
                        >
                          {/* Left Thumbnail */}
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xs overflow-hidden shrink-0 relative bg-[#121210]">
                            <MenuFoodImage
                              src={item.image}
                              alt={`${item.name} thumbnail`}
                              category={item.category}
                              containerClassName="w-full h-full"
                              onClick={() => setSelectedDishForModal(item)}
                            />
                          </div>

                          {/* Right Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <h4
                                onClick={() => setSelectedDishForModal(item)}
                                className="font-serif text-base sm:text-lg text-ivory group-hover:text-champagne-light transition-colors font-medium cursor-pointer truncate"
                              >
                                {item.name}
                              </h4>
                              {item.price !== undefined && !item.variations && (
                                <span className="font-serif text-base text-champagne font-medium shrink-0">
                                  PKR {item.price}/-
                                </span>
                              )}
                            </div>

                            {item.servingNote && (
                              <p className="text-[11px] italic text-champagne/90 font-serif">
                                {item.servingNote}
                              </p>
                            )}

                            {item.description && (
                              <p className="text-xs text-ivory-muted font-light line-clamp-1 mt-0.5">
                                {item.description}
                              </p>
                            )}

                            {/* Bottom row in list */}
                            <div className="mt-2.5 flex items-center justify-between gap-2">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                {item.isSignature && (
                                  <span className="px-1.5 py-0.2 text-[9px] uppercase tracking-wider bg-champagne/15 text-champagne border border-champagne/30 rounded-xs font-sans">
                                    Signature
                                  </span>
                                )}
                                {item.isChefRecommendation && (
                                  <span className="px-1.5 py-0.2 text-[9px] uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30 rounded-xs font-sans">
                                    Chef's Pick
                                  </span>
                                )}
                              </div>

                              {onToggleDishSelection && (
                                <button
                                  onClick={() => onToggleDishSelection(item.name)}
                                  type="button"
                                  className={`text-[10px] font-sans uppercase tracking-wider px-2 py-1 rounded-xs flex items-center gap-1 transition-colors cursor-pointer ${
                                    isSelected
                                      ? 'bg-champagne text-[#0c0c0b] font-semibold'
                                      : 'text-champagne hover:text-champagne-light bg-[#121210] border border-champagne/30'
                                  }`}
                                >
                                  {isSelected ? 'Selected' : '+ Request'}
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Note in Menu */}
        <div className="mt-20 p-6 bg-[#121210] border border-[#2a2924] rounded-sm text-center">
          <p className="font-serif italic text-base text-champagne">
            "At DaVinci Grill, every plate is shaped by bold flavors, refined technique and the art of flame."
          </p>
          <p className="text-xs text-ivory-muted mt-2 font-sans">
            Need customized allergen details or special event group catering? Contact us directly at{' '}
            <a href={RESTAURANT_DATA.callUrl} className="text-champagne underline">
              {RESTAURANT_DATA.displayPhone}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

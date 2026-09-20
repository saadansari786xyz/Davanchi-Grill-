import React, { useState } from 'react';
import { Flame, ArrowRight, Thermometer, Info, Check } from 'lucide-react';
import { APP_IMAGES } from '../data/images';
import { STEAK_DONENESS_GUIDE } from '../data/restaurantData';

interface GrillSectionProps {
  onExploreSteaks: () => void;
}

export const GrillSection: React.FC<GrillSectionProps> = ({ onExploreSteaks }) => {
  const [selectedDoneness, setSelectedDoneness] = useState<number>(1); // Medium-rare default

  const steakList = [
    { name: 'DaVinci Special Steak', beef: '2,110/-', chicken: '1,560/-', highlight: true },
    { name: 'Bearnaise Steak', beef: '2,050/-', chicken: '1,510/-' },
    { name: 'Royal Mushroom Beef Steak', beef: '2,090/-', chicken: '1,530/-' },
    { name: 'Spicy Mexican Steak', beef: '2,010/-', chicken: '1,510/-', spicy: true },
    { name: 'Chimichurri Steak', beef: '2,010/-', chicken: '1,610/-' },
    { name: 'Jalapeno Flame Steak', beef: '2,050/-', chicken: '1,580/-', spicy: true },
    { name: 'Tarragon Herb Steak', beef: '2,080/-', chicken: '1,590/-' },
    { name: 'Marrakesh Chilli Steak', beef: '2,180/-', chicken: '1,610/-', spicy: true },
    { name: 'Italian Steak', beef: '2,210/-', chicken: '1,630/-' },
  ];

  return (
    <section
      id="grill"
      className="py-24 sm:py-32 bg-[#0c0c0b] relative overflow-hidden border-b border-[#2a2924]"
      aria-label="The Art of the Grill"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visual & Doneness Interactive Guide */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="relative rounded-sm overflow-hidden border border-[#2a2924] shadow-2xl group">
              <img
                src={APP_IMAGES.tomahawkSteak}
                alt="DaVinci Char-Grilled Tomahawk Steak on Board"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-serif italic text-sm text-champagne">The Art of the Flame</span>
                <p className="font-display text-lg text-ivory tracking-wider">CHAR-GRILLED MASTERY</p>
              </div>
            </div>

            {/* Official Doneness Guide Card (from Page 7 of PDF) */}
            <div className="bg-[#121210] border border-[#2a2924] p-6 rounded-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1f1f1d]">
                <div className="flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-champagne" />
                  <h3 className="font-display text-sm tracking-[0.2em] uppercase text-ivory">
                    Steak Doneness Guide
                  </h3>
                </div>
                <span className="text-[11px] text-ivory-muted font-sans">Menu Source</span>
              </div>

              {/* Doneness Selector Tabs */}
              <div className="grid grid-cols-5 gap-1.5 mb-4">
                {STEAK_DONENESS_GUIDE.map((level, idx) => {
                  const isSelected = selectedDoneness === idx;
                  return (
                    <button
                      key={level.name}
                      onClick={() => setSelectedDoneness(idx)}
                      type="button"
                      id={`doneness-btn-${level.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`px-1 py-2 text-center rounded-sm transition-all text-xs flex flex-col items-center justify-center cursor-pointer ${
                        isSelected
                          ? 'bg-champagne text-[#0c0c0b] font-semibold shadow-md'
                          : 'bg-[#181815] text-ivory-muted hover:text-ivory hover:bg-[#20201c]'
                      }`}
                    >
                      <span className="text-[10px] leading-tight truncate w-full">{level.name}</span>
                      <span className="text-[9px] opacity-80 mt-0.5">{level.temp}</span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Doneness Explanation */}
              <div className="bg-[#181815] p-3.5 rounded-sm border border-[#22221e] flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-champagne mt-1 shrink-0" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-sm font-semibold text-ivory">
                      {STEAK_DONENESS_GUIDE[selectedDoneness].name}
                    </span>
                    <span className="text-xs text-champagne">
                      ({STEAK_DONENESS_GUIDE[selectedDoneness].temp})
                    </span>
                  </div>
                  <p className="text-xs text-ivory/80 mt-1 font-light leading-relaxed">
                    {STEAK_DONENESS_GUIDE[selectedDoneness].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Steak Menu Selection */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 text-champagne mb-3">
              <Flame className="w-3.5 h-3.5" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] font-medium">
                The Steakhouse
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-[0.14em] font-medium text-ivory mb-2">
              THE ART OF THE GRILL
            </h2>
            <p className="font-serif italic text-xl text-champagne mb-6 font-normal">
              Crafted over flame. Served with character.
            </p>

            <p className="text-sm sm:text-base text-ivory-muted font-light leading-relaxed mb-8">
              Every steak at DaVinci Grill is hand-cut and prepared over open flames to achieve an aromatic, caramelized crust while retaining tender succulence. Available with your choice of Prime Beef or Tender Chicken cutlets.
            </p>

            {/* Steaks Table / Editorial List */}
            <div className="bg-[#121210] border border-[#2a2924] rounded-sm p-4 sm:p-6 mb-8 divide-y divide-[#1f1f1d]">
              <div className="grid grid-cols-12 pb-3 text-[11px] uppercase tracking-wider text-ivory-muted font-sans">
                <div className="col-span-7 sm:col-span-8">Cut & Recipe</div>
                <div className="col-span-2 sm:col-span-2 text-right">Beef</div>
                <div className="col-span-3 sm:col-span-2 text-right">Chicken</div>
              </div>

              {steakList.map((stk, idx) => (
                <div
                  key={stk.name}
                  className="grid grid-cols-12 py-3 sm:py-3.5 items-center hover:bg-[#181815]/80 px-1 -mx-1 rounded-sm transition-colors"
                >
                  <div className="col-span-7 sm:col-span-8 flex items-center gap-2">
                    <span className="font-serif text-base sm:text-lg text-ivory group-hover:text-champagne transition-colors">
                      {stk.name}
                    </span>
                    {stk.highlight && (
                      <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] uppercase tracking-wider bg-champagne/15 text-champagne border border-champagne/30 rounded-xs">
                        House Pick
                      </span>
                    )}
                    {stk.spicy && (
                      <span className="text-[10px] text-red-400 font-sans tracking-wide" title="Spicy">
                        🌶️
                      </span>
                    )}
                  </div>
                  <div className="col-span-2 sm:col-span-2 text-right font-serif text-sm sm:text-base text-ivory">
                    {stk.beef}
                  </div>
                  <div className="col-span-3 sm:col-span-2 text-right font-serif text-sm sm:text-base text-champagne">
                    {stk.chicken}
                  </div>
                </div>
              ))}
            </div>

            {/* Fajitas and Side Callout */}
            <div className="p-4 bg-[#181815] border border-[#2a2924] rounded-sm mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-serif text-sm text-ivory">Looking for Sizzling Pepper Fajitas?</p>
                <p className="text-xs text-ivory-muted font-light mt-0.5">
                  Char-grilled on cast-iron platters with warm tortillas, Mexican rice & salsa.
                </p>
              </div>
              <span className="text-xs text-champagne font-serif font-medium shrink-0">
                From 1,700/-
              </span>
            </div>

            <div>
              <button
                onClick={onExploreSteaks}
                id="explore-all-steaks-btn"
                type="button"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-champagne hover:bg-champagne-light text-[#0c0c0b] font-sans text-xs uppercase tracking-[0.2em] font-semibold rounded-sm transition-all shadow-md cursor-pointer"
              >
                <span>Explore Steaks & Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

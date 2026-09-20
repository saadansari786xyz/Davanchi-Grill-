import React from 'react';
import { ChevronDown, Sparkles, Flame, Calendar, ArrowRight } from 'lucide-react';
import { APP_IMAGES } from '../data/images';
import { RESTAURANT_DATA } from '../data/restaurantData';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOpenReservation }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0c0b] pt-20 pb-16"
      aria-label="DaVinci Grill Hero"
    >
      {/* Background Cinematic Image with Luxury Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={APP_IMAGES.heroFlame}
          alt="DaVinci Flame-Seared Steak and Charcoal Grill"
          className="w-full h-full object-cover object-center scale-105 transform animate-subtleZoom"
        />
        {/* Luxury Vignette & Multi-step Linear Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b] via-[#0c0c0b]/75 to-[#0c0c0b]/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0c0c0b]/40 to-[#0c0c0b]/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Brand Tag Header */}
        <div
          id="hero-badge"
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-champagne/30 bg-[#121210]/80 backdrop-blur-md mb-5 sm:mb-6 max-w-full"
        >
          <Flame className="w-3.5 h-3.5 text-champagne shrink-0" />
          <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.25em] uppercase text-champagne-light font-medium truncate">
            HYDERABAD, SINDH • EST. 2025
          </span>
        </div>

        {/* Primary Tagline */}
        <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-champagne tracking-[0.12em] sm:tracking-[0.15em] mb-2 font-normal">
          The Art of the Flame
        </p>

        {/* Main Title */}
        <h1 className="font-display text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.12em] sm:tracking-[0.18em] font-medium text-ivory text-balance leading-tight drop-shadow-lg">
          DAVINCI GRILL
        </h1>

        {/* Supporting Narrative */}
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-champagne to-transparent my-6" />

        <p className="font-sans text-base sm:text-lg md:text-xl text-ivory/90 max-w-2xl font-light leading-relaxed tracking-wide mb-10 text-balance">
          An Elevated Dining Experience. Where open fire meets culinary artistry — from char-grilled prime steaks and sizzlers to delicate seafood, handmade pastas, and artisanal drinks.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreMenu}
            id="hero-explore-menu-btn"
            type="button"
            className="w-full sm:w-auto px-8 py-4 bg-champagne hover:bg-champagne-light text-[#0c0c0b] font-sans text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 rounded-sm shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenReservation}
            id="hero-reserve-btn"
            type="button"
            className="w-full sm:w-auto px-8 py-4 bg-[#181815]/90 hover:bg-[#22221d] border border-champagne/40 hover:border-champagne text-ivory font-sans text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 rounded-sm backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-champagne" />
            <span>Reserve a Table</span>
          </button>
        </div>

        {/* Quick Features Highlight Strip */}
        <div className="mt-14 pt-8 border-t border-[#2a2924]/60 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 w-full max-w-4xl text-center">
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg text-ivory">Prime Steaks</span>
            <span className="text-[11px] uppercase tracking-wider text-ivory-muted font-sans mt-0.5">
              Char-Grilled To Order
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg text-ivory">Sizzling Platters</span>
            <span className="text-[11px] uppercase tracking-wider text-ivory-muted font-sans mt-0.5">
              Fajitas & Cast Iron Skillets
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg text-ivory">Oceanic Catch</span>
            <span className="text-[11px] uppercase tracking-wider text-ivory-muted font-sans mt-0.5">
              Tiger Prawns & Lobster
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg text-ivory">Gourmet Mocktails</span>
            <span className="text-[11px] uppercase tracking-wider text-ivory-muted font-sans mt-0.5">
              Margaritas & Cold Brews
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#brand-intro"
          id="hero-scroll-indicator"
          className="mt-10 text-ivory-muted hover:text-champagne transition-colors flex flex-col items-center gap-1.5 focus:outline-none"
          aria-label="Scroll to introduction"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-sans">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

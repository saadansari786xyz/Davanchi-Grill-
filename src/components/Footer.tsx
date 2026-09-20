import React from 'react';
import { Phone, MapPin, Instagram, Facebook, Share2, ArrowUp, Calendar, MessageCircle } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

interface FooterProps {
  onOpenReservation: () => void;
  onNavigateToMenu: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation, onNavigateToMenu }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#080807] text-ivory border-t border-[#1f1f1d] pt-20 pb-28 sm:pb-12 relative overflow-hidden"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1f1f1d]">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full border border-champagne/50 p-1 bg-[#121210]">
                <img
                  src="/logo.svg"
                  alt="DaVinci Grill Seal"
                  className="w-full h-full object-contain filter invert brightness-125"
                />
              </div>
              <div>
                <span className="font-display text-lg font-semibold tracking-[0.22em] text-ivory block">
                  DAVINCI GRILL
                </span>
                <span className="font-serif italic text-xs tracking-[0.2em] text-champagne">
                  The Art of the Flame
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-ivory-muted max-w-sm font-light leading-relaxed mb-6">
              Hyderabad’s premier destination for flame-seared steaks, artisanal grills, authentic Italian pastas, oceanic seafood, and handcrafted mocktails.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={RESTAURANT_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-sm border border-[#2a2924] bg-[#121210] flex items-center justify-center text-ivory hover:text-champagne hover:border-champagne transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_DATA.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-sm border border-[#2a2924] bg-[#121210] flex items-center justify-center text-ivory hover:text-champagne hover:border-champagne transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_DATA.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-sm border border-[#2a2924] bg-[#121210] flex items-center justify-center text-ivory hover:text-champagne hover:border-champagne transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs uppercase tracking-[0.25em] text-champagne mb-5">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs font-sans uppercase tracking-wider text-ivory-muted">
              <li>
                <a href="#hero" className="hover:text-champagne transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToMenu();
                  }}
                  className="hover:text-champagne transition-colors"
                >
                  Full Menu (26 Categories)
                </a>
              </li>
              <li>
                <a href="#grill" className="hover:text-champagne transition-colors">
                  The Art of the Flame
                </a>
              </li>
              <li>
                <a href="#chef-recommendations" className="hover:text-champagne transition-colors">
                  Chef's Choice
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-champagne transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-champagne transition-colors">
                  Atmosphere & Gallery
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-champagne transition-colors">
                  Visit Us / Map
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-xs uppercase tracking-[0.25em] text-champagne mb-5">
              Dining & Contact
            </h4>
            
            <div className="space-y-3.5 text-xs text-ivory-muted font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <span>
                  Plot No 7-a, Main Autobhan Unit No: 3, Latifabad, Hyderabad, Sindh
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-champagne shrink-0" />
                <a href={RESTAURANT_DATA.callUrl} className="hover:text-champagne transition-colors text-ivory font-medium">
                  {RESTAURANT_DATA.displayPhone}
                </a>
              </div>

              <div className="pt-2">
                <p className="text-[11px] uppercase tracking-wider text-champagne/80 font-medium">
                  Operating Hours:
                </p>
                <p className="text-[11px] text-ivory-muted mt-0.5">
                  Mon – Thu: 12:30 PM – 12:30 AM
                  <br />
                  Fri – Sun: 12:30 PM – 1:00 AM
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-3">
                <button
                  onClick={onOpenReservation}
                  id="footer-reserve-btn"
                  className="px-4 py-2 bg-champagne hover:bg-champagne-light text-[#0c0c0b] uppercase tracking-wider font-semibold rounded-xs transition-colors cursor-pointer text-[11px]"
                >
                  Reserve Table
                </button>
                <a
                  href={RESTAURANT_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-[#2a2924] hover:border-champagne text-ivory uppercase tracking-wider rounded-xs transition-colors text-[11px] flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-champagne" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-muted/70 font-sans">
          <p>© {new Date().getFullYear()} DaVinci Grill & Restaurant. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-champagne/80 font-serif italic">
              {RESTAURANT_DATA.taxNotice}
            </span>

            <button
              onClick={scrollToTop}
              id="footer-back-to-top"
              className="flex items-center gap-1 hover:text-champagne transition-colors"
              aria-label="Scroll to top"
            >
              <span className="text-[11px] uppercase tracking-wider">Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

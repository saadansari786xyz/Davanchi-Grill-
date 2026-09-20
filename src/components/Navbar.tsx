import React, { useState, useEffect } from 'react';
import { Calendar, Menu as MenuIcon, X } from 'lucide-react';

const OFFICIAL_LOGO_URL = 'https://i.ibb.co/VWJX9rvd/cliefnt.jpg';
const BACKUP_LOGO_PATH = '/davinci-logo.jpg';

interface NavbarProps {
  onOpenReservation: () => void;
  onNavigateToMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation, onNavigateToMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState(OFFICIAL_LOGO_URL);

  const handleLogoError = () => {
    if (logoSrc !== BACKUP_LOGO_PATH) {
      setLogoSrc(BACKUP_LOGO_PATH);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'MENU', href: '#menu', isMenu: true },
    { label: 'OUR STORY', href: '#story' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'VISIT US', href: '#visit' },
  ];

  const handleLinkClick = (isMenu?: boolean, href?: string) => {
    setMobileMenuOpen(false);
    if (isMenu) {
      onNavigateToMenu();
    } else if (href) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c0c0b]/95 backdrop-blur-md border-b border-[#2a2924] py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#0c0c0b]/90 via-[#0c0c0b]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* LEFT: DaVinci Grill Logo & Typography */}
          <a
            href="#hero"
            id="nav-logo"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(false, '#hero');
            }}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
            aria-label="DaVinci Grill Homepage"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-sm border border-champagne/40 overflow-hidden flex items-center justify-center bg-[#121210] group-hover:border-champagne transition-colors shrink-0">
              <img
                src={logoSrc}
                alt="DaVinci Grill"
                className="w-full h-full aspect-square object-contain"
                onError={handleLogoError}
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base sm:text-lg font-semibold tracking-[0.2em] text-ivory group-hover:text-champagne-light transition-colors">
                DAVINCI GRILL
              </span>
              <span className="font-serif italic text-[11px] tracking-[0.22em] text-champagne">
                The Art of the Flame
              </span>
            </div>
          </a>

          {/* CENTER: Navigation Links (Clean 5-item structure) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Primary Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.isMenu, link.href);
                }}
                className="font-sans text-xs tracking-[0.2em] text-ivory/80 hover:text-champagne transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-champagne hover:after:w-full after:transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-champagne"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT: Primary Reservation CTA Only */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenReservation}
              id="nav-reserve-btn"
              type="button"
              className="px-5 py-2.5 text-xs font-sans uppercase tracking-[0.18em] font-semibold text-[#0c0c0b] bg-champagne hover:bg-champagne-light transition-all duration-200 rounded-sm shadow-sm flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve a Table</span>
            </button>
          </div>

          {/* MOBILE: Clean controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenReservation}
              id="nav-mobile-quick-reserve"
              type="button"
              className="px-3 py-1.5 text-[11px] font-sans uppercase tracking-wider font-semibold text-[#0c0c0b] bg-champagne rounded-sm cursor-pointer"
              aria-label="Reserve a table"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="nav-hamburger-btn"
              type="button"
              className="p-2 text-ivory hover:text-champagne transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-champagne cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Clean Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-50 bg-[#0c0c0b]/98 flex flex-col justify-between p-6 sm:p-8 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#2a2924]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm border border-champagne/40 overflow-hidden flex items-center justify-center bg-[#121210] shrink-0">
                  <img
                    src={logoSrc}
                    alt="DaVinci Grill"
                    className="w-full h-full aspect-square object-contain"
                    onError={handleLogoError}
                    loading="eager"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-base font-semibold tracking-[0.2em] text-ivory">
                    DAVINCI GRILL
                  </span>
                  <span className="font-serif italic text-xs text-champagne">
                    The Art of the Flame
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                id="close-mobile-menu-btn"
                className="p-2 text-ivory hover:text-champagne transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-5" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  id={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.isMenu, link.href);
                  }}
                  className="font-serif text-2xl tracking-wide text-ivory hover:text-champagne transition-colors flex items-center justify-between border-b border-[#1f1f1d] pb-3"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-sans tracking-widest text-champagne/60">→</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#2a2924]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              id="mobile-drawer-reserve-btn"
              className="w-full py-3.5 bg-champagne hover:bg-champagne-light text-[#0c0c0b] text-xs uppercase tracking-[0.2em] font-semibold text-center rounded-sm transition-colors cursor-pointer"
            >
              Reserve a Table
            </button>
          </div>
        </div>
      )}
    </>
  );
};

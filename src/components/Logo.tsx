import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'emblem' | 'horizontal';
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = 'w-12 h-12', variant = 'full', light = true }) => {
  const strokeColor = light ? '#f7f5f0' : '#0c0c0b';
  const accentColor = '#c89d66';

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <img
          src="/logo.svg"
          alt="DaVinci Grill Logo"
          className="w-10 h-10 object-contain text-champagne"
          style={{ filter: light ? 'invert(1) hue-rotate(180deg) brightness(1.2)' : 'none' }}
        />
        <div className="flex flex-col">
          <span className="font-display tracking-[0.25em] text-lg font-semibold text-ivory leading-none">
            DAVINCI GRILL
          </span>
          <span className="font-serif italic text-xs tracking-[0.2em] text-champagne mt-0.5">
            The Art of the Flame
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'emblem') {
    return (
      <div className={`relative inline-block ${className}`}>
        <img
          src="/logo.svg"
          alt="DaVinci Grill Emblem"
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <div className="relative w-28 h-28 mb-3">
        <img
          src="/logo.svg"
          alt="DaVinci Grill Emblem"
          className="w-full h-full object-contain filter drop-shadow-md"
        />
      </div>
      <h1 className="font-display text-xl tracking-[0.28em] font-semibold text-ivory">
        DAVINCI GRILL
      </h1>
      <p className="font-serif italic text-sm tracking-[0.2em] text-champagne mt-1">
        The Art of the Flame
      </p>
      <span className="text-[10px] tracking-[0.3em] text-ivory-muted uppercase mt-0.5">
        Latifabad • Hyderabad
      </span>
    </div>
  );
};

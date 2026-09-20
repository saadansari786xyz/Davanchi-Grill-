import React, { useState } from 'react';
import { Utensils } from 'lucide-react';

interface MenuFoodImageProps {
  src?: string;
  alt: string;
  category?: string;
  className?: string;
  containerClassName?: string;
  onClick?: () => void;
  priority?: boolean;
}

export const MenuFoodImage: React.FC<MenuFoodImageProps> = ({
  src,
  alt,
  category,
  className = '',
  containerClassName = '',
  onClick,
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fallback view when no image is provided or loading fails
  if (!src || hasError) {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-[#1c1c18] via-[#141412] to-[#0c0c0b] border border-[#2a2924] flex flex-col items-center justify-center p-4 text-center select-none group/fallback ${containerClassName}`}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
      >
        {/* Subtle decorative background watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <img
            src="/logo.svg"
            alt=""
            aria-hidden="true"
            className="w-32 h-32 object-contain filter invert"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-1.5">
          <div className="w-9 h-9 rounded-full bg-[#24241f] border border-champagne/30 flex items-center justify-center text-champagne/80 group-hover/fallback:border-champagne transition-colors">
            <Utensils className="w-4 h-4 text-champagne" />
          </div>
          {category && (
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-champagne/80 font-medium mt-1">
              {category}
            </span>
          )}
          <span className="font-serif italic text-xs text-ivory-muted/70">
            DaVinci Kitchen
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-[#141412] group ${containerClassName} ${
        onClick ? 'cursor-pointer' : ''
      }`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Loading Skeleton Pulse */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#1f1e1a] animate-pulse flex items-center justify-center">
          <img
            src="/logo.svg"
            alt=""
            aria-hidden="true"
            className="w-8 h-8 opacity-20 filter invert"
          />
        </div>
      )}

      {/* Primary Image with No-Referrer and Lazy Loading */}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />

      {/* Subtle luxury gradient vignette for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b]/80 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity" />
    </div>
  );
};

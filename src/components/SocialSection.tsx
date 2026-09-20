import React from 'react';
import { Instagram, Facebook, ArrowUpRight, Share2 } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';
import { APP_IMAGES } from '../data/images';

export const SocialSection: React.FC = () => {
  const socialCards = [
    {
      platform: 'Instagram',
      handle: '@davincigrill.pk',
      url: RESTAURANT_DATA.socials.instagram,
      image: APP_IMAGES.tomahawkSteak,
      subtitle: 'Stories, specials & behind the flames',
      icon: Instagram,
    },
    {
      platform: 'Facebook',
      handle: 'DaVinci Grill',
      url: RESTAURANT_DATA.socials.facebook,
      image: APP_IMAGES.diningAmbience,
      subtitle: 'Community updates & guest gatherings',
      icon: Facebook,
    },
    {
      platform: 'TikTok',
      handle: '@davincigrill.pk',
      url: RESTAURANT_DATA.socials.tiktok,
      image: APP_IMAGES.heroFlame,
      subtitle: 'Sizzling fajitas & live fire reels',
      icon: Share2,
    },
  ];

  return (
    <section
      id="social"
      className="py-20 sm:py-28 bg-[#121210] relative overflow-hidden border-b border-[#2a2924]"
      aria-label="Social Media Community"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-champagne mb-3">
            <Instagram className="w-3.5 h-3.5" />
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-medium">
              Community & Moments
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl tracking-[0.12em] font-medium text-ivory">
            FOLLOW THE EXPERIENCE
          </h2>
          <p className="font-serif italic text-base text-champagne mt-1">
            Connect with @davincigrill.pk
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.platform}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                id={`social-card-${card.platform.toLowerCase()}`}
                className="group bg-[#181815] border border-[#2a2924] hover:border-champagne/60 rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0c0c0b]">
                  <img
                    src={card.image}
                    alt={`${card.platform} feature`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181815] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0c0c0b]/80 border border-[#2a2924] flex items-center justify-center text-ivory group-hover:text-champagne transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-ivory-muted font-sans">
                      {card.platform}
                    </span>
                    <h3 className="font-serif text-lg text-ivory group-hover:text-champagne-light transition-colors mt-0.5">
                      {card.handle}
                    </h3>
                    <p className="text-xs text-ivory-muted mt-1 font-light">{card.subtitle}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#22221e] flex items-center justify-between text-xs text-champagne font-sans">
                    <span>Follow on {card.platform}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

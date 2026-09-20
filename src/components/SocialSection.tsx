import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { SiInstagram, SiFacebook, SiTiktok } from 'react-icons/si';
import { RESTAURANT_DATA } from '../data/restaurantData';

interface SocialChannel {
  platform: string;
  handle: string;
  url: string;
  description: string;
  actionText: string;
  icon: React.ComponentType<{ className?: string }>;
  iconClass: string;
  containerClass: string;
}

export const SocialSection: React.FC = () => {
  const socialCards: SocialChannel[] = [
    {
      platform: 'Instagram',
      handle: '@davincigrill.pk',
      url: RESTAURANT_DATA.socials.instagram,
      description: 'Behind-the-scenes flame cooking, daily chef specials, and dining moments from Hyderabad.',
      actionText: 'Follow on Instagram',
      icon: SiInstagram,
      iconClass: 'text-[#E4405F] group-hover:scale-105',
      containerClass: 'group-hover:border-[#E4405F]/40 group-hover:bg-[#E4405F]/5',
    },
    {
      platform: 'Facebook',
      handle: 'DaVinci Grill',
      url: RESTAURANT_DATA.socials.facebook,
      description: 'Community announcements, guest gatherings, special event notices, and dining updates.',
      actionText: 'Follow on Facebook',
      icon: SiFacebook,
      iconClass: 'text-[#1877F2] group-hover:scale-105',
      containerClass: 'group-hover:border-[#1877F2]/40 group-hover:bg-[#1877F2]/5',
    },
    {
      platform: 'TikTok',
      handle: '@davincigrill.pk',
      url: RESTAURANT_DATA.socials.tiktok,
      description: 'Sizzling cast-iron fajitas, steak searing reveals, and live fire kitchen reels.',
      actionText: 'Follow on TikTok',
      icon: SiTiktok,
      iconClass: 'text-ivory group-hover:text-[#25F4EE] group-hover:scale-105',
      containerClass: 'group-hover:border-[#25F4EE]/40 group-hover:bg-[#25F4EE]/5',
    },
  ];

  return (
    <section
      id="social"
      className="py-20 sm:py-28 bg-[#121210] relative overflow-hidden border-b border-[#2a2924]"
      aria-label="Social Media Community"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-champagne mb-3">
            <Sparkles className="w-3.5 h-3.5" />
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

        {/* Refined Luxury Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {socialCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.platform}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                id={`social-card-${card.platform.toLowerCase()}`}
                className="group bg-[#181815] border border-[#2a2924] hover:border-champagne/60 rounded-sm p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
              >
                {/* Subtle Luxury Accent Sheen */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-champagne/5 rounded-full blur-3xl pointer-events-none group-hover:bg-champagne/10 transition-colors" />

                <div>
                  {/* Top Bar: Official Brand Icon (48px / 44px) & Platform Chip */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-16 h-16 sm:w-18 sm:h-18 rounded-sm bg-[#0e0e0c] border border-[#2a2924] flex items-center justify-center transition-all duration-300 ${card.containerClass}`}
                    >
                      <Icon className={`w-11 h-11 sm:w-12 sm:h-12 transition-transform duration-300 ${card.iconClass}`} />
                    </div>

                    <span className="px-2.5 py-1 bg-[#10100e] border border-[#262622] rounded-sm text-[10px] uppercase tracking-widest text-champagne font-sans font-medium">
                      {card.platform}
                    </span>
                  </div>

                  {/* Channel Typography */}
                  <h3 className="font-serif text-xl sm:text-2xl text-ivory group-hover:text-champagne-light transition-colors font-normal">
                    {card.handle}
                  </h3>
                  <p className="text-sm text-ivory-muted mt-2 font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Follow Button Action */}
                <div className="mt-8 pt-5 border-t border-[#22221e]">
                  <div className="w-full py-3 px-4 bg-[#10100e] group-hover:bg-champagne/10 border border-[#262622] group-hover:border-champagne/50 rounded-sm flex items-center justify-between text-xs uppercase tracking-wider text-ivory group-hover:text-champagne font-sans font-medium transition-colors">
                    <span>{card.actionText}</span>
                    <ArrowUpRight className="w-4 h-4 text-champagne group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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


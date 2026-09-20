import React, { useState } from 'react';
import { Flame, Compass, MapPin, HeartHandshake } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export const OurStory: React.FC = () => {
  const [storyImg, setStoryImg] = useState('https://i.ibb.co/hF99Qgrq/download.jpg');
  return (
    <section
      id="story"
      className="py-24 sm:py-32 bg-[#0c0c0b] relative overflow-hidden border-b border-[#2a2924]"
      aria-label="Our Story"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-champagne mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-medium">
              The Journey & Passion
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl tracking-[0.12em] font-medium text-ivory">
            OUR STORY
          </h2>
          <p className="font-serif italic text-lg text-champagne mt-2">
            The Art of the Flame in Hyderabad
          </p>
        </div>

        {/* Narrative & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Atmospheric Image with Seal */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#2a2924] shadow-2xl">
              <img
                src={storyImg}
                alt="DaVinci Grill - The Art of the Flame & Culinary Passion"
                className="w-full h-[420px] sm:h-[480px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() => {
                  if (storyImg !== '/our-story.jpg') {
                    setStoryImg('/our-story.jpg');
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b] via-transparent to-transparent opacity-80" />
            </div>

            {/* Medallion Badge overlay */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#181815] border border-champagne/40 p-4 rounded-sm shadow-2xl flex items-center gap-3 max-w-[260px]">
              <img
                src="/logo.svg"
                alt="DaVinci Seal"
                className="w-12 h-12 object-contain filter invert brightness-125"
              />
              <div>
                <p className="font-display text-xs font-semibold tracking-wider text-ivory">
                  DAVINCI GRILL
                </p>
                <p className="font-serif italic text-[11px] text-champagne">
                  Main Autobhan, Hyderabad
                </p>
              </div>
            </div>
          </div>

          {/* Right: Thoughtful Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal leading-snug mb-6">
              A culinary destination centered on craftsmanship, open fire, and genuine hospitality.
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-ivory-muted font-light leading-relaxed">
              <p>
                DaVinci Grill was born out of an uncompromising reverence for flame cooking. We believe that true flavor is unlocked when high-grade meats and premium ingredients encounter the intense heat and gentle smoke of live fire.
              </p>
              <p>
                From hand-cut prime beef steaks seared to distinct doneness levels, to bubbling cast-iron fajitas and Mediterranean pastas, our kitchen strikes a balance between culinary tradition and contemporary flair.
              </p>
              <p>
                Set on Main Autobhan in the heart of Latifabad, Hyderabad, DaVinci Grill is designed as a sanctuary of warmth — an intimate space where celebrations, casual get-togethers, and family dinners are elevated into unforgettable memories.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#1f1f1d]">
              <div className="p-4 bg-[#121210] border border-[#22221e] rounded-sm">
                <span className="font-serif text-base text-ivory block">Flame Precision</span>
                <span className="text-xs text-ivory-muted font-light mt-1 block">
                  Cooking over calibrated heat to create deep caramelization and tender texture.
                </span>
              </div>

              <div className="p-4 bg-[#121210] border border-[#22221e] rounded-sm">
                <span className="font-serif text-base text-ivory block">Warm Hospitality</span>
                <span className="text-xs text-ivory-muted font-light mt-1 block">
                  Attentive table care and an inviting, modern dark luxury atmosphere for all guests.
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs text-champagne font-sans uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Plot No 7-a, Main Autobhan Unit No: 3, Latifabad</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

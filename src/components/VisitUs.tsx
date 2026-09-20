import React from 'react';
import { MapPin, Phone, Clock, Navigation, MessageCircle, ExternalLink } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

interface VisitUsProps {
  onOpenReservation: () => void;
}

export const VisitUs: React.FC<VisitUsProps> = ({ onOpenReservation }) => {
  return (
    <section
      id="visit"
      className="py-24 sm:py-32 bg-[#0c0c0b] relative overflow-hidden border-b border-[#2a2924]"
      aria-label="Location and Hours"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-champagne mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-medium">
              Find Us
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl tracking-[0.12em] font-medium text-ivory">
            VISIT DAVINCI GRILL
          </h2>
          <p className="font-serif italic text-lg text-champagne mt-2">
            Latifabad, Hyderabad, Sindh
          </p>
        </div>

        {/* Content & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="bg-[#121210] border border-[#2a2924] p-6 sm:p-7 rounded-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#181815] border border-champagne/40 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-champagne" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-ivory font-medium">Restaurant Address</h3>
                  <p className="text-sm text-ivory-muted mt-2 font-light leading-relaxed">
                    Plot No 7-a, Main Autobhan Unit No: 3,
                    <br />
                    Latifabad, Hyderabad,
                    <br />
                    Sindh, Pakistan
                  </p>

                  <a
                    href={RESTAURANT_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="get-directions-btn"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-champagne hover:text-champagne-light mt-4 font-sans font-medium"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-[#121210] border border-[#2a2924] p-6 sm:p-7 rounded-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#181815] border border-champagne/40 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-champagne" />
                </div>
                <div className="w-full">
                  <h3 className="font-serif text-xl text-ivory font-medium">Dining Hours</h3>
                  
                  <div className="mt-3 space-y-2 text-sm font-sans divide-y divide-[#1f1f1d]">
                    <div className="flex justify-between items-center pt-1">
                      <span className="text-ivory-muted">{RESTAURANT_DATA.openingHours.weekday}</span>
                      <span className="text-ivory font-medium">{RESTAURANT_DATA.openingHours.weekdayHours}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-ivory-muted">{RESTAURANT_DATA.openingHours.weekend}</span>
                      <span className="text-champagne font-medium">{RESTAURANT_DATA.openingHours.weekendHours}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-ivory-muted/80 mt-3 font-light">
                    {RESTAURANT_DATA.openingHours.note}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-[#121210] border border-[#2a2924] p-6 sm:p-7 rounded-sm">
              <h3 className="font-serif text-xl text-ivory font-medium mb-4">Direct Inquiries</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={RESTAURANT_DATA.callUrl}
                  id="visit-call-btn"
                  className="px-4 py-3 bg-[#181815] border border-[#2a2924] hover:border-champagne text-ivory text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors font-sans"
                >
                  <Phone className="w-4 h-4 text-champagne" />
                  <span>Call Us</span>
                </a>

                <a
                  href={RESTAURANT_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="visit-whatsapp-btn"
                  className="px-4 py-3 bg-champagne hover:bg-champagne-light text-[#0c0c0b] text-xs uppercase tracking-wider font-semibold rounded-sm flex items-center justify-center gap-2 transition-colors font-sans"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Google Maps Embed Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full h-full min-h-[380px] sm:min-h-[460px] bg-[#121210] border border-[#2a2924] rounded-sm overflow-hidden shadow-2xl relative">
              <iframe
                title="DaVinci Grill location map"
                src={RESTAURANT_DATA.googleMapsEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) brightness(0.95)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[380px] sm:min-h-[460px]"
              />
              
              {/* Map Footer Overlay Bar */}
              <div className="absolute bottom-3 left-3 right-3 bg-[#0c0c0b]/90 backdrop-blur-md border border-[#2a2924] px-4 py-2.5 rounded-sm flex items-center justify-between text-xs text-ivory font-sans">
                <span className="truncate">DaVinci Grill • Main Autobhan Unit 3</span>
                <a
                  href={RESTAURANT_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-champagne hover:underline shrink-0 ml-2"
                >
                  Open in Maps ↗
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

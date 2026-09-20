import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Clock,
  Users,
  Phone,
  User,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';
import { ReservationRequest } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedDishes?: string[];
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  preSelectedDishes = [],
}) => {
  const [formData, setFormData] = useState<ReservationRequest>({
    fullName: '',
    phone: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // tomorrow default
    time: '20:00', // 8:00 PM default dinner
    guests: 2,
    specialRequest: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  // Lock body scroll when modal is open, and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleResetAndClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your contact phone number.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please enter a valid phone number (e.g. 0302-3009005).';
    }
    if (!formData.date) {
      errs.date = 'Please select a date.';
    }
    if (!formData.time) {
      errs.time = 'Please select a preferred dining time.';
    }
    if (formData.guests < 1) {
      errs.guests = 'Number of guests must be at least 1.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Construct structured WhatsApp message as mandated
    let message = `Hello DaVinci Grill,\n\nI would like to request a table.\n\n`;
    message += `Name: ${formData.fullName.trim()}\n`;
    message += `Phone: ${formData.phone.trim()}\n`;
    message += `Date: ${formData.date}\n`;
    message += `Preferred Time: ${formData.time}\n`;
    message += `Guests: ${formData.guests}\n`;

    if (preSelectedDishes.length > 0) {
      message += `Interested Dishes: ${preSelectedDishes.join(', ')}\n`;
    }

    if (formData.specialRequest.trim()) {
      message += `Special Request: ${formData.specialRequest.trim()}\n`;
    } else {
      message += `Special Request: None\n`;
    }

    message += `\nPlease confirm availability.\n\nThank you.`;

    const encodedMsg = encodeURIComponent(message);
    const waUrl = `https://wa.me/${RESTAURANT_DATA.whatsappInternational}?text=${encodedMsg}`;

    setGeneratedWhatsAppUrl(waUrl);
    setIsSubmitted(true);

    // Open WhatsApp in new tab safely
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Fallback is provided on screen
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <div
      id="reservation-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#0c0c0b]/90 backdrop-blur-md overflow-y-auto overscroll-contain p-2.5 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleResetAndClose();
        }
      }}
    >
      <div className="min-h-full flex items-center justify-center py-2 sm:py-6">
        <div
          className="relative w-full max-w-xl bg-[#181815] border border-champagne/40 rounded-sm shadow-2xl p-4 sm:p-7 md:p-8 text-ivory max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-3rem)] flex flex-col my-auto overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button - Always visible, accessible touch target */}
          <button
            onClick={handleResetAndClose}
            id="close-reservation-modal-btn"
            type="button"
            className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-20 w-10 h-10 rounded-sm text-ivory-muted hover:text-champagne transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne cursor-pointer"
            aria-label="Close reservation modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {!isSubmitted ? (
            <div className="flex flex-col h-full overflow-hidden">
              {/* Modal Header */}
              <div className="text-center mb-3 sm:mb-5 shrink-0 pr-8 pl-2 sm:px-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1.5">
                  <img
                    src="/logo.svg"
                    alt="DaVinci Seal"
                    className="w-full h-full object-contain filter invert brightness-125"
                  />
                </div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-champagne font-sans font-medium">
                  Table Booking Request
                </span>
                <h3
                  id="reservation-modal-title"
                  className="font-display text-xl sm:text-2xl md:text-3xl text-ivory tracking-wide mt-0.5"
                >
                  RESERVE A TABLE
                </h3>
                <p className="text-[11px] sm:text-xs text-ivory-muted mt-1 max-w-md mx-auto font-light leading-snug">
                  Submit your details below to prepare your WhatsApp reservation request directly for our host desk.
                </p>
              </div>

              {/* Pre-selected Dishes Notification if user selected from menu */}
              {preSelectedDishes.length > 0 && (
                <div className="mb-3 p-2.5 bg-[#121210] border border-champagne/30 rounded-sm text-xs shrink-0">
                  <span className="text-champagne font-semibold block mb-0.5 text-[11px]">
                    Selected Menu Items ({preSelectedDishes.length}):
                  </span>
                  <p className="text-ivory-muted truncate text-[11px]">
                    {preSelectedDishes.join(', ')}
                  </p>
                </div>
              )}

              {/* Scrollable Form Body */}
              <form
                onSubmit={handleSubmit}
                noValidate
                className="overflow-y-auto overflow-x-hidden flex-1 overscroll-contain pr-1 sm:pr-1.5 space-y-3.5 sm:space-y-4"
              >
                {/* Row 1: Responsive Grid (1 col on mobile, 2 cols on desktop/tablet) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="res-full-name"
                      className="block text-xs uppercase tracking-wider text-ivory-muted mb-1 font-sans"
                    >
                      Full Name <span className="text-champagne">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-champagne absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        id="res-full-name"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Tariq Khan"
                        className={`w-full min-h-[44px] bg-[#121210] border ${
                          errors.fullName ? 'border-red-500' : 'border-[#2a2924]'
                        } focus:border-champagne pl-10 pr-3 py-2.5 rounded-sm text-base sm:text-sm text-ivory placeholder:text-ivory-muted/40 focus:outline-none transition-colors`}
                      />
                    </div>
                    {errors.fullName && (
                      <p
                        className="text-xs text-red-400 mt-1 flex items-center gap-1"
                        role="alert"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Contact Phone */}
                  <div>
                    <label
                      htmlFor="res-phone"
                      className="block text-xs uppercase tracking-wider text-ivory-muted mb-1 font-sans"
                    >
                      Phone Number <span className="text-champagne">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-champagne absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="tel"
                        id="res-phone"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="e.g. 0302-3009005"
                        className={`w-full min-h-[44px] bg-[#121210] border ${
                          errors.phone ? 'border-red-500' : 'border-[#2a2924]'
                        } focus:border-champagne pl-10 pr-3 py-2.5 rounded-sm text-base sm:text-sm text-ivory placeholder:text-ivory-muted/40 focus:outline-none transition-colors`}
                      />
                    </div>
                    {errors.phone && (
                      <p
                        className="text-xs text-red-400 mt-1 flex items-center gap-1"
                        role="alert"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Date & Time Grid (1 col on mobile, 2 cols on desktop/tablet) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* Date */}
                  <div>
                    <label
                      htmlFor="res-date"
                      className="block text-xs uppercase tracking-wider text-ivory-muted mb-1 font-sans"
                    >
                      Reservation Date <span className="text-champagne">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-champagne absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="date"
                        id="res-date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full min-h-[44px] bg-[#121210] border border-[#2a2924] focus:border-champagne pl-10 pr-3 py-2.5 rounded-sm text-base sm:text-sm text-ivory focus:outline-none [color-scheme:dark] transition-colors"
                      />
                    </div>
                    {errors.date && (
                      <p
                        className="text-xs text-red-400 mt-1 flex items-center gap-1"
                        role="alert"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.date}</span>
                      </p>
                    )}
                  </div>

                  {/* Time */}
                  <div>
                    <label
                      htmlFor="res-time"
                      className="block text-xs uppercase tracking-wider text-ivory-muted mb-1 font-sans"
                    >
                      Preferred Time <span className="text-champagne">*</span>
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-champagne absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        id="res-time"
                        required
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                        className="w-full min-h-[44px] bg-[#121210] border border-[#2a2924] focus:border-champagne pl-10 pr-4 py-2.5 rounded-sm text-base sm:text-sm text-ivory focus:outline-none [color-scheme:dark] transition-colors"
                      >
                        <option value="12:30">12:30 PM (Lunch Opening)</option>
                        <option value="13:00">1:00 PM (Lunch)</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="18:30">6:30 PM (Early Dinner)</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM (Prime Dinner)</option>
                        <option value="20:30">8:30 PM</option>
                        <option value="21:00">9:00 PM</option>
                        <option value="21:30">9:30 PM</option>
                        <option value="22:00">10:00 PM</option>
                        <option value="22:30">10:30 PM</option>
                        <option value="23:00">11:00 PM (Late Night)</option>
                        <option value="23:30">11:30 PM</option>
                        <option value="00:00">12:00 AM (Midnight)</option>
                      </select>
                    </div>
                    {errors.time && (
                      <p
                        className="text-xs text-red-400 mt-1 flex items-center gap-1"
                        role="alert"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.time}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label
                    htmlFor="res-guests"
                    className="block text-xs uppercase tracking-wider text-ivory-muted mb-1 font-sans"
                  >
                    Number of Guests <span className="text-champagne">*</span>
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-champagne absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="res-guests"
                      required
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          guests: parseInt(e.target.value) || 1,
                        })
                      }
                      className="w-full min-h-[44px] bg-[#121210] border border-[#2a2924] focus:border-champagne pl-10 pr-4 py-2.5 rounded-sm text-base sm:text-sm text-ivory focus:outline-none [color-scheme:dark] transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest (Solo Dining)' : num === 2 ? 'Guests (Couple Table)' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.guests && (
                    <p
                      className="text-xs text-red-400 mt-1 flex items-center gap-1"
                      role="alert"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.guests}</span>
                    </p>
                  )}
                </div>

                {/* Special Request */}
                <div>
                  <label
                    htmlFor="res-special-request"
                    className="block text-xs uppercase tracking-wider text-ivory-muted mb-1 font-sans"
                  >
                    Special Requests (Optional)
                  </label>
                  <div className="relative">
                    <textarea
                      id="res-special-request"
                      rows={2}
                      value={formData.specialRequest}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          specialRequest: e.target.value,
                        })
                      }
                      placeholder="Birthday setup, window seat, dietary notes..."
                      className="w-full min-h-[58px] bg-[#121210] border border-[#2a2924] focus:border-champagne p-2.5 sm:p-3 rounded-sm text-base sm:text-sm text-ivory placeholder:text-ivory-muted/40 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="pt-2 pb-1">
                  <button
                    type="submit"
                    id="submit-reservation-request-btn"
                    className="w-full min-h-[46px] sm:min-h-[48px] py-3 sm:py-3.5 px-3 sm:px-4 bg-champagne hover:bg-champagne-light text-[#0c0c0b] font-sans text-xs sm:text-sm uppercase tracking-[0.14em] sm:tracking-[0.2em] font-semibold rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-[0.99] text-center"
                  >
                    <Send className="w-4 h-4 shrink-0" />
                    <span>Send Request via WhatsApp</span>
                  </button>
                  <p className="text-[10px] sm:text-[11px] text-center text-ivory-muted mt-2 font-light">
                    This prepares an instant message to DaVinci Grill (0302-3009005) for confirmation.
                  </p>
                </div>
              </form>
            </div>
          ) : (
            /* Submission State (Honest & Informative Confirmation) */
            <div className="py-4 sm:py-6 text-center overflow-y-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-champagne/15 border border-champagne flex items-center justify-center mx-auto mb-3 sm:mb-4 shrink-0">
                <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-champagne" />
              </div>

              <h3 className="font-display text-xl sm:text-2xl text-ivory tracking-wide mb-1.5">
                REQUEST PREPARED
              </h3>

              <p className="text-xs sm:text-sm text-ivory-muted max-w-md mx-auto mb-4 font-light leading-relaxed">
                Your reservation request has been composed. If WhatsApp did not open automatically, click the button below to send your request directly to DaVinci Grill.
              </p>

              {/* Structured Summary Box */}
              <div className="bg-[#121210] border border-[#2a2924] p-3.5 sm:p-4 rounded-sm text-left max-w-md mx-auto mb-5 text-xs space-y-1.5 font-sans">
                <div className="flex justify-between">
                  <span className="text-ivory-muted">Name:</span>
                  <span className="text-ivory font-medium">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ivory-muted">Contact:</span>
                  <span className="text-ivory font-medium">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ivory-muted">Date & Time:</span>
                  <span className="text-ivory font-medium">
                    {formData.date} at {formData.time}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ivory-muted">Party Size:</span>
                  <span className="text-champagne font-medium">
                    {formData.guests} {formData.guests === 1 ? 'Guest' : 'Guests'}
                  </span>
                </div>
                {preSelectedDishes.length > 0 && (
                  <div className="flex justify-between">
                    <span className="text-ivory-muted">Dishes:</span>
                    <span className="text-ivory font-medium truncate max-w-[200px]">
                      {preSelectedDishes.join(', ')}
                    </span>
                  </div>
                )}
                {formData.specialRequest.trim() && (
                  <div className="flex justify-between">
                    <span className="text-ivory-muted">Note:</span>
                    <span className="text-ivory truncate max-w-[200px]">
                      {formData.specialRequest}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
                <a
                  href={generatedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="reopen-whatsapp-btn"
                  className="w-full sm:w-auto px-5 py-3 bg-champagne hover:bg-champagne-light text-[#0c0c0b] text-xs uppercase tracking-wider font-semibold rounded-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Open in WhatsApp</span>
                </a>

                <button
                  onClick={handleResetAndClose}
                  type="button"
                  id="close-confirmation-btn"
                  className="w-full sm:w-auto px-5 py-3 border border-[#2a2924] hover:border-champagne text-ivory text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>

              <p className="text-[10px] text-ivory-muted mt-4">
                * Note: Table is subject to final host confirmation via WhatsApp.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

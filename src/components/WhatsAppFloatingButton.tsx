import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X } from 'lucide-react';

const WHATSAPP_PHONE_INTERNATIONAL = '923023009005';
const PREFILLED_MESSAGE =
  'Hello Da Vinci Grill! I would like to inquire about your restaurant, menu, and reservations. Please share more information. Thank you.';

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE_INTERNATIONAL}?text=${encodeURIComponent(
  PREFILLED_MESSAGE
)}`;

const INITIAL_DELAY_MS = 60000; // 60 seconds
const REPEAT_DELAY_MS = 60000; // 60 seconds
const AUTO_DISMISS_DURATION_MS = 10000; // 10 seconds auto-hide
const TYPING_RETRY_DELAY_MS = 15000; // 15 seconds retry if user is typing
const SESSION_INTERACTION_KEY = 'davinci_whatsapp_interacted_session';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const showTimerRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);
  const hasInteractedRef = useRef(false);

  // Keep refs synchronized with state to prevent stale closures in async timeouts
  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    hasInteractedRef.current = hasInteracted;
  }, [hasInteracted]);

  // Clear all pending timers safely
  const clearAllTimers = useCallback(() => {
    if (showTimerRef.current) {
      clearTimeout(showTimerRef.current);
      showTimerRef.current = null;
    }
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  // Check if visitor is actively typing in any input, textarea, or contentEditable element
  const isUserTyping = useCallback((): boolean => {
    if (typeof document === 'undefined') return false;
    const activeEl = document.activeElement;
    if (!activeEl) return false;
    const tagName = activeEl.tagName?.toLowerCase();
    if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
      return true;
    }
    return (activeEl as HTMLElement).isContentEditable || false;
  }, []);

  // Schedule auto-hide of the tooltip after a duration
  const scheduleHide = useCallback(
    (duration: number = AUTO_DISMISS_DURATION_MS) => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
      hideTimerRef.current = setTimeout(() => {
        // If user is currently hovering or focusing on the button/tooltip, postpone hiding
        if (isHoveredRef.current) {
          scheduleHide(4000);
          return;
        }
        setIsOpen(false);
        hideTimerRef.current = null;

        // If user hasn't clicked/interacted with WhatsApp yet, schedule next appearance in 60s
        if (!hasInteractedRef.current) {
          scheduleShow(REPEAT_DELAY_MS);
        }
      }, duration);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // Schedule showing the tooltip
  const scheduleShow = useCallback(
    (delay: number = REPEAT_DELAY_MS) => {
      if (hasInteractedRef.current) return;
      if (showTimerRef.current) {
        clearTimeout(showTimerRef.current);
      }

      showTimerRef.current = setTimeout(() => {
        // Check if session has been flagged as already interacted
        if (hasInteractedRef.current) return;

        // Check if user is actively typing in a form or interacting with the button
        if (isUserTyping() || isHoveredRef.current) {
          // Delay respectfully so we never interrupt form input
          scheduleShow(TYPING_RETRY_DELAY_MS);
          return;
        }

        setIsOpen(true);
        showTimerRef.current = null;
        scheduleHide(AUTO_DISMISS_DURATION_MS);
      }, delay);
    },
    [isUserTyping, scheduleHide]
  );

  // Manual dismiss via close button
  const handleDismiss = useCallback(
    (e?: React.MouseEvent) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      clearAllTimers();
      setIsOpen(false);

      // Re-trigger after 60 seconds as mandated
      if (!hasInteractedRef.current) {
        scheduleShow(REPEAT_DELAY_MS);
      }
    },
    [clearAllTimers, scheduleShow]
  );

  // When user clicks the WhatsApp button to contact
  const handleWhatsAppClick = useCallback(() => {
    // Record interaction in session so repeated popups are paused
    try {
      sessionStorage.setItem(SESSION_INTERACTION_KEY, 'true');
    } catch {
      // Ignore storage errors in restricted iframes
    }
    setHasInteracted(true);
    hasInteractedRef.current = true;
    clearAllTimers();
    setIsOpen(false);
  }, [clearAllTimers]);

  // Lifecycle initialization & cleanup
  useEffect(() => {
    // Check if previously interacted during this browser session
    try {
      if (sessionStorage.getItem(SESSION_INTERACTION_KEY) === 'true') {
        setHasInteracted(true);
        hasInteractedRef.current = true;
        return;
      }
    } catch {
      // Storage access may be restricted
    }

    // Schedule initial appearance after 60 seconds
    scheduleShow(INITIAL_DELAY_MS);

    return () => {
      clearAllTimers();
    };
  }, [clearAllTimers, scheduleShow]);

  return (
    <aside
      id="whatsapp-floating-contact"
      aria-label="Direct WhatsApp Contact & Inquiries"
      className="fixed z-40 right-4 sm:right-7 bottom-[72px] sm:bottom-7 flex flex-col items-end pointer-events-none select-none"
    >
      {/* 
        Recurring Inquiry Tooltip / Popup Notification 
        Positioned directly above the button, aligned with right edge so it never overflows offscreen
      */}
      {isOpen && (
        <div
          id="whatsapp-inquiry-tooltip"
          role="status"
          aria-live="polite"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="pointer-events-auto mb-3 max-w-[270px] sm:max-w-[300px] w-auto animate-in fade-in slide-in-from-bottom-2 duration-300 motion-reduce:animate-none"
        >
          <div className="relative bg-[#141412] text-[#f7f5f0] border border-[#c89d66]/50 rounded-lg p-3.5 sm:p-4 shadow-[0_12px_32px_rgba(0,0,0,0.85)] flex items-start gap-3 backdrop-blur-md">
            {/* WhatsApp Green Icon Indicator */}
            <div className="w-7 h-7 rounded-full bg-[#25D366] shrink-0 flex items-center justify-center text-white shadow-md mt-0.5">
              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </div>

            {/* Notification Copy & Direct Link */}
            <div className="flex-1 pr-1">
              <span className="block font-sans text-[10px] tracking-[0.2em] uppercase text-champagne font-semibold mb-0.5">
                DaVinci Grill
              </span>
              <p className="font-sans text-xs sm:text-[13px] text-ivory leading-snug">
                For More Inquiry, Chat with us on WhatsApp.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-1 font-sans text-xs text-[#25D366] hover:text-[#2ee272] font-medium mt-1.5 transition-colors focus:outline-none focus-visible:underline"
              >
                <span>Start chat</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* Dismiss Close Button */}
            <button
              type="button"
              onClick={handleDismiss}
              id="whatsapp-tooltip-dismiss"
              aria-label="Dismiss WhatsApp inquiry notification"
              className="text-ivory-muted hover:text-ivory p-1 rounded transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-champagne shrink-0 -mr-1 -mt-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Downward pointer triangle pointing towards the WhatsApp button */}
            <div
              className="absolute -bottom-2 right-5 sm:right-6 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[8px] border-t-[#c89d66]/50"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-[7px] right-5 sm:right-6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[7px] border-t-[#141412]"
              aria-hidden="true"
            />
          </div>
        </div>
      )}

      {/* 
        Official WhatsApp Circular Floating Action Button 
        - High contrast official WhatsApp green (#25D366)
        - Official WhatsApp phone speech bubble vector logo
        - Subtle gold/champagne ring to complement Da Vinci Grill luxury aesthetic
        - Accessible focus-visible rings and screen-reader label
      */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        id="floating-whatsapp-btn"
        role="button"
        aria-label="Contact Da Vinci Grill on WhatsApp"
        className="pointer-events-auto group relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_6px_24px_rgba(37,211,102,0.45)] border-2 border-champagne/40 hover:border-champagne transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-champagne/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0b] motion-reduce:transition-none motion-reduce:hover:scale-100"
      >
        {/* Pulsing gentle ring animation */}
        <span
          className="absolute inset-0 rounded-full border border-[#25D366] opacity-75 animate-ping pointer-events-none motion-reduce:hidden"
          style={{ animationDuration: '3s' }}
          aria-hidden="true"
        />

        {/* Official WhatsApp Logo Icon */}
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="currentColor"
          className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-sm transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </aside>
  );
};

// src/components/Testimonials.jsx
import React, { useState, useEffect, useRef } from "react";

const ITEMS = [
  {
    name: "Rohan K.",
    quote: "I lost 8 kg in 8 weeks — life changed. Trainer was motivating and precise.",
    rating: 5,
  },
  {
    name: "Aisha P.",
    quote: "Perfect plans and accountability. I feel stronger every week.",
    rating: 5,
  },
  {
    name: "Vikram S.",
    quote: "Great guidance for diet and workouts. Real results.",
    rating: 4,
  },
];

const AUTOPLAY_INTERVAL = 5000; // 5s

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const containerRef = useRef(null);
  const autoplayRef = useRef(null);

  const next = () => setIndex((v) => (v + 1) % ITEMS.length);
  const prev = () => setIndex((v) => (v - 1 + ITEMS.length) % ITEMS.length);
  const goTo = (i) => setIndex(Math.max(0, Math.min(i, ITEMS.length - 1)));

  // keyboard arrow nav
  useEffect(() => {
    const handle = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);

  // autoplay (resets when user interacts)
  useEffect(() => {
    // respect reduced motion
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    if (isPaused) {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
      return;
    }

    autoplayRef.current = setInterval(() => {
      setIndex((v) => (v + 1) % ITEMS.length);
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
  }, [isPaused]);

  // touch handlers for swipe
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
      setIsPaused(true); // pause autoplay while interacting
    };

    const onTouchMove = (e) => {
      // prevent default horizontal overscroll on small devices if needed
    };

    const onTouchEnd = (e) => {
      const start = touchStartX.current;
      if (start == null) {
        setIsPaused(false);
        return;
      }
      const end = (e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientX) || null;
      if (end == null) {
        setIsPaused(false);
        return;
      }
      const diff = end - start;
      const threshold = 40; // px
      if (diff > threshold) {
        prev();
      } else if (diff < -threshold) {
        next();
      }
      touchStartX.current = null;
      // resume autoplay after short timeout
      setTimeout(() => setIsPaused(false), 800);
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  const item = ITEMS[index];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="py-10"
    >
      <h2 id="testimonials-title" className="text-2xl font-bold">
        Testimonials
      </h2>

      <div
        ref={containerRef}
        className="mt-6 max-w-3xl bg-white/3 border border-white/10 rounded-lg p-6 mx-auto shadow-sm transition"
        role="region"
        aria-roledescription="carousel"
        aria-label="Client testimonials"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <figure className="space-y-4">
          <blockquote
            className="text-white/80 text-lg leading-relaxed animate-fade"
            aria-live="polite"
            aria-atomic="true"
          >
            “{item.quote}”
          </blockquote>

          <figcaption className="text-sm text-white/70 flex items-center gap-3">
            <span>{item.name}</span>
            <span className="sr-only">{item.rating} out of 5 stars</span>
            <span aria-hidden className="text-[#ffcb05]">
              {"★".repeat(item.rating)}{" "}
              {"☆".repeat(5 - item.rating)}
            </span>
          </figcaption>
        </figure>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => { prev(); setIsPaused(true); setTimeout(() => setIsPaused(false), 1200); }}
              aria-label="Previous testimonial"
              className="px-3 py-2 rounded-md bg-white/10 text-sm hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
            >
              Prev
            </button>

            <button
              onClick={() => { next(); setIsPaused(true); setTimeout(() => setIsPaused(false), 1200); }}
              aria-label="Next testimonial"
              className="px-3 py-2 rounded-md bg-white/10 text-sm hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
            >
              Next
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Testimonials navigation">
            {ITEMS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { goTo(idx); setIsPaused(true); setTimeout(() => setIsPaused(false), 1200); }}
                aria-label={`Go to testimonial ${idx + 1}`}
                aria-current={index === idx ? "true" : "false"}
                role="tab"
                className={`w-3 h-3 rounded-full focus:outline-none ${index === idx ? "bg-white" : "bg-white/30 hover:bg-white/50"}`}
              />
            ))}
          </div>
        </div>

        {/* Invisible live region for SRs telling which slide number */}
        <div className="sr-only" aria-live="polite">
          Slide {index + 1} of {ITEMS.length}
        </div>
      </div>

      {/* Fade animation (respects reduced-motion) */}
      <style jsx>{`
        @media (prefers-reduced-motion: no-preference) {
          .animate-fade {
            animation: fadeIn 420ms ease;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(6px); }
            to { opacity: 1; transform: translateY(0); }
          }
        }
      `}</style>
    </section>
  );
}

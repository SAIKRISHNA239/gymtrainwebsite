// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-neutral-900 text-white scroll-mt-20"
    >
      {/* Background image (decorative) */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{ willChange: "transform" }}
      >
        <picture>
          {/* large desktop */}
          <source
            media="(min-width:1024px)"
            srcSet="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1920&auto=format&fit=crop"
          />
          {/* tablet */}
          <source
            media="(min-width:640px)"
            srcSet="https://images.unsplash.com/photo-1544742792-64f7f3d0f0f6?q=80&w=1200&auto=format&fit=crop"
          />
          {/* mobile */}
          <img
            src="https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=800&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover opacity-60"
            loading="lazy"
            // decorative background has empty alt
          />
        </picture>

        {/* dim overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Image for small screens only */}
          <div className="lg:hidden">
            <img
              src="https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=800&auto=format&fit=crop"
              alt="Fitness trainer portrait"
              className="w-full h-64 sm:h-80 object-cover rounded-xl border border-white/10 shadow-sm"
              loading="lazy"
              sizes="100vw"
            />
          </div>

          {/* Text column */}
          <div className="space-y-4">
            <h1
              id="hero-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight"
            >
              Transform Your Body. <span className="text-[#ff3b30]">One Rep at a Time.</span>
            </h1>

            <p className="text-white/80 max-w-2xl text-sm sm:text-base">
              Personal training, online coaching & custom meal plans — results in weeks, not months.
            </p>

            <p className="mt-1 text-xs sm:text-sm text-white/70">200+ clients trained • 95% success rate</p>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 rounded-md bg-[#ff3b30] text-white font-medium shadow-sm hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#22c55e]"
                aria-label="Book a free session"
              >
                Book Free Session
              </a>

              <a
                href="#services"
                className="inline-flex items-center px-4 py-2 rounded-md bg-white/6 text-sm text-white/90 font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20"
                aria-label="See programs and services"
              >
                See Programs
              </a>
            </div>
          </div>

          {/* Large-screen trainer image */}
          <div className="hidden lg:flex lg:justify-center">
            <div
              className="w-full max-w-md rounded-xl overflow-hidden border border-white/10 shadow-lg"
              role="img"
              aria-label="Fitness trainer portrait"
            >
              <img
                src="https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=800&auto=format&fit=crop"
                alt="Fitness trainer portrait"
                className="w-full h-96 object-cover"
                loading="lazy"
                sizes="(min-width:1024px) 400px, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Respect reduced-motion preference */}
      <style jsx>{`
        @media (prefers-reduced-motion: no-preference) {
          .animate-fade {
            animation: fadeUp 560ms ease;
          }
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(6px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </section>
  );
}

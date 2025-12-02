// src/components/About.jsx
import React from "react";

export default function About({
  name = "Trainer Name",
  imgSrc = "https://img.freepik.com/free-photo/young-adult-doing-indoor-sport-gym_23-2149205542.jpg?semt=ais_hybrid&w=740&q=80",
  bio = "I’m [Trainer Name], an ACE-Certified personal trainer with 5+ years helping clients lose fat, build muscle, and reclaim confidence. I craft science-backed programs tailored to your lifestyle.",
  highlights = ["ACE Certified", "5+ Years Experience", "Strength, Fat Loss, Mobility"],
}) {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      <div className="prose-invert">
        <h2 id="about-title" className="text-2xl sm:text-3xl font-bold leading-tight">
          About the Trainer
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-[auto,1fr] items-start">
          <figure className="flex items-start gap-4">
            <img
              src={imgSrc}
              alt={`Headshot of ${name}`}
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border border-white/10 shadow-sm"
              loading="lazy"
              // help browsers choose image size
              sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 144px"
            />
            <figcaption className="sr-only">{name} — Trainer headshot</figcaption>
          </figure>

          <div>
            <p className="text-white/85 max-w-2xl text-sm sm:text-base">
              {bio}
            </p>

            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm" aria-label="Trainer highlights">
              {highlights.map((h, idx) => (
                <li
                  key={idx}
                  className="bg-white/5 p-3 rounded-md border border-white/6 flex items-center justify-center text-center"
                >
                  <span className="font-medium">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

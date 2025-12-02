// src/components/PricingCard.jsx
import React from "react";

export default function PricingCard({
  name = "Plan",
  price = "Contact",
  features = [],
  highlight = false,
}) {
  return (
    <article
      className={`relative h-full rounded-lg p-6 border ${
        highlight ? "ring-2 ring-[#ff3b30] border-transparent bg-gradient-to-tr from-white/5 to-white/3" : "border-white/6 bg-white/3"
      } flex flex-col`}
      aria-labelledby={`plan-${name.replace(/\s+/g, "-").toLowerCase()}`}
    >
      {highlight && (
        <span className="absolute -top-3 right-3 bg-[#ff3b30] text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
          Popular
        </span>
      )}

      <header>
        <h3 id={`plan-${name.replace(/\s+/g, "-").toLowerCase()}`} className="text-lg font-semibold">
          {name}
        </h3>
        <p className="mt-1 text-3xl font-extrabold">{price}</p>
      </header>

      <ul className="mt-4 space-y-2 text-sm text-white/80 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#22c55e]" aria-hidden />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <a
          href="#contact"
          className="inline-block w-full text-center px-4 py-2 rounded-md bg-[#ff3b30] text-white font-medium hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#22c55e]"
          aria-label={`Start ${name} plan`}
        >
          Start
        </a>
      </div>
    </article>
  );
}

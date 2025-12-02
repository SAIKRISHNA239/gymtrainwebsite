// src/components/ServiceCard.jsx
import React from "react";

export default function ServiceCard({
  icon: Icon = null,
  title = "Service",
  blurb = "",
  tag = "",
}) {
  return (
    <article
      className="bg-white/3 p-5 rounded-md transition-transform hover:-translate-y-1 focus-within:shadow-lg"
      tabIndex={0}
      aria-labelledby={`svc-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="flex items-start gap-3">
        <div className="text-[#ff3b30] flex-shrink-0" aria-hidden>
          {Icon ? <Icon size={20} /> : <svg className="w-5 h-5" aria-hidden><rect width="100%" height="100%" fill="currentColor" /></svg>}
        </div>
        <h3 id={`svc-${title.replace(/\s+/g, "-").toLowerCase()}`} className="font-semibold text-sm">
          {title}
        </h3>
      </div>

      <p className="mt-2 text-white/80 text-sm leading-relaxed">{blurb}</p>

      {tag && (
        <div className="mt-4 text-xs text-white/70" aria-hidden>
          {tag}
        </div>
      )}
    </article>
  );
}

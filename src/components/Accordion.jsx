// src/components/Accordion.jsx
import React, { useState, useRef, useEffect } from "react";

/**
 * items = [{ q: string, a: string }]
 */
export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);
  const refs = useRef([]);

  const toggle = (i) => {
    setOpenIndex((v) => (v === i ? null : i));
  };

  const onKey = (e, i) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(i);
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = (i + 1) % items.length;
      refs.current[next]?.focus();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (i - 1 + items.length) % items.length;
      refs.current[prev]?.focus();
    }
  };

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className="rounded-lg bg-white/3 border border-white/10 overflow-hidden"
          >
            {/* Header */}
            <button
              ref={(el) => (refs.current[i] = el)}
              onClick={() => toggle(i)}
              onKeyDown={(e) => onKey(e, i)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${i}`}
              className="w-full text-left px-4 py-3 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
            >
              <span className="font-medium text-white">{item.q}</span>

              <span
                className={`transition-transform duration-200 ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
                aria-hidden
              >
                ▸
              </span>
            </button>

            {/* Panel */}
            <div
              id={`accordion-panel-${i}`}
              role="region"
              aria-labelledby={`accordion-header-${i}`}
              className={`px-4 overflow-hidden text-white/80 text-sm transition-[max-height] duration-300 ease-in-out ${
                isOpen ? "max-h-40 py-3" : "max-h-0 py-0"
              }`}
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}

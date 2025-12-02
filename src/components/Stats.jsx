// src/components/Stats.jsx
import React, { useEffect, useRef } from "react";

/**
 * useCountUp hook
 * - smooth counter using requestAnimationFrame
 * - respects prefers-reduced-motion
 * - cancels RAF on unmount
 */
function useCountUp(target = 0, { duration = 1200, start = 0 } = {}) {
  const ref = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.textContent = String(target);
      return;
    }

    let startTs = null;
    const from = Number(start) || 0;
    const to = Number(target) || 0;

    const step = (ts) => {
      if (!startTs) startTs = ts;
      const progress = Math.min(1, (ts - startTs) / duration);
      const value = Math.round(from + (to - from) * progress);
      el.textContent = String(value);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, start]);

  return ref;
}

export default function Stats() {
  const c1 = useCountUp(200);
  const c2 = useCountUp(95);
  const c3 = useCountUp(5);

  return (
    <section aria-labelledby="stats-title" className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 id="stats-title" className="sr-only">Key stats</h3>

        <div className="grid gap-6 sm:grid-cols-3 text-center">
          <div className="bg-white/3 p-6 rounded-md">
            <div
              className="text-4xl font-extrabold"
              ref={c1}
              aria-label="Clients trained"
              aria-live="polite"
              role="status"
            >
              0
            </div>
            <div className="text-white/70 mt-2">Clients trained</div>
          </div>

          <div className="bg-white/3 p-6 rounded-md">
            <div
              className="text-4xl font-extrabold"
              ref={c2}
              aria-label="Success rate"
              aria-live="polite"
              role="status"
            >
              0
            </div>
            <div className="text-white/70 mt-2">% success rate</div>
          </div>

          <div className="bg-white/3 p-6 rounded-md">
            <div
              className="text-4xl font-extrabold"
              ref={c3}
              aria-label="Years experience"
              aria-live="polite"
              role="status"
            >
              0
            </div>
            <div className="text-white/70 mt-2">Years experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}

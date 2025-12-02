// src/components/Transformations.jsx
import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import { TRANSFORMATIONS } from "../data/constants";

/**
 * Expected TRANSFORMATIONS item shape:
 * {
 *   id: '1',
 *   before: 'https://...before.jpg',
 *   after: 'https://...after.jpg',
 *   alt: 'Rohit before and after transformation',
 *   blurb: 'Lost X kg in Y weeks. Program highlights...'
 * }
 */

export default function Transformations() {
  const [active, setActive] = useState(null); // full item object when modal open
  const [afterMap, setAfterMap] = useState({}); // { [id]: boolean }
  const lastFocusedRef = useRef(null);

  // open modal and remember the last focused element to return focus later
  function openModal(item, e) {
    lastFocusedRef.current = (e && e.currentTarget) || document.activeElement;
    setActive(item);
  }

  // close modal and return focus
  function closeModal() {
    setActive(null);
    if (lastFocusedRef.current && lastFocusedRef.current.focus) {
      lastFocusedRef.current.focus();
    }
  }

  function toggleAfter(id) {
    setAfterMap((m) => ({ ...m, [id]: !m[id] }));
  }

  // small safety: prevent body scroll when modal is open (in case Modal doesn't)
  useEffect(() => {
    if (active) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [active]);

  return (
    <section id="transformations" aria-labelledby="transformations-title" className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="transformations-title" className="text-2xl font-bold">
          Transformations
        </h2>
        <p className="mt-2 text-sm text-white/70">Placeholders used. Real client photos require consent.</p>

        <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(TRANSFORMATIONS) && TRANSFORMATIONS.length ? (
            TRANSFORMATIONS.map((item) => {
              const isAfter = !!afterMap[item.id];
              const imgSrc = isAfter ? item.after : item.before;
              // optional srcSet keys (if provided in data)
              const srcSet = item.srcSet || undefined;

              return (
                <article
                  key={item.id}
                  className="bg-white/3 rounded-md overflow-hidden border border-white/10 shadow-sm"
                >
                  {/* The image button: opens modal; aria-pressed indicates current before/after toggle state */}
                  <button
                    type="button"
                    className="block w-full text-left focus:outline-none"
                    onClick={(e) => openModal(item, e)}
                    aria-label={`Open transformation details for ${item.alt || "client"}`}
                  >
                    <img
                      src={imgSrc}
                      srcSet={srcSet}
                      alt={item.alt || "Transformation photo"}
                      className="w-full h-56 object-cover"
                      loading="lazy"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    />
                  </button>

                  <div className="p-4 flex items-center justify-between gap-3">
                    <div className="text-sm text-white/80">{isAfter ? "After" : "Before"}</div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => toggleAfter(item.id)}
                        className="px-3 py-1 rounded-md bg-white/6 text-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                        aria-pressed={isAfter}
                        aria-label={isAfter ? `Show before image for ${item.alt}` : `Show after image for ${item.alt}`}
                        title={isAfter ? "Show before" : "Show after"}
                      >
                        Toggle Before/After
                      </button>

                      <button
                        type="button"
                        onClick={(e) => openModal(item, e)}
                        className="px-3 py-1 rounded-md border border-white/10 text-sm hover:bg-white/6 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                        aria-label={`View transformation details for ${item.alt}`}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </article>
              );
            })
          ) : (
            <p className="text-white/70">No transformations available right now.</p>
          )}
        </div>

        {/* Modal shows full after image + blurb */}
        <Modal open={!!active} onClose={closeModal} title={active ? "Transformation Details" : ""}>
          {active && (
            <div>
              <img
                src={active.after}
                alt={active.alt || "Transformation after image"}
                className="w-full h-auto rounded-lg border border-white/10 object-cover"
                loading="lazy"
                sizes="(max-width:640px) 100vw, 800px"
              />
              <p className="mt-3 text-white/80 text-sm">{active.blurb}</p>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}

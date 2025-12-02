// src/components/Services.jsx
import React from "react";
import { FiActivity, FiCamera, FiShoppingBag, FiUsers } from "react-icons/fi";
import ServiceCard from "./ServiceCard";
import { SERVICES as DATA } from "../data/constants";

const ICONS = { pt: FiUsers, online: FiActivity, diet: FiShoppingBag, t12: FiCamera };

export default function Services() {
  const items = Array.isArray(DATA) && DATA.length ? DATA : [];

  return (
    <section id="services" aria-labelledby="services-title" className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="services-title" className="text-2xl font-bold">Services</h2>

        {items.length === 0 ? (
          <p className="mt-4 text-white/70 text-sm">No services available right now.</p>
        ) : (
          <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((s) => (
              <ServiceCard
                key={s.title}
                icon={ICONS[s.key] || null}
                title={s.title}
                blurb={s.blurb}
                tag={s.tag}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

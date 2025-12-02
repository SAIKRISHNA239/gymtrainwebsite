// src/components/Pricing.jsx
import React from "react";
import PricingCard from "./PricingCard";
import BrochureButton from "./BrochureButton";

const PLANS = [
  {
    name: "Basic",
    price: "₹3,000 / month",
    features: ["2 sessions/week", "Basic meal plan"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹6,000 / month",
    features: ["4 sessions/week", "Detailed meal plan", "Weekly check-ins"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹12,000 / month",
    features: ["Unlimited chat", "3 workouts/week", "1:1 sessions", "Premium support"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="pricing-title" className="text-2xl font-bold">Pricing</h2>

        <p className="mt-2 text-sm text-white/70 max-w-2xl">
          Simple, transparent pricing to fit your goals — pick a plan and start today.
        </p>

        <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-3">
          {PLANS.map((p) => (
            <PricingCard key={p.name} {...p} />
          ))}
        </div>

        <div className="mt-6">
          {/* Example brochure CTA — real props will replace placeholders */}
          <BrochureButton name="Trainer Name" plan="Pro" email="contact@example.com" />
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Accordion from "./Accordion";

const FAQS = [
  {
    q: "How long until I see results?",
    a: "Most clients notice changes within 2–4 weeks, with significant progress in 8–12 weeks.",
  },
  {
    q: "Do you provide meal plans?",
    a: "Yes. Plans consider preferences, budget, and dietary restrictions.",
  },
  {
    q: "Can I train online?",
    a: "Absolutely. Online coaching includes weekly check-ins and video form checks.",
  },
  {
    q: "What if I miss sessions?",
    a: "We reschedule within the same week if slots are available. See cancellation policy in the agreement.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-10">
      <h2 id="faq-title" className="text-2xl font-bold">
        FAQ
      </h2>

      <div className="mt-6 max-w-3xl">
        <Accordion items={FAQS} />
      </div>
    </section>
  );
}

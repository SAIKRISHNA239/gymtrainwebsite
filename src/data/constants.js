// data/constants.js

export const SERVICES = [
  { key: 'pt', title: 'Personal Training', blurb: '1:1 in-person sessions with tailored workouts.', tag: 'Duration: 60m · From ₹1,000', imgQuery: 'fitness trainer portrait' },
  { key: 'online', title: 'Online Coaching', blurb: 'Custom routines & weekly check-ins.', tag: 'Duration: 12 weeks · From ₹3,000', imgQuery: 'online coaching workout laptop' },
  { key: 'diet', title: 'Custom Diet Plans', blurb: 'Macros & meal prep guidance.', tag: '4-week plan · From ₹1,500', imgQuery: 'healthy meal prep top view' },
  { key: 't12', title: '12-Week Transformation', blurb: 'Progress tracking & support.', tag: '12 weeks · From ₹12,000', imgQuery: 'fitness transformation before after' },
];

export const PLANS = [
  { name: 'Basic', price: '₹3,000 / month', features: ['2 sessions/week', 'Basic meal plan'], highlight: false },
  { name: 'Pro', price: '₹6,000 / month', features: ['4 sessions/week', 'Detailed meal plan', 'Weekly check-ins'], highlight: true },
  { name: 'Premium', price: '₹12,000 / month', features: ['Unlimited chat', '3 workouts/week', '1:1 sessions', 'Premium support'], highlight: false },
];

export const TESTIMONIALS = [
  // replace avatarUrl with selected headshot URLs (circle crop)
  { name: 'Rohan K.', quote: 'I lost 8 kg in 8 weeks — life changed. Trainer was motivating and precise.', rating: 5, avatarQuery: 'male headshot fitness' },
  { name: 'Aisha P.', quote: 'Perfect plans and accountability. I feel stronger every week.', rating: 5, avatarQuery: 'female headshot fitness smiling' },
  { name: 'Vikram S.', quote: 'Great guidance for diet and workouts. Real results.', rating: 4, avatarQuery: 'male headshot gym' },
];

export const TRANSFORMATIONS = [
  {
    id: 1,
    // using local public images
    before: '/images/t1-before.jpg',
    after: '/images/t1-after.jpg',
    alt: 'Before/After transformation - fat loss',
    blurb: 'Client goal: fat loss. Time: 12 weeks. Result: -8 kg, improved strength.',
  },
  {
    id: 2,
    before: '/images/t2-before.jpg',
    after: '/images/t2-after.jpg',
    alt: 'Before/After transformation - muscle gain',
    blurb: 'Client goal: muscle gain. Time: 16 weeks. Result: +5 kg lean mass.',
  },
  {
    id: 3,
    before: '/images/t3-before.jpg',
    after: '/images/t3-after.jpg',
    alt: 'Before/After transformation - mobility & tone',
    blurb: 'Client goal: mobility & tone. Time: 10 weeks. Result: pain-free squats.',
  },
];

export const FAQS = [
  { q: 'How long until I see results?', a: 'Most clients notice changes within 2–4 weeks, with significant progress in 8–12 weeks.' },
  { q: 'Do you provide meal plans?', a: 'Yes. Plans consider preferences, budget, and dietary restrictions.' },
  { q: 'Can I train online?', a: 'Absolutely. Online coaching includes weekly check-ins and video form checks.' },
  { q: 'What if I miss sessions?', a: 'We reschedule within the same week if slots are available. See cancellation policy in the agreement.' },
];

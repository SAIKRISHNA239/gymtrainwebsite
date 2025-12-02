import { FiPhoneCall, FiClipboard, FiActivity } from 'react-icons/fi'

const STEPS = [
  { icon: FiPhoneCall, title: 'Free consult', text: 'Tell me your goals, schedule, and preferences.' },
  { icon: FiClipboard, title: 'Custom plan', text: 'Training + meal plan tailored to your lifestyle.' },
  { icon: FiActivity, title: 'Train & track', text: 'We execute, review weekly, and track progress.' },
]

export default function HowItWorks() {
  return (
    <div>
      <h2 id="how-title" className="heading">How It Works</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {STEPS.map((s) => (
          <div key={s.title} className="card p-5">
            <div className="text-[#22c55e]" aria-hidden>{s.icon && <s.icon size={22} />}</div>
            <h3 className="mt-2 font-bold">{s.title}</h3>
            <p className="text-sm text-white/80">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

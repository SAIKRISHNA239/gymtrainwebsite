import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(prefersDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <button className="btn btn-secondary" onClick={() => setDark((d) => !d)} aria-pressed={dark}>
      {dark ? 'Dark' : 'Light'}
    </button>
  )
}

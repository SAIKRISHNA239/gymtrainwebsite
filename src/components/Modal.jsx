import { useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import useLockBodyScroll from '../hooks/useLockBodyScroll'

export default function Modal({ open, onClose, children, title }) {
  useLockBodyScroll(open)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={title}>
      <div className="card max-w-2xl w-full">
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="font-bold">{title}</h3>
          <button aria-label="Close modal" className="p-2 rounded hover:bg-white/10" onClick={onClose}>
            <FiX />
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

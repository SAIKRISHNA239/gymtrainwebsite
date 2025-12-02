import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../components/Header'

describe('Header', () => {
  it('renders nav links and CTA', () => {
    render(<Header />)
    expect(screen.getByText('GYM TRAINER')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Book Free Session/i })).toBeInTheDocument()
  })

  it('opens mobile menu', () => {
    render(<Header />)
    const button = screen.getByRole('button', { name: /open menu/i })
    fireEvent.click(button)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
})

import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from '../components/ContactForm'

describe('ContactForm', () => {
  it('validates required fields', () => {
    render(<ContactForm />)
    fireEvent.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText(/Please fill all required fields/i)).toBeInTheDocument()
  })

  it('submits successfully with valid inputs', () => {
    render(<ContactForm />)
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John' } })
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText(/Preferred time/i), { target: { value: 'Morning' } })
    fireEvent.change(screen.getByLabelText(/Location/i), { target: { value: 'Online' } })
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hi' } })
    fireEvent.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText(/Thanks! Your request is received./i)).toBeInTheDocument()
  })
})

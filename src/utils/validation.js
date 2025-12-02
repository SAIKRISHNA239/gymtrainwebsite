export function validateContact(values) {
  const errors = {}
  if (!values.name?.trim()) errors.name = 'Name is required'
  if (!values.email?.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.email = 'Valid email is required'
  if (values.phone && !values.phone.match(/^[0-9+\-()\s]{7,}$/)) errors.phone = 'Invalid phone'
  if (!values.message?.trim()) errors.message = 'Please add a short message'
  if (!values.preferredTime) errors.preferredTime = 'Select a preferred time'
  if (!values.location) errors.location = 'Select a location'
  return errors
}

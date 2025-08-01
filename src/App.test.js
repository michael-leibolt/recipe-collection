import { render, screen } from '@testing-library/react'
import App from './App'

describe('BoyAreDeez', () => {
  it('renders a home page with some recipes', () => {
    const app = render(<App />)

    const headerElement = app.getByText('My Recipes')

    expect(headerElement).toBeInTheDocument();
  })

})
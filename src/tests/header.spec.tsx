import { fireEvent, render, within } from '@testing-library/react'
import { Header } from '../components/header'

describe('Header', () => {
  it('should display the correct menu options', () => {
    const wrapper = render(<Header />)

    const headerNav = wrapper.getByTestId('header-nav-list')

    const homeOption = within(headerNav).getByText(/home/i)
    const promoOption = within(headerNav).getByText(/promoção/i)
    const menuOption = within(headerNav).getByText(/cardápio/i)
    const commentsOption = within(headerNav).getByText(/comentários/i)
    const contactOption = within(headerNav).getByText(/contato/i)

    expect(homeOption).toBeInTheDocument()
    expect(promoOption).toBeInTheDocument()
    expect(menuOption).toBeInTheDocument()
    expect(commentsOption).toBeInTheDocument()
    expect(contactOption).toBeInTheDocument()
  })

  it('should navigate to the correct section', () => {
    const wrapper = render(<Header />)

    const headerNav = wrapper.getByTestId('header-nav-list')

    const homeOption = within(headerNav).getByText(/home/i)
    const promoOption = within(headerNav).getByText(/promoção/i)
    const menuOption = within(headerNav).getByText(/cardápio/i)
    const commentsOption = within(headerNav).getByText(/comentários/i)
    const contactOption = within(headerNav).getByText(/contato/i)

    fireEvent.click(homeOption)

    expect(window.location.hash).toBe('#home')

    fireEvent.click(promoOption)

    expect(window.location.hash).toBe('#offers')

    fireEvent.click(menuOption)

    expect(window.location.hash).toBe('#menu')

    fireEvent.click(commentsOption)

    expect(window.location.hash).toBe('#our-royalty')

    fireEvent.click(contactOption)

    expect(window.location.hash).toBe('#contact')
  })
})

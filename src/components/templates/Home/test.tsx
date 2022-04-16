import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/helpers/tests'

import Home from '.'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home />)

    const menu = screen.getByLabelText(/open menu/i)
    expect(menu).toBeInTheDocument()

    const contact = screen.getByRole('heading', { name: /contact/i })
    expect(contact).toBeInTheDocument()
  })

  it('should render a News Section', () => {
    renderWithTheme(<Home />)

    const heading = screen.getByRole('heading', { name: /news/i })
    expect(heading).toBeInTheDocument()
  })

  it('should render a Most Popular Section', () => {
    renderWithTheme(<Home />)

    const heading = screen.getByRole('heading', { name: /most popular/i })
    expect(heading).toBeInTheDocument()
  })

  it('should render a Upcoming Section', () => {
    renderWithTheme(<Home />)

    const heading = screen.getByRole('heading', { name: /upcoming/i })
    expect(heading).toBeInTheDocument()
  })

  it('should render a Free Games Section', () => {
    renderWithTheme(<Home />)

    const heading = screen.getByRole('heading', { name: /free games/i })
    expect(heading).toBeInTheDocument()
  })
})

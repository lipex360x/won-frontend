import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/helpers/tests'

import items from './mock'

import Home from '.'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...items} />)

    const menu = screen.getByLabelText(/open menu/i)
    expect(menu).toBeInTheDocument()

    const footer = screen.getByRole('heading', { name: /contact/i })
    expect(footer).toBeInTheDocument()

    const headingNews = screen.getByRole('heading', { name: /news/i })
    expect(headingNews).toBeInTheDocument()

    const headingMostPopular = screen.getByRole('heading', {
      name: /most popular/i
    })
    expect(headingMostPopular).toBeInTheDocument()

    const headingUpcomming = screen.getByRole('heading', { name: /Upcomming/i })
    expect(headingUpcomming).toBeInTheDocument()

    const headingFreeGames = screen.getByRole('heading', {
      name: /free games/i
    })
    expect(headingFreeGames).toBeInTheDocument()

    const banner = screen.getAllByText(/defy death 2/i)
    expect(banner).toHaveLength(1)

    const cardGames = screen.getAllByText(/population zero/i)
    expect(cardGames).toHaveLength(20)

    const highlight = screen.getAllByText(/red dead/i)
    expect(highlight).toHaveLength(3)
  })
})

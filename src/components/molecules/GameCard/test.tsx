import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers/tests'

import GameCard, { GameCardProps } from '.'

const props = {
  title: 'GameCard',
  developer: 'Rockstar Games',
  img: 'imgs/game.jpg',
  price: '200'
} as GameCardProps

describe('<GameCard />', () => {
  it('should render the heading', () => {
    const { debug, container } = renderWithTheme(<GameCard {...props} />)

    const gameCard = screen.getByRole('heading', { name: /GameCard/i })

    debug(container)

    expect(gameCard).toBeInTheDocument()
  })
})

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
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    const title = screen.getByRole('heading', { name: /GameCard/i })
    const developer = screen.getByRole('heading', { name: /Rockstar Games/i })
    const image = screen.getByRole('img', { name: props.title })
    const wishIcon = screen.getByLabelText('Add to Wishlist')
    // const price = screen.getByRole('', { name: /Rockstar Games/i })

    expect(title).toBeInTheDocument()
    expect(developer).toBeInTheDocument()
    expect(image).toHaveAttribute('src', props.img)
    expect(wishIcon).toBeInTheDocument()
  })
})

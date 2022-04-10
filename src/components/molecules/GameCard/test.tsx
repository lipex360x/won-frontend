import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers/tests'

import GameCard, { GameCardProps } from '.'

const props = {
  title: 'GameCard',
  developer: 'Rockstar Games',
  img: 'imgs/game.jpg',
  price: 'R$200,00'
} as GameCardProps

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    const title = screen.getByRole('heading', { name: /GameCard/i })
    const developer = screen.getByRole('heading', { name: /Rockstar Games/i })
    const image = screen.getByRole('img', { name: props.title })
    const wishIcon = screen.getByLabelText('Add to Wishlist')

    expect(title).toBeInTheDocument()
    expect(developer).toBeInTheDocument()
    expect(image).toHaveAttribute('src', props.img)
    expect(wishIcon).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText('R$200,00')

    expect(price).not.toHaveStyle({ 'text-decoration': 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: '#3CD3C1' })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$180,00" />)

    const price = screen.getByText('R$200,00')
    const promotionalPrice = screen.getByText('R$180,00')

    expect(price).toHaveStyle({ 'text-decoration': 'line-through' })
    expect(promotionalPrice).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    const wishIcon = screen.getByLabelText('Remove from Wishlist')
    expect(wishIcon).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()

    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    const button = screen.getAllByRole('button')[0]

    fireEvent.click(button)

    expect(onFav).toBeCalled()
  })
})

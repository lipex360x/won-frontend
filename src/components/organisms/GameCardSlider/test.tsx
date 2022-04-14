import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers/tests'

import GameCardSlider from '.'

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
]

describe('<GameSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)

    const slider = container.querySelectorAll('.slick-active')
    expect(slider).toHaveLength(4)
  })

  it('should render white arrows by default', () => {
    renderWithTheme(<GameCardSlider items={items} />)

    const prevArrow = screen.getByLabelText(/previous games/i)
    expect(prevArrow).toHaveStyle({ color: '#FAFAFA' })

    const nextArrow = screen.getByLabelText(/next games/i)
    expect(nextArrow).toHaveStyle({ color: '#FAFAFA' })
  })

  it('should render black arrows if this color is passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="black" />)

    const prevArrow = screen.getByLabelText(/previous games/i)
    expect(prevArrow).toHaveStyle({ color: '#030517' })

    const nextArrow = screen.getByLabelText(/next games/i)
    expect(nextArrow).toHaveStyle({ color: '#030517' })
  })
})

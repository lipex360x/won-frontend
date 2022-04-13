import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers/tests'

import BannerSlider, { BannerSliderProps } from '.'

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

describe('<BannerSlider />', () => {
  it('should render vertical Slider', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    const verticalBanner = container.querySelector('.slick-vertical')

    expect(verticalBanner).toBeInTheDocument()
  })

  it('should render with one active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    const slickSlide = container.querySelectorAll('.slick-slide')
    expect(slickSlide).toHaveLength(2)

    const slideActive = container.querySelectorAll('li.slick-active')
    expect(slideActive).toHaveLength(1)

    const slideShow = screen.getByRole('heading', {
      name: /defy death 1/i,
      hidden: false
    })
    expect(slideShow).toBeInTheDocument()

    const slideHide = screen.getByRole('heading', {
      name: /defy death 2/i,
      hidden: true
    })
    expect(slideHide).toBeInTheDocument()
  })
})

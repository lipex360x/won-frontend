import 'match-media-mock'

import { screen } from '@testing-library/react'
import { Settings } from 'react-slick'
import { renderWithTheme } from 'utils/helpers/tests'

import SliderWrapper from '.'

const horizontalSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
} as Settings

describe('<SliderWrapper />', () => {
  it('should render children as slider item', () => {
    const { container } = renderWithTheme(
      <SliderWrapper settings={horizontalSettings}>
        <p>item 1</p>
        <p>item 2</p>
      </SliderWrapper>
    )

    const slide1 = screen.getByText(/item 1/i)
    const slide2 = screen.getByText(/item 2/i)

    expect(slide1.parentElement?.parentElement).toHaveClass('slick-slide')
    expect(slide2.parentElement?.parentElement).toHaveClass('slick-slide')

    expect(container.firstChild).toMatchSnapshot()
  })
})

import SliderWrapper, { SliderSettings } from 'components/bosons/SliderWrapper'
import Banner, { BannerProps } from 'components/molecules/Banner'

import * as S from './styles'

export type BannerSliderProps = {
  items: BannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,

  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <SliderWrapper settings={settings}>
      {items.map((item) => (
        <Banner key={item.title} {...item} />
      ))}
    </SliderWrapper>
  </S.Wrapper>
)

export default BannerSlider

import SlickSlider, { Settings } from 'react-slick'

import * as S from './styles'

export type SliderSettings = Settings

export type SliderWrapperProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const SliderWrapper = ({ children, settings }: SliderWrapperProps) => (
  <S.Wrapper>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </S.Wrapper>
)

export default SliderWrapper

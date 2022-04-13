import { Story, Meta } from '@storybook/react'
import SliderWrapper, { SliderWrapperProps } from '.'
import theme from 'styles/theme'
import { Settings } from 'react-slick'
import styled from 'styled-components'

const parameters = {
  backgrounds: {
    default: 'white',
    values: [
      { name: 'main', value: `${theme.colors.mainBg}` },
      { name: 'white', value: `${theme.colors.white}` },
      { name: 'black', value: `${theme.colors.black}` }
    ]
  }
}

export default {
  component: SliderWrapper,
  title: 'Design System/bosons/SliderWrapper',
  parameters
} as Meta

const horizontalSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
} as Settings

const verticalSettings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
} as Settings

const Slide = styled.div`
  background: gray;
  padding: 30rem;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const Horizontal: Story<SliderWrapperProps> = () => (
  <SliderWrapper settings={horizontalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
    <Slide>7</Slide>
  </SliderWrapper>
)

export const Vertical: Story<SliderWrapperProps> = () => (
  <SliderWrapper settings={verticalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
    <Slide>7</Slide>
  </SliderWrapper>
)

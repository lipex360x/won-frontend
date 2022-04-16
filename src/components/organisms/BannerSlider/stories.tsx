import { Story, Meta } from '@storybook/react'

import BannerSlider, { BannerSliderProps } from '.'
import theme from 'styles/theme'

import items from './mock'

const parameters = {
  backgrounds: {
    default: 'main',
    values: [
      { name: 'main', value: `${theme.colors.mainBg}` },
      { name: 'white', value: `${theme.colors.white}` },
      { name: 'dark', value: `${theme.colors.black}` }
    ]
  },
  layout: 'fullscreen'
}

export default {
  component: BannerSlider,
  title: 'Design System/organisms/BannerSlider',
  args: { items },
  parameters
} as Meta

export const Mobile: Story<BannerSliderProps> = (args) => (
  <div>
    <BannerSlider {...args} />
  </div>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
}

export const Default: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)

import { Story, Meta } from '@storybook/react'
import GameCardSlider, { GameCardSliderProps } from '.'
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
  component: GameCardSlider,
  title: 'Design System/organisms/GameCardSlider',
  args: { items },
  parameters
} as Meta

export const Mobile: Story<GameCardSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider {...args} />
  </div>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
}

export const Default: Story<GameCardSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider {...args} />
  </div>
)

import { Story, Meta } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

import theme from 'styles/theme'

const props = {
  title: 'GameCard',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$200,00',
  promotionalPrice: 'R$160,00'
} as GameCardProps

const parameters = {
  backgrounds: {
    default: 'main',
    values: [
      { name: 'main', value: `${theme.colors.mainBg}` },
      { name: 'white', value: `${theme.colors.white}` },
      { name: 'dark', value: `${theme.colors.black}` }
    ]
  }
}

export default {
  component: GameCard,
  title: 'Design System/molecules/GameCard',
  args: props,
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  },
  parameters
} as Meta

export const Mobile: Story<GameCardProps> = (args) => <GameCard {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}

export const Desktop: Story<GameCardProps> = (args) => (
  <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
    <GameCard {...args} />
  </div>
)

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}

import { Story, Meta } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

import theme from 'styles/theme'

const props = {
  title: 'GameCard',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: '200'
} as GameCardProps

const parameters = {
  backgrounds: {
    default: 'main',
    values: [
      { name: 'main', value: `${theme.colors.mainBg}` },
      { name: 'white', value: `${theme.colors.white}` },
      { name: 'black', value: `${theme.colors.black}` }
    ]
  }
}

export default {
  component: GameCard,
  title: 'Design System/molecules/GameCard',
  args: props,
  parameters
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
    <GameCard {...args} />
  </div>
)

export const Mobile: Story<GameCardProps> = (args) => <GameCard {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}

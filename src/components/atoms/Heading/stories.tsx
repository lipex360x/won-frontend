import { Story, Meta } from '@storybook/react'
import theme from 'styles/theme'

import Heading, { HeadingProps } from '.'

const props = {
  children: 'Most Popular'
} as HeadingProps

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
  component: Heading,
  title: 'Design System/atoms/Heading',
  args: props,
  parameters
} as Meta

export const Mobile: Story<HeadingProps> = (args) => <Heading {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
}

export const Desktop: Story<HeadingProps> = (args) => <Heading {...args} />

import { Story, Meta } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

const props = {
  title: "Red Dead it's back",
  subtitle: 'Come see now',
  backgroundImage: 'img/red-dead-img.jpg',
  buttonLabel: 'Buy now',
  buttonLink: '/rds'
}

const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#F8F8F8' },
      { name: 'dark', value: '#333' }
    ]
  }
  // layout: 'fullscreen',
}

export default {
  component: Highlight,
  title: 'Highlight',
  args: props,
  parameters
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />

export const Mobile: Story<HighlightProps> = (args) => <Highlight {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}

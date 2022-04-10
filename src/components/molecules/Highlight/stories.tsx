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
}

export default {
  component: Highlight,
  title: 'Design System/molecules/Highlight',
  args: props,
  parameters
} as Meta

export const Mobile: Story<HighlightProps> = (args) => <Highlight {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
}

export const Desktop: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}

import { Story, Meta } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  component: Highlight,
  title: 'Highlight',
  args: {
    title: "Red Dead it's back",
    subtitle: 'Come see now',
    buttonLabel: 'Buy now',
    buttonLink: '/rds'
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F8F8F8' },
        { name: 'dark', value: '#333' }
      ]
    }
    // layout: 'fullscreen',
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />

export const Mobile: Story<HighlightProps> = (args) => <Highlight {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}

import { Story, Meta } from '@storybook/react'
import Menu from '.'

export default {
  component: Menu,
  title: 'Menu'
} as Meta

export const Mobile: Story = (args) => <Menu {...args} />
Mobile.args = {
  title: 'Menu'
}

Mobile.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  },
  viewport: {
    defaultViewport: 'mobile1'
  }
}

export const Desktop: Story = (args) => <Menu {...args} />
Desktop.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}

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
  viewport: {
    defaultViewport: 'mobile1'
  }
}

export const Basic: Story = (args) => <Menu {...args} />

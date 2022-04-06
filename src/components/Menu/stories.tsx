import { Story, Meta } from '@storybook/react'
import Menu from '.'

export default {
  component: Menu,
  title: 'Menu'
} as Meta

export const Default: Story = (args) => <Menu {...args} />
Default.args = {
  title: 'Menu'
}

export const Basic: Story = (args) => <Menu {...args} />

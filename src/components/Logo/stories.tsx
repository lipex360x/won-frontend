import { Story, Meta } from '@storybook/react'
import Logo from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Basic: Story = (args) => <Logo {...args} />
Basic.args = {
  title: 'Logo'
}

export const Default: Story = (args) => <Logo {...args} />

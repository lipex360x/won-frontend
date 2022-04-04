import { Story, Meta } from '@storybook/react'
import Button from '.'

export default {
  component: Button,
  title: 'Button'
} as Meta

export const Basic: Story = (args) => <Button {...args} />
Basic.args = {
  title: 'Button'
}

export const Default: Story = (args) => <Button {...args} />

import { Story, Meta } from '@storybook/react'
import Button from '.'

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Basic: Story = (args) => <Button {...args} />
Basic.args = {
  children: 'Buy Now'
}

export const Default: Story = (args) => <Button {...args} />

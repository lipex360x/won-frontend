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

export const Default: Story = (args) => <Button {...args} />
Default.args = {
  children: 'Buy Now'
}

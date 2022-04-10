import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'

import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

const props = {
  children: 'Buy Now'
} as ButtonProps

export default {
  component: Button,
  title: 'Design System/atom/Button',
  args: props,
  argTypes: {
    icon: {
      type: 'symbol'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div>
    <Button {...args} />
  </div>
)

export const withIcon: Story = (args) => (
  <div>
    <Button {...args} />
  </div>
)

withIcon.args = {
  size: 'small',
  icon: <AddShoppingCart />
}

export const asLink: Story = (args) => (
  <div>
    <Button {...args} />
  </div>
)

asLink.args = {
  size: 'large',
  as: 'a',
  href: '/link'
}

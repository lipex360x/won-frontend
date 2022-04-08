import { Story, Meta } from '@storybook/react'
import Button from '.'

import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'symbol'
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />
Default.args = {
  children: 'Buy Now'
}

export const withIcon: Story = (args) => <Button {...args} />
withIcon.args = {
  children: 'Buy Now',
  size: 'small',
  icon: <AddShoppingCart />
}

export const asLink: Story = (args) => <Button {...args} />
asLink.args = {
  children: 'Buy Now',
  size: 'large',
  as: 'a',
  href: '/link'
}

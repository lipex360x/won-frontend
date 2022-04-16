import { Story, Meta } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import theme from 'styles/theme'

import Button, { ButtonProps } from '.'

const props = {
  children: 'Buy Now'
} as ButtonProps

const parameters = {
  backgrounds: {
    default: 'white',
    values: [
      { name: 'main', value: `${theme.colors.mainBg}` },
      { name: 'white', value: `${theme.colors.white}` },
      { name: 'dark', value: `${theme.colors.black}` }
    ]
  },
  viewport: {
    defaultViewport: 'mobile2'
  }
}

export default {
  component: Button,
  title: 'Design System/atoms/Button',
  args: props,
  argTypes: {
    icon: {
      type: 'symbol'
    }
  },
  parameters
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

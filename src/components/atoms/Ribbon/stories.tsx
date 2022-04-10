import { Story, Meta } from '@storybook/react'
import theme from 'styles/theme'

import Ribbon, { RibbonProps } from '.'

const props = {
  children: 'Best Seller'
}

const parameters = {
  backgrounds: {
    default: 'white',
    values: [
      { name: 'main', value: `${theme.colors.mainBg}` },
      { name: 'white', value: `${theme.colors.white}` },
      { name: 'black', value: `${theme.colors.black}` }
    ]
  }
}

export default {
  component: Ribbon,
  title: 'Design System/atoms/Ribbon',
  args: props,
  parameters
} as Meta

export const Default: Story<RibbonProps> = (args) => (
  <div
    style={{
      margin: '0 auto',
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args} />
  </div>
)

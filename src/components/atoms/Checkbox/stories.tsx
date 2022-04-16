import { Story, Meta } from '@storybook/react'
import Checkbox, { CheckboxProps } from '.'
import theme from 'styles/theme'

import props from './mock'

const parameters = {
  backgrounds: {
    default: 'main',
    values: [
      { name: 'main', value: `${theme.colors.mainBg}` },
      { name: 'white', value: `${theme.colors.white}` },
      { name: 'dark', value: `${theme.colors.black}` }
    ]
  }
  // layout: 'fullscreen',
}

export default {
  component: Checkbox,
  title: 'Design System/atoms/Checkbox',
  args: props,
  argTypes: {
    onCheck: { action: 'checked' }
  },
  parameters
} as Meta

export const Mobile: Story<CheckboxProps> = (args) => (
  <div>
    <Checkbox {...args} />
  </div>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
}

export const Default: Story<CheckboxProps> = (args) => (
  <div>
    <Checkbox {...args} />
  </div>
)
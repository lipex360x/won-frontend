import { Story, Meta } from '@storybook/react'
import TextField, { TextfieldProps } from '.'
import theme from 'styles/theme'

import props from './mock'

const parameters = {
  backgrounds: {
    default: 'white',
    values: [
      { name: 'main', value: `${theme.colors.mainBg}` },
      { name: 'white', value: `${theme.colors.white}` },
      { name: 'dark', value: `${theme.colors.black}` }
    ]
  }
}

export default {
  component: TextField,
  title: 'Design System/atoms/form/TextField',
  args: props,
  argTypes: {
    onInput: { action: 'changed' }
  },
  parameters
} as Meta

export const Mobile: Story<TextfieldProps> = (args) => (
  <div>
    <TextField {...args} />
  </div>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
}

export const Default: Story<TextfieldProps> = (args) => (
  <div>
    <TextField {...args} />
  </div>
)

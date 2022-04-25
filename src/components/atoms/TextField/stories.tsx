import { Story, Meta } from '@storybook/react'
import TextField, { TextfieldProps } from '.'
import theme from 'styles/theme'

import props from './mock'
import { Email } from 'styled-icons/material-outlined'

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
    onInput: { action: 'changed' },
    icon: { type: 'symbol' }
  },
  parameters
} as Meta

export const withIcon: Story<TextfieldProps> = (args) => (
  <div>
    <TextField {...args} />
  </div>
)

withIcon.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
}

export const withError: Story<TextfieldProps> = (args) => (
  <div>
    <TextField {...args} icon={<Email />} />
  </div>
)

withError.args = { error: 'Oopssss... something is wrong' }

withError.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
}

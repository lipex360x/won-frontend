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
    onInput: { action: 'changed' }
  },
  parameters
} as Meta

export const Default: Story<TextfieldProps> = (args) => (
  <div>
    <TextField {...args} />
  </div>
)

Default.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
}

export const withIcon: Story<TextfieldProps> = (args) => (
  <div>
    <TextField {...args} icon={<Email />} />
  </div>
)

withIcon.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
}

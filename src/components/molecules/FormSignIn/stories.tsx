import { Story, Meta } from '@storybook/react'
import FormSignIn, { FormsigninProps } from '.'
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
  // layout: 'fullscreen',
}

export default {
  component: FormSignIn,
  title: 'Design System/molecules/form/FormSignIn',
  args: props,
  parameters
} as Meta

export const Mobile: Story<FormsigninProps> = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignIn />
  </div>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
}

export const Default: Story<FormsigninProps> = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignIn />
  </div>
)

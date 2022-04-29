import { Story, Meta } from '@storybook/react'
import FormSignUp from '.'
import theme from 'styles/theme'

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
  component: FormSignUp,
  title: 'Design System/molecules/form/FormSignUp',
  parameters
} as Meta

export const Mobile: Story = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignUp />
  </div>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
}

export const Default: Story = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignUp />
  </div>
)

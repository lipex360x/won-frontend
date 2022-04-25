import { Story, Meta } from '@storybook/react'
import Auth, { AuthTemplateProps } from '.'
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
  component: Auth,
  title: 'Design System/templates/Auth',
  args: props,
  parameters
} as Meta

export const Mobile: Story<AuthTemplateProps> = (args) => (
  <div>
    <Auth {...args} />
  </div>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
}

export const Default: Story<AuthTemplateProps> = (args) => (
  <div>
    <Auth {...args} />
  </div>
)

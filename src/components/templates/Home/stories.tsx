import { Story, Meta } from '@storybook/react'
import Home, { HomeTemplateProps } from '.'
import theme from 'styles/theme'

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
  component: Home,
  title: 'Design System/templates/Home',
  parameters
} as Meta

export const Mobile: Story<HomeTemplateProps> = () => (
  <div>
    <Home />
  </div>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
}

export const Default: Story<HomeTemplateProps> = () => (
  <div>
    <Home />
  </div>
)

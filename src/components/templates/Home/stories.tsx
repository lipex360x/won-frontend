import { Story, Meta } from '@storybook/react'
import Home, { HomeProps } from '.'
import theme from 'styles/theme'

const props: HomeProps = {
  title: 'Home'
}

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
  component: Home,
  title: 'Design System/templates/Home',
  args: props,
  parameters
} as Meta

export const Mobile: Story<HomeProps> = (args) => (
  <div>
    <Home {...args} />
  </div>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
}

export const Default: Story<HomeProps> = (args) => (
  <div>
    <Home {...args} />
  </div>
)

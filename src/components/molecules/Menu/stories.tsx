import { Story, Meta } from '@storybook/react'
import theme from 'styles/theme'

import Menu from '.'

const parameters = {
  backgrounds: {
    default: 'main',
    values: [
      { name: 'main', value: `${theme.colors.mainBg}` },
      { name: 'white', value: `${theme.colors.white}` },
      { name: 'black', value: `${theme.colors.black}` }
    ]
  }
}

export default {
  component: Menu,
  title: 'Design System/molecules/Menu',
  parameters
} as Meta

export const Mobile: Story = (args) => <Menu {...args} />

Mobile.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'mobile2'
  }
}

export const Desktop: Story = (args) => <Menu {...args} />
Desktop.parameters = {
  layout: 'fullscreen'
}

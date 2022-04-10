import { Story, Meta } from '@storybook/react'
import theme from 'styles/theme'

import Footer from '.'

const parameters = {
  backgrounds: {
    default: 'white',
    values: [
      { name: 'main', value: `${theme.colors.mainBg}` },
      { name: 'white', value: `${theme.colors.white}` },
      { name: 'black', value: `${theme.colors.black}` }
    ]
  }
}

export default {
  component: Footer,
  title: 'Design System/molecules/Footer',
  parameters
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer {...args} />
  </div>
)

export const Mobile: Story = (args) => <Footer {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
}

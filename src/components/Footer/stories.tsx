import { Story, Meta } from '@storybook/react'
import Footer from '.'

export default {
  component: Footer,
  title: 'Footer'
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer {...args} />
  </div>
)

Default.args = {
  title: 'Footer'
}

Default.parameters = {
  backgrounds: {
    default: 'light'
  }
}

export const Mobile: Story = (args) => <Footer {...args} />

Mobile.args = {
  title: 'Footer'
}

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}

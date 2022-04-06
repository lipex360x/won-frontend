import { Story, Meta } from '@storybook/react'
import Menu from '.'

export default {
  component: Menu,
  title: 'Menu'
} as Meta

export const Mobile: Story = (args) => <Menu {...args} />
Mobile.args = {
  title: 'Menu'
}

Mobile.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
    // values: [
    //   { name: 'dark', value: '#000', default: true },
    //   { name: 'red', value: '#f00' },
    //   { name: 'green', value: '#0f0' },
    //   { name: 'blue', value: '#00f' }
    // ]
  },
  viewport: {
    defaultViewport: 'mobile1'
  }
}

export const Desktop: Story = (args) => <Menu {...args} />
Desktop.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}

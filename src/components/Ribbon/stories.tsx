import { Story, Meta } from '@storybook/react'
import Ribbon, { RibbonProps } from '.'

export default {
  component: Ribbon,
  title: 'Ribbon',
  args: {
    children: 'Best Seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F8F8F8' },
        { name: 'dark', value: '#333' }
      ]
    }
    // layout: 'fullscreen'
  }
} as Meta

export const Default: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args} />
  </div>
)

export const Mobile: Story<RibbonProps> = (args) => <Ribbon {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}

import { Story, Meta } from '@storybook/react'
import Banner, { BannerProps } from '.'

export default {
  component: Banner,
  title: 'Banner',
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    backgrounds: {
      default: 'blue',
      values: [
        { name: 'light', value: '#F8F8F8' },
        { name: 'dark', value: '#333' },
        { name: 'blue', value: '#06092B' }
      ]
    }
  }
} as Meta

export const Default: Story<BannerProps> = (args) => <Banner {...args} />

export const Mobile: Story<BannerProps> = (args) => <Banner {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  },
  layout: 'fullscreen'
}

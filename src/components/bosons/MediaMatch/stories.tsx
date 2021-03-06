import { Story, Meta } from '@storybook/react'
import MediaMatch from '.'

export default {
  component: MediaMatch,
  title: 'Design System/bosons/MediaMatch'
} as Meta

export const Mobile: Story = () => (
  <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
)
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
}

export const Desktop: Story = () => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
)

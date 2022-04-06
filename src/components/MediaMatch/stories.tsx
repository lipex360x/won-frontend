import { Story, Meta } from '@storybook/react'
import MediaMatch from '.'

export default {
  component: MediaMatch,
  title: 'MediaMatch'
} as Meta

export const Desktop: Story = () => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
)

export const Mobile: Story = () => (
  <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
)
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
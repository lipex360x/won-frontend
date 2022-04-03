import { Story, Meta } from '@storybook/react'
import Heading from '.'

export default {
  title: 'Heading',
  component: Heading
} as Meta

export const Basic: Story = (args) => <Heading {...args} />
Basic.args = {
  title: 'Heading'
}

export const Default: Story = (args) => <Heading {...args} />

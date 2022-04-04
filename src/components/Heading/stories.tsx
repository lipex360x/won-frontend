import { Story, Meta } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  component: Heading,
  title: 'Heading',
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />
Default.args = {
  children: 'Most Poplars'
}

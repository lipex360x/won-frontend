import { Story, Meta } from '@storybook/react'
import Radio, { RadioProps } from '.'
import theme from 'styles/theme'

const parameters = {
  backgrounds: {
    default: 'main',
    values: [
      { name: 'main', value: `${theme.colors.mainBg}` },
      { name: 'white', value: `${theme.colors.white}` },
      { name: 'dark', value: `${theme.colors.black}` }
    ]
  },
  viewport: {
    defaultViewport: 'mobile2'
  },
  layout: 'fullscreen'
}

export default {
  component: Radio,
  title: 'Design System/atoms/Radio',
  parameters
} as Meta

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        label="First"
        labelFor="first"
        id="first"
        name="name"
        value="first"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="Second"
        labelFor="second"
        id="second"
        name="name"
        value="second"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="Third"
        labelFor="third"
        id="third"
        name="name"
        value="third"
        {...args}
      />
    </div>
  </>
)

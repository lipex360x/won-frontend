import { Story, Meta } from '@storybook/react'
import Checkbox, { CheckboxProps } from '.'
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
  component: Checkbox,
  title: 'Design System/atoms/form/Checkbox',
  argTypes: {
    onCheck: { action: 'checked' }
  },
  parameters
} as Meta

export const Default: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Action"
        labelFor="action"
        isChecked
        {...args}
      />
    </div>

    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Adventure"
        labelFor="adventure"
        {...args}
      />
    </div>

    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Strategy"
        labelFor="strategy"
        {...args}
      />
    </div>
  </>
)

Default.parameters = {}

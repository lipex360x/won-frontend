import { Story, Meta } from '@storybook/react/types-6-0'
import theme from 'styles/theme'

import Logo, { LogoProps } from '.'

const parameters = {
  backgrounds: {
    default: 'main',
    values: [
      { name: 'main', value: `${theme.colors.mainBg}` },
      { name: 'white', value: `${theme.colors.white}` },
      { name: 'dark', value: `${theme.colors.black}` }
    ]
  }
}

export default {
  title: 'Design system/atoms/Logo',
  component: Logo,
  parameters
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />

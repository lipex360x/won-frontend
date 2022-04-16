import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/helpers/tests'

import Checkbox from '.'

import props from './mock'

describe('<Checkbox />', () => {
  it('should render the heading', () => {
    const { debug, container } = renderWithTheme(<Checkbox {...props} />)
  })
})

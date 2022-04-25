import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/helpers/tests'

import Auth from '.'

import props from './mock'

describe('<Auth />', () => {
  it('should render the heading', () => {
    const { debug, container } = renderWithTheme(<Auth {...props} />)

    const auth = screen.getByRole('heading', { name: /Auth/i })

    debug(container)

    expect(auth).toBeInTheDocument()
  })
})

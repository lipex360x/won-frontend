import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'

const props = {
  title: 'Highlight'
}

describe('<Highlight />', () => {
  it('should render the heading', () => {
    const { debug, container } = renderWithTheme(<Highlight {...props} />)

    const highlight = screen.getByRole('heading', { name: /Highlight/i })

    debug(container)

    expect(highlight).toBeInTheDocument()
  })
})

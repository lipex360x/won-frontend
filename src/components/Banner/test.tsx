import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

describe('<Banner />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Banner title="Banner" />)

    const banner = screen.getByRole('heading', { name: /Banner/i })

    expect(banner).toBeInTheDocument()
  })
})

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers/tests'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    const ribbon = screen.getByText(/best seller/i)

    expect(ribbon).toBeInTheDocument()
  })

  it('should render with primary color', () => {
    renderWithTheme(<Ribbon color="primary">Best Seller</Ribbon>)

    const ribbon = screen.getByText(/best seller/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#F231A5' })
  })

  it('should render with secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>)

    const ribbon = screen.getByText(/best seller/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
  })

  it('should with the normal size as default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    const ribbon = screen.getByText(/best seller/i)

    expect(ribbon).toHaveStyle({ height: '3.6rem', fontSize: '1.4rem' })
  })

  it('should with the small size', () => {
    renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>)

    const ribbon = screen.getByText(/best seller/i)

    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  })
})

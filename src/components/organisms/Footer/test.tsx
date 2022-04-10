import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers/tests'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 column topics', () => {
    const { container } = renderWithTheme(<Footer />)

    const contact = screen.getByRole('heading', { name: /contact/i })
    expect(contact).toBeInTheDocument()

    const followUs = screen.getByRole('heading', { name: /follow us/i })
    expect(followUs).toBeInTheDocument()

    const links = screen.getByRole('heading', { name: /links/i })
    expect(links).toBeInTheDocument()

    const location = screen.getByRole('heading', { name: /location/i })
    expect(location).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

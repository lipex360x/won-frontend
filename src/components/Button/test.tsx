import { render, screen } from '@testing-library/react'
// import { renderWithTheme } from 'utils/tests/helpers'
// import 'jest-styled-components'

import Button from '.'

describe('<Button />', () => {
  it('should render the heading', () => {
    const { container } = render(<Button />)

    expect(screen.getByRole('heading', { name: /Button/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

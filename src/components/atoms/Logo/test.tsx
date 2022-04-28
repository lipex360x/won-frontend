import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers/tests'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)

    const logo = screen.getByLabelText(/Won Games/i)
    expect(logo.parentElement).toHaveStyle({ color: '#fafafa' })
  })

  it('should render a normal logo by default', () => {
    renderWithTheme(<Logo />)

    const logo = screen.getByLabelText(/Won Games/i)
    expect(logo.parentElement).toHaveStyle({ width: '11rem' })
  })

  it('should render the logo with id passed', () => {
    const { container } = renderWithTheme(<Logo id="myId" />)

    const logo = container.querySelector('#fill_myId')
    expect(logo).toBeInTheDocument()
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)

    const logo = screen.getByLabelText(/Won Games/i)
    expect(logo.parentElement).toHaveStyle({ color: '#030517' })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)

    const logo = screen.getByLabelText(/Won Games/i)
    expect(logo.parentElement).toHaveStyle({ width: '20rem' })
  })

  it('should render a bigger logo without text if hideOnmobile', () => {
    renderWithTheme(<Logo hideOnMobile />)

    const logo = screen.getByLabelText(/Won Games/i)
    expect(logo.parentElement).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
  })
})

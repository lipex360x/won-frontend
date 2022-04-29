import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/helpers/tests'

import FormSignIn from '.'

// import props from './mock'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignIn />)

    const inputName = screen.getByPlaceholderText(/name/i)
    expect(inputName).toBeInTheDocument()

    const inputEmail = screen.getByPlaceholderText(/email/i)
    expect(inputEmail).toBeInTheDocument()

    const inputPassword = screen.getByPlaceholderText('Password')
    expect(inputPassword).toBeInTheDocument()

    const inputConfirmPassword = screen.getByPlaceholderText('Confirm Password')
    expect(inputConfirmPassword).toBeInTheDocument()

    const button = screen.getByRole('button', { name: /sign up now/i })
    expect(button).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the text to sign in', () => {
    renderWithTheme(<FormSignIn />)

    const accountText = screen.getByText(/already have an account/i)
    expect(accountText).toBeInTheDocument()

    const signInLink = screen.getByRole('link', {
      name: /sign in/i
    })
    expect(signInLink).toBeInTheDocument()
  })
})

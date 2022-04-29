import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/helpers/tests'

import FormSignIn from '.'

// import props from './mock'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignIn />)

    const inputEmail = screen.getByPlaceholderText(/email/i)
    expect(inputEmail).toBeInTheDocument()

    const inputPassword = screen.getByPlaceholderText(/password/i)
    expect(inputPassword).toBeInTheDocument()

    const button = screen.getByRole('button', { name: /sign in now/i })
    expect(button).toBeInTheDocument()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    const forgotLink = screen.getByRole('link', {
      name: /forgot your password/i
    })
    expect(forgotLink).toBeInTheDocument()
  })

  it('should render the text to sign up', () => {
    renderWithTheme(<FormSignIn />)

    const accountText = screen.getByText(/don't have an account/i)
    expect(accountText).toBeInTheDocument()

    const signUpLink = screen.getByRole('link', {
      name: /sign up/i
    })
    expect(signUpLink).toBeInTheDocument()
  })
})

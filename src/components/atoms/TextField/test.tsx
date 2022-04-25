import 'match-media-mock'
import { screen, waitFor } from '@testing-library/react'
import { Email } from 'styled-icons/material-outlined'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/helpers/tests'

import TextField from '.'

import props from './mock'

describe('<TextField />', () => {
  it('should render with label', () => {
    renderWithTheme(<TextField {...props} />)

    const textfield = screen.getByLabelText(/e-mail/i)

    expect(textfield).toBeInTheDocument()
  })

  it('should render without label', () => {
    renderWithTheme(<TextField />)

    const textfield = screen.queryByLabelText(/e-mail/i)

    expect(textfield).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextField {...props} />)

    const textfield = screen.getByPlaceholderText(/john@doe.com/i)

    expect(textfield).toBeInTheDocument()
  })

  it('should render with a initial value', () => {
    renderWithTheme(<TextField {...props} initialValue="hello" />)

    const textfield = screen.getByDisplayValue(/hello/i)

    expect(textfield).toBeInTheDocument()
  })

  it('should change its value when typing', async () => {
    const onInput = jest.fn()

    renderWithTheme(<TextField onInput={onInput} {...props} />)

    const textfield = screen.getByRole('textbox')
    const text = 'This is a new text'

    await userEvent.type(textfield, text)

    await waitFor(() => {
      expect(textfield).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })

    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('should be able to navigate with tab', async () => {
    renderWithTheme(<TextField {...props} initialValue="e-mail" />)

    const textfield = screen.getByLabelText(/e-mail/i)

    expect(document.body).toHaveFocus()

    await userEvent.tab()

    expect(textfield).toHaveFocus()
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <TextField {...props} icon={<Email data-testid="icon" />} />
    )

    const textfield = screen.getByLabelText(/e-mail/i)
    const icon = screen.getByTestId('icon')

    expect(textfield).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
    expect(icon.parentElement).toHaveStyle({ order: 0 })
  })

  it('should render with icon on the right side', () => {
    renderWithTheme(
      <TextField
        {...props}
        icon={<Email data-testid="icon" />}
        iconPosition="right"
      />
    )

    const icon = screen.getByTestId('icon')
    expect(icon.parentElement).toHaveStyle({ order: 1 })
  })

  it('should render a disabled version', async () => {
    const onInput = jest.fn()

    renderWithTheme(<TextField {...props} disabled />)

    const textfield = screen.getByRole('textbox')

    expect(textfield).toBeDisabled()

    const text = 'This is a new text'

    await userEvent.type(textfield, text)

    await waitFor(() => {
      expect(textfield).not.toHaveValue(text)
      expect(onInput).not.toHaveBeenCalledTimes(text.length)
    })

    expect(onInput).not.toHaveBeenCalledWith(text)
  })

  it('should render a error version', () => {
    renderWithTheme(<TextField {...props} error="something is wrong" />)

    const textError = screen.getByText(/something is wrong/i)

    expect(textError).toBeInTheDocument()
    expect(textError).toHaveStyle({ color: '#FF6347' })
  })
})

import 'match-media-mock'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/helpers/tests'

import Checkbox from '.'

import theme from 'styles/theme'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    const { container } = renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" />
    )

    const input = screen.getByRole('checkbox')
    expect(input).toBeInTheDocument()

    const labelText = screen.getByLabelText(/checkbox label/i)
    expect(labelText).toBeInTheDocument()

    const label = screen.getByText(/checkbox label/i)
    expect(label).toHaveAttribute('for', 'check')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without label', () => {
    renderWithTheme(<Checkbox />)

    const input = screen.getByRole('checkbox')
    expect(input).toBeInTheDocument()

    const label = screen.queryByLabelText('Checkbox')
    expect(label).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    )

    const label = screen.getByText(/checkbox label/i)
    expect(label).toHaveStyle({ color: theme.colors.black })
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()
    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    const input = screen.getByRole('checkbox')

    await userEvent.click(input)

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()
    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} isChecked />)

    expect(onCheck).not.toHaveBeenCalled()

    const input = screen.getByRole('checkbox')

    await userEvent.click(input)

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be accessible with tab', async () => {
    renderWithTheme(<Checkbox label="Checkbox" labelFor="checkbox" />)

    expect(document.body).toHaveFocus()

    await userEvent.tab()

    const input = screen.getByRole('checkbox')

    expect(input).toHaveFocus()
  })
})

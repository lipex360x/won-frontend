import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/helpers/tests'

import Auth from '.'

import props from './mock'

describe('<Auth />', () => {
  it('should render logos, title and children', () => {
    renderWithTheme(
      <Auth {...props}>
        <input type="text" />
      </Auth>
    )

    const logos = screen.getAllByRole('img', { name: /won games/i })
    expect(logos).toHaveLength(2)

    const heading1 = screen.getByRole('heading', { name: /auth title/i })
    expect(heading1).toBeInTheDocument()

    const heading2 = screen.getByRole('heading', {
      name: /all your favorite games/i
    })
    expect(heading2).toBeInTheDocument()

    const subtitle = screen.getByRole('heading', {
      name: /won is the best and/i
    })
    expect(subtitle).toBeInTheDocument()

    const footer = screen.getByText(/todos os direitos reservados/i)
    expect(footer).toBeInTheDocument()

    const children = screen.getByRole('textbox')
    expect(children).toBeInTheDocument()
  })
})

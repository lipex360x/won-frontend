import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'

const props = {
  title: 'heading',
  subtitle: 'subtitile',
  buttonLabel: 'Buy now',
  buttonLink: '/rds'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...props} />)

    const heading = screen.getByRole('heading', { name: /heading/i })
    const subtitle = screen.getByRole('heading', { name: /subtitile/i })
    const button = screen.getByRole('link', { name: /buy now/i })

    expect(heading).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
})

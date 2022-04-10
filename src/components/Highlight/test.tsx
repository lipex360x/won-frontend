import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'

const props = {
  title: "Red Dead it's back",
  subtitle: 'Come see now',
  backgroundImage: 'img/red-dead-img.jpg',
  buttonLabel: 'Buy now',
  buttonLink: '/rds'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...props} />)

    const heading = screen.getByRole('heading', { name: /Red Dead/i })
    const subtitle = screen.getByRole('heading', { name: /Come see/i })
    const button = screen.getByRole('link', { name: /buy now/i })

    expect(heading).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })
})

export default props

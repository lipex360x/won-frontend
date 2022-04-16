import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/helpers/tests'

import Home, { HomeProps } from '.'

const props: HomeProps = {
  title: 'Home'
}

describe('<Home />', () => {
  it('should render the heading', () => {
    const { debug, container } = renderWithTheme(<Home {...props} />)

    const home = screen.getByRole('heading', { name: /Home/i })

    debug(container)

    expect(home).toBeInTheDocument()
  })
})

import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/helpers/tests'

import Container, { ContainerProps } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { debug, container } = renderWithTheme(<Container {...props} />)

    const container = screen.getByRole('heading', { name: /Container/i })

    debug(container)

    expect(container).toBeInTheDocument()
  })
})

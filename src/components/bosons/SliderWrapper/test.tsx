import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers/tests'

import SliderWrapper, { SliderWrapperProps } from '.'

const props = {
  title: 'SliderWrapper'
} as SliderWrapperProps

describe('<SliderWrapper />', () => {
  it('should render the heading', () => {
    const { debug, container } = renderWithTheme(<SliderWrapper {...props} />)

    const sliderwrapper = screen.getByRole('heading', { name: /SliderWrapper/i })

    debug(container)

    expect(sliderwrapper).toBeInTheDocument()
  })
})

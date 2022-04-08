import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'
import Ribbom from 'components/Ribbon'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    const title = screen.getByRole('heading', { name: /Defy death/i })
    const subtitle = screen.getByRole('heading', { name: /CrashLands season/i })
    const img = screen.getByLabelText('Defy death')

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(img).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  })
})

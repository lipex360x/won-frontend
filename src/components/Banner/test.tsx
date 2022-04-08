import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Banner {...props} />)

    const title = screen.getByRole('heading', { name: /Defy death/i })
    const subtitle = screen.getByRole('heading', { name: /CrashLands season/i })
    const img = screen.getByLabelText('Defy death')

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(img).toBeInTheDocument()
  })
})

import Heading from 'components/atoms/Heading'
import { Container } from 'components/bosons/Container'
import Footer from 'components/organisms/Footer'
import Menu from 'components/organisms/Menu'

import * as S from './styles'

export type HomeProps = {
  title?: string
}

const Home = () => (
  <section>
    <Container>
      <Menu />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        News
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Most Popular
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Upcoming
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Free Games
      </Heading>
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home

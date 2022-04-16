import Heading from 'components/atoms/Heading'
import { Container } from 'components/bosons/Container'
import Footer from 'components/organisms/Footer'
import Menu from 'components/organisms/Menu'

import { BannerProps } from 'components/molecules/Banner'
import { GameCardProps } from 'components/molecules/GameCard'
import Highlight, { HighlightProps } from 'components/molecules/Highlight'

import * as S from './styles'

import BannerSlider from 'components/organisms/BannerSlider'
import GameCardSlider from 'components/organisms/GameCardSlider'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighligth,
  upcommingMoreGames,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <BannerSlider items={banners} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        News
      </Heading>

      <GameCardSlider items={newGames} color="black" />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Most Popular
      </Heading>

      <Highlight {...mostPopularHighlight} />
      <GameCardSlider items={mostPopularGames} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Upcoming
      </Heading>

      <GameCardSlider items={upcommingGames} />
      <Highlight {...upcommingHighligth} />
      <GameCardSlider items={upcommingMoreGames} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Free Games
      </Heading>

      <Highlight {...freeHighligth} />
      <GameCardSlider items={freeGames} />
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home

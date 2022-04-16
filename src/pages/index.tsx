import Home, { HomeTemplateProps } from 'components/templates/Home'

import bannersMock from 'components/organisms/BannerSlider/mock'
import gamesMock from 'components/organisms/GameCardSlider/mock'
import highLightMock from 'components/molecules/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highLightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighligth: highLightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: highLightMock
    }
  }
}

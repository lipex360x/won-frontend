import * as S from './styles'

export type HomeProps = {
  title?: string
}

const Home = ({ title = 'Home' }: HomeProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)

export default Home

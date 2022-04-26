import Heading from 'components/atoms/Heading'
import Logo from 'components/atoms/Logo'
import dateTransform from 'utils/dateTransform'

import * as S from './styles'

export type AuthTemplateProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthTemplateProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Logo />

        <div>
          <Heading color="white">All your favorite games in one place</Heading>

          <S.Subtitle>
            <strong>WON</strong> is the best and most complete gaming platform.
          </S.Subtitle>
        </div>

        <S.Footer>
          Won Games {dateTransform.format({ date: new Date(), format: 'YYYY' })}{' '}
          © Todos os Direitos Reservados
        </S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Logo color="black" size="large" />

        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth

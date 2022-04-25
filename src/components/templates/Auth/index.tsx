import * as S from './styles'

export type AuthTemplateProps = {
  title?: string
}

const Auth = ({ title = 'Auth' }: AuthTemplateProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)

export default Auth

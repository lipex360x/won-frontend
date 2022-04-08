import * as S from './styles'

export type HighlightProps = {
  title?: string
}

const Highlight = ({ title = 'Highlight' }: HighlightProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)

export default Highlight

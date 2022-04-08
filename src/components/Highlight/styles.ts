import styled, { css } from 'styled-components'
// import media from 'styled-media-query'

import { HighlightProps } from '.'

export const Wrapper = styled.div<HighlightProps>`
  ${({ theme }) => css``}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
`

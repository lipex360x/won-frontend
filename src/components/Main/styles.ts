import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    width: 100%;
    height: 100%;
    padding: 3rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    ${media.greaterThan('large')`
      font-size: 3.5rem;
    `}
    font-size: ${theme.font.sizes.xxlarge};
  `}
`

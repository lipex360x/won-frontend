import styled, { css } from 'styled-components'
// import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css``}
`

type ImageProps = {
  src: string
}
export const Image = styled.div<ImageProps>`
  ${({ theme }) => css``}
`

export const Caption = styled.div`
  ${({ theme }) => css``}
`

export const Title = styled.h2`
  ${({ theme }) => css``}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css``}
`

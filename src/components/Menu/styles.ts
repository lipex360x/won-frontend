import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} 0;
    display: flex;
    align-items: center;
    position: relative;
  `}
`

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    `}
  `}
`
export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;

    & div:last-child {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    opacity: ${isOpen ? 1 : 0};
  `}
`

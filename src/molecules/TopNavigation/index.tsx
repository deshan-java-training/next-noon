import React, { useContext } from 'react'
import styled, { useTheme } from 'styled-components'
import { MdHomeFilled } from 'react-icons/md'
import { MdFavorite } from 'react-icons/md'
import { media } from '@/styles/ThemeConfig'
import { FavoriteContext } from '@/context/Context'

const MainContainer = styled.nav`
display: none;
visibility none;
  ${media.desktop} {
    z-index: 100;
    visibility: shown;
    position: fixed;
    top: 0;
    background-color: ${(props) => props.theme.colors.pink};
    display: flex;
    color: ${(props) => props.theme.colors.white};
    width: 100%;
    left: 0;
    height: 3rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

`
const ButtonContainer = styled.nav`
  border: none;
  display: flex;
  align-items: center;
  width: 100%;
`
const LogoContainer = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  margin-right: 4rem;
  font-family: ${(props) => props.theme.fonts.logo};
  font-weight: bold;
  flex-grow: 1;
`
const LinkContainer = styled.div`
  display: flex;
`
const LinkText = styled.div`
  font-family: ${(props) => props.theme.fonts.items};
  font-weight: bold;
  margin-right: 0.5rem;
`
const NavLink = styled.button<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  border: none;
  width: 10rem;
  justify-content: center;
  height: 100%;
  background-color: ${(props) => props.theme.colors.pink};
  cursor: pointer;
  color: ${(props) =>
    props.isSelected ? props.theme.colors.selected : 'white'};
  font-size: 1rem;
`

const TopNavigation = () => {
  const theme: any = useTheme()
  const { isFavorite, setIsFavorite } = useContext(FavoriteContext)

  return (
    <MainContainer>
      <LogoContainer>
        <a>E-Commerce Store</a>
      </LogoContainer>
      <LinkContainer>
        <ButtonContainer>
          <NavLink
            isSelected={!isFavorite}
            onClick={() => setIsFavorite(false)}
          >
            <LinkText>HOME</LinkText>

            <MdHomeFilled size={22} />
          </NavLink>
        </ButtonContainer>
        <ButtonContainer>
          <NavLink isSelected={isFavorite} onClick={() => setIsFavorite(true)}>
            <LinkText>FAVORITES</LinkText>

            <MdFavorite size={22} fill={theme.colors.white} />
          </NavLink>
        </ButtonContainer>
      </LinkContainer>
    </MainContainer>
  )
}

export default TopNavigation

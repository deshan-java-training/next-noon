import React, { useContext } from 'react'
import styled, { useTheme } from 'styled-components'
import { MdHomeFilled } from 'react-icons/md'
import { MdFavorite } from 'react-icons/md'
import { media } from '@/styles/ThemeConfig'
import { FavoriteContext } from '@/context/Context'

const MainContainer = styled.nav`
  position: fixed;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.pink};
  display: flex;
  color: ${(props) => props.theme.colors.white};
  width: calc(100% - 10px);
  left: 5px;
  z-index: 100;
  ${media.desktop} {
    display: none;
    visibility: hidden;
  }
`
const ButtonContainer = styled.nav`
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 3.2rem;
`
const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 100%;
  background-color: ${(props) => props.theme.colors.pink};
`

const BottomNavigation = () => {
  const theme: any = useTheme()
  const { isFavorite, setIsFavorite } = useContext(FavoriteContext)
  return (
    <MainContainer>
      <ButtonContainer>
        <NavButton type='button' onClick={() => setIsFavorite(false)}>
          <MdHomeFilled
            size={25}
            fill={isFavorite ? theme.colors.white : theme.colors.selected}
            type={'dasdsa'}
          />
        </NavButton>
      </ButtonContainer>
      <ButtonContainer>
        <NavButton type='button' onClick={() => setIsFavorite(true)}>
          <MdFavorite
            size={25}
            fill={isFavorite ? theme.colors.selected : theme.colors.white}
            type={'dasdsa'}
          />
        </NavButton>
      </ButtonContainer>
    </MainContainer>
  )
}

export default BottomNavigation

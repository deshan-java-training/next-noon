import { createGlobalStyle, ThemeProvider } from 'styled-components'

export interface iThemeInterface {
  colors: {
    white: string
    pink: string
    blue: string
    selected: string
  }
  fonts: {
    menu: string
    logo: string
    items: string
  }
}

export const media = {
  desktop: '@media(min-width: 1000px)'
}

export const theme: iThemeInterface = {
  colors: {
    white: '#fefefe',
    pink: '#fb609b',
    blue: '#4754bc',
    selected: '#3b3938'
  },
  fonts: {
    menu: 'Malgun Gothic, sans-serif',
    logo: 'Lucida Handwriting, sans-serif',
    items: 'system-ui, sans-serif'
  }
}

export const GlobalStyles = createGlobalStyle` 
body { 
  margin: 0px 5px 3.2rem 5px;
  ${media.desktop} {
    margin: 3rem 0px 0px 0px;
  }
  padding: 0px;
    background-color: white; 
color: black; 
font-family: Lato, Arial, Roboto, sans-serif; transition: all 0.50s linear`

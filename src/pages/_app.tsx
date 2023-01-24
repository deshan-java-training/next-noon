import NavContext from '@/context/Context'
import { GlobalStyles, theme } from '@/styles/ThemeConfig'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <NavContext>
          <Component {...pageProps} />
        </NavContext>
      </ThemeProvider>
    </>
  )
}

import Head from 'next/head'
import React, { FC } from 'react'
import styled from 'styled-components'
import Navigation from '../organisms/Navigation'

type LayoutProps = {
  children: JSX.Element
}

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: white;
`
const BodyContainer = styled.main`
  flex-grow: 1;
`

const MainLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>E-Commerce Application</title>
        <meta name='information' content='E-Commerce Project'></meta>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <Container>
        <Navigation />
        <BodyContainer>{children}</BodyContainer>
      </Container>
    </>
  )
}
export default MainLayout

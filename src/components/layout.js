import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import { rhythm, scale } from "../utils/typography"

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    color: #1f1a51;
    height: 100%;
    background-color: #fff200;
  }

  #___gatsby {
    height: 100%;
  }
`
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  background-color: #fff200;
`

const StyledLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const H1 = styled.h1`
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`

function RootHeader({ title }) {
  return (
    <H1
      style={{
        ...scale(1.5),
      }}
    >
      <StyledLink to={`/`}>{title}</StyledLink>
    </H1>
  )
}

const H3 = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
`

function PostHeader({ title }) {
  return (
    <H3>
      <StyledLink to={`/`}>{title}</StyledLink>
    </H3>
  )
}

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <Container>
      <GlobalStyle />
      <header>
        {location.pathname === rootPath ? (
          <RootHeader title={title} />
        ) : (
          <PostHeader title={title} />
        )}
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Container>
  )
}

export default Layout

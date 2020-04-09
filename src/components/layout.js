import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../utils/theme";

import { rhythm, scale } from "../utils/typography"

import MoonIcon from '../../content/assets/moon.svg';
import SunIcon from '../../content/assets/sun.svg';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    color: ${({ theme }) => theme.text};
    height: 100%;
    background-color: ${({ theme }) => theme.body};
    transition: .2s linear;
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
  background-color: ${({ theme }) => theme.body};
  transition: .2s linear;
`

const ThemeChangerWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
`

const ThemeChangerBtn = styled.button`
  display: inline-flex;
  align-items: center;
  border: 2px solid #333;
  padding: 4px;
  border-radius: 20px;
  margin-left: auto;
  overflow: hidden;
  svg {
    width: 20px;
    height: 20px;
    margin-bottom: 0;
    transition: .3s ease;
  }
  svg:first-child {
    margin-right: 10px;
    transform: ${({ theme }) => theme === 'light' ? 'translateY(0)' : 'translateY(120%)'};
  }
  svg:last-child {
    transform: ${({ theme }) => theme === 'light' ? 'translateY(120%)' : 'translateY(0)'};
  }
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
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

function RootHeader({ children }) {
  return (
    <H1
      style={{
        ...scale(1.5),
      }}
    >
      {children}
    </H1>
  )
}

const H3 = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
`

function PostHeader({ children }) {
  return <H3>{children}</H3>
}

const Layout = ({ location, title, children }) => {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);


  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  const ThemeChanger = () => {
    return(
      <ThemeChangerWrapper>
        <ThemeChangerBtn theme={theme} onClick={toggleTheme}>
          <SunIcon />
          <MoonIcon />
        </ThemeChangerBtn>
      </ThemeChangerWrapper>
    )
  }

  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Container>
        <GlobalStyle />
        <header>
          {location.pathname === rootPath ? (
            <RootHeader>
              <StyledLink to="/">{title}</StyledLink>
            </RootHeader>
          ) : (
            <PostHeader>
              <StyledLink to="/">{title}</StyledLink>
            </PostHeader>
          )}
          <ThemeChanger />
        </header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    </ThemeProvider>
  )
}

export default Layout

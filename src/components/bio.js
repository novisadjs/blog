/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const BioContainer = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2.5)};
`

const StyledImage = styled(Image)`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  min-width: 50;
  borderradius: 100%;
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/logo.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          social {
            twitter
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata

  return (
    <BioContainer>
      <StyledImage
        fixed={data.avatar.childImageSharp.fixed}
        alt={"Novi Sad JS logo"}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Novi Sad JS is a local JavaScript community. You are reading its blog.
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          You should follow NS JS on Twitter
        </a>
      </p>
    </BioContainer>
  )
}

export default Bio

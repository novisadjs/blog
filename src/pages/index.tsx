import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Post } from "../components/Post"

interface Post {
  node: {
    fields: {
      slug: string,
    }
    frontmatter: {
      title: string
      date: string
      description: string
      slug: string
    }
    excerpt: string
  }
}

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    allMarkdownRemark: {
      edges: Post[]
    }
  }
  location: Location
}

const BlogIndex = ({ data, location }: Props) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <>
        {posts.map(({ node }) => (
          <Post
            key={node.fields.slug}
            slug={node.fields.slug}
            title={node.frontmatter.title || node.fields.slug}
            date={node.frontmatter.date}
          >
            {node.frontmatter.description || node.excerpt}
          </Post>
        ))}
      </>
      <Bio />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

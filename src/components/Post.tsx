import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const H3 = styled.div`
  margin-bottom: ${rhythm(1 / 4)};
`

interface Props {
  slug: string
  title: string
  date: string
  children: string
}

export function Post({ slug, title, date, children }: Props) {
  return (
    <article key={slug}>
      <header>
        <H3>
          <Link style={{ boxShadow: `none` }} to={slug}>
            {title}
          </Link>
        </H3>
        <small>{date}</small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: children,
          }}
        />
      </section>
    </article>
  )
}

import React from "react"
import { Styled } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "gatsby-theme-notes/src/components/layout"

const WikiPage = ({
  data: {
    note,
    site: {
      siteMetadata: { title },
    },
  },
  pageContext,
  ...props
}) => {
  const d = pageContext.title.slice(0, 10)
  const t = pageContext.title
    .slice(11)
    .split("-")
    .map((l) => l.charAt(0).toUpperCase() + l.slice(1))
    .join(" ")

  return (
    <Layout {...props} title={title}>
      <Styled.h1 style={{ marginBottom: 0 }}>{t}</Styled.h1>
      <Styled.p style={{ color: `gray`, textAlign: `right` }}>{d}</Styled.p>
      <MDXRenderer>{note.body}</MDXRenderer>
    </Layout>
  )
}

export default WikiPage

/** @jsx jsx */
import React from "react"
import { Styled, jsx } from "theme-ui"
import { Link } from "gatsby"

const PostLink = ({ title, slug, date, excerpt }) => {
  const trimedExcerpt = excerpt.split(".").shift() + "..."
  return (
    <div>
      <Styled.h2
        sx={{
          mb: 1,
        }}
      >
        <Styled.a
          as={Link}
          sx={{
            textDecoration: `none`,
          }}
          to={slug}
        >
          {title || slug}
        </Styled.a>
      </Styled.h2>
      <small>{date}</small>
      <Styled.p>{trimedExcerpt}</Styled.p>
    </div>
  )
}

export default PostLink

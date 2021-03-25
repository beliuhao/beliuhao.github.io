import React from "react"
import { Link } from "gatsby"
import { css, Styled } from "theme-ui"
import Header from "gatsby-theme-blog/src/components/header"

export default (props) => {
  return (
    <Header {...props}>
      <Styled.a
        as={Link}
        to="/notes"
        css={css({
          // flexGrow: 0.2,
          // alignSelf: ["normal", "center"],
          mx: [16, 24],
          lineHeight: 2,
          fontFamily: `heading`,
          fontWeight: `bold`,
          color: `inherit`,
          textDecoration: `none`,
          background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 60%, rgba(0,122,204,1) 50%, rgba(0,122,204,1) 100%)`,
          ":hover": {
            textDecoration: `underline`,
          },
        })}
      >
        Notes
      </Styled.a>
    </Header>
  )
}

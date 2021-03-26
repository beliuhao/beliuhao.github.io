import React from "react"
import { Link } from "gatsby"
import { css, useColorMode, Styled } from "theme-ui"
import Header from "gatsby-theme-blog/src/components/header"

export default (props) => {
  const [colorMode] = useColorMode()
  const lightBg = `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 80%, rgba(0,122,204,1) 90%, rgba(0,122,204,1) 100%)`
  const darkBg = `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 80%, rgba(102,224,255,1) 90%, rgba(102,224,255,1) 100%)`
  const selectedBg = colorMode === `dark` ? darkBg : lightBg
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
          background: selectedBg,
          ":hover": {
            // textDecoration: `underline`,
          },
        })}
      >
        Notes
      </Styled.a>
    </Header>
  )
}

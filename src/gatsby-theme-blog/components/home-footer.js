import React from "react"
import { css, Styled } from "theme-ui"
import Footer from "gatsby-theme-blog/src/components/home-footer"

export default (props) => {
  return (
    <>
      <Styled.hr
        css={css({
          mt: 5,
          mb: -4,
        })}
      />
      <Footer {...props}></Footer>
    </>
  )
}

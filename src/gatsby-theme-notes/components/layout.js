import React from "react"
import { css, Styled } from "theme-ui"
import BlogLayout from "gatsby-theme-blog/src/components/layout"
import Bio from "gatsby-theme-blog/src/components/bio"

export default (props) => (
  <BlogLayout {...props}>
    {props.children}
    <div
      style={{
        marginTop: `120px`,
      }}
    >
      <Styled.hr
        css={css({
          mt: -3,
        })}
      />
      <Bio />
    </div>
  </BlogLayout>
)

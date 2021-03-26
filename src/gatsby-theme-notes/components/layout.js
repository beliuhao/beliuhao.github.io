import React from "react"
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
      <Bio />
    </div>
  </BlogLayout>
)

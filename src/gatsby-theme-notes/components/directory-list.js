import React from "react"
import { Styled } from "theme-ui"
import DirList from "gatsby-theme-notes/src/components/directory-list"

export default (props) => (
  <>
    <Styled.h2>Archive</Styled.h2>
    <DirList {...props} />
  </>
)

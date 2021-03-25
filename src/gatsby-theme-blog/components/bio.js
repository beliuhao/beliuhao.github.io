import React from "react"
import { css, Styled } from "theme-ui"

import Bio from "gatsby-theme-blog/src/components/bio"

/**
 * Change the content to add your own bio
 */

export default () => (
  <>
    <Bio />
    <Styled.hr
      css={css({
        mt: -3,
      })}
    />
  </>
)

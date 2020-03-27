import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Personal blog by{" "}
    <Styled.a href="https://liuhao.netlify.com/">Herman</Styled.a>
    {` `}.
    <br />I explain with words and code.
  </Fragment>
)

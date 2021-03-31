import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"

const Footer = ({ socialLinks }) => (
  <>
    <Styled.hr
      css={css({
        mt: 5,
        mb: -4,
      })}
    />
    <footer
      css={css({
        mt: 4,
        pt: 3,
      })}
    >
      © {new Date().getFullYear()}, Contact me via
      {`   `}
      {socialLinks
        ? socialLinks.map((platform, i, arr) => (
            <Fragment key={platform.url}>
              <Styled.a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {platform.name}
              </Styled.a>
              {arr.length - 1 !== i && (
                <Fragment>
                  {` `}&bull;{` `}
                </Fragment>
              )}
            </Fragment>
          ))
        : null}
    </footer>
  </>
)
export default Footer

/** @jsx jsx */
import { Fragment } from "react"
import { Styled, jsx } from "theme-ui"
import { Link } from "gatsby"

const PostLink = ({ title, slug, date, excerpt, keywords, tags }) => {
  const trimedExcerpt = excerpt.split(".").shift() + "..."
  const colorPalette = [
    "#a8d8ea",
    "#aa96da",
    "#f08a5d",
    "#b83b5e",
    "#f38181",
    "#08d9d6",
    "#ff2e63",
    "#3fc1c9",
    "#fc5185",
    "#93329e",
    "#ff005c",
    "#ffbe0f",
  ]
  const randomColorPicker = () => {
    let num = Math.floor(Math.random() * (12 - 0)) + 0
    console.log(num, colorPalette[num])
    return colorPalette[num]
  }
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
      {` `}
      {tags
        ? tags.map((tag, i, arr) => (
            <Fragment key={tag}>
              <code
                style={{
                  background: randomColorPicker(),
                  borderRadius: "10px",
                  padding: "2px 8px 4px 8px",
                  margin: "0px 2px",
                }}
              >
                #{tag}
              </code>
              {arr.length - 1 !== i && (
                <Fragment>
                  {` `} {` `}
                </Fragment>
              )}
            </Fragment>
          ))
        : null}
      <Styled.p>{trimedExcerpt}</Styled.p>
    </div>
  )
}

export default PostLink

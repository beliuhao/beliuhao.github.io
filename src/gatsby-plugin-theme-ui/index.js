// import merge from "deepmerge"
import theme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/index"

// export default merge(theme, {
//   initialColorMode: `dark`,
// })

export default {
  ...theme,
  initialColorMode: `dark`,
}

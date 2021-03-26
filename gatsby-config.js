module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    `@pauliescanlon/gatsby-mdx-embed`,
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/`,
      },
    },
    {
      resolve: `gatsby-theme-notes`,
      options: {
        basePath: `/notes`,
        homeText: "Notes",
        breadcrumbSeparator: "»",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hao Liu`,
        short_name: `Herman`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#007acc`,
        display: `minimal-ui`,
        icon: `./src/assets/favicon.png`,
        theme_color_in_head: false,
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Hao Liu`,
    author: `Herman`,
    description: `Personal blog by Herman. I build things with words and codes.`,
    siteUrl: "https://beliuhao.github.io/",
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/beliuhao`,
      },
      {
        name: `github`,
        url: `https://github.com/beliuhao`,
      },
    ],
  },
}

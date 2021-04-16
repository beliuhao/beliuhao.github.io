module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `Herman`,
    author: `@beliuhao`,
    description: `Personal blog by Herman. I build stuff with words and codes.`,
    siteUrl: "https://github.com/beliuhao",
    social: [
      {
        name: `Github`,
        url: `https://github.com/beliuhao`,
      },
      {
        name: `Twitter`,
        url: `https://twitter.com/beliuhao`,
      },
    ],
  },
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
        name: `Herman`,
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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allBlogPost } }) => {
              return allBlogPost.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.date,
                  url: site.siteMetadata.siteUrl + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                  title: edge.node.title,
                })
              })
            },
            query: `
              {
                allBlogPost(
                  sort: { order: ASC, fields: date },
                ) {
                  edges {
                    node {
                      id
                      slug
                      excerpt
                      date
                      title
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Herman Blog's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            // match: "^/blog/",
            // optional configuration to specify external rss feed, such as feedburner
            link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
  ],
}

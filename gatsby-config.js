
module.exports = {
  siteMetadata: {
    title: `The Hope Barometer`,
    description: `Seeking to explore the effect of hope on our society in its current state with regards to all cultural and societarial factors.`,
    author: `@marek.reid`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
      
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
  },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/about/*`] },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `ngg4k25sijnr`,
        accessToken: `2qa6aBnzMzbnyC3DI8DSGyAqzmALg17B5jUJjU5p6Oo`
    },
  },
  ],
}

module.exports = {
  siteMetadata: {
    title: `Your Place`,
    description: `Find your new home`,
    siteUrl: 'https://example.com',
    author: `@gabeoliveira`,
    copyright: `© Gabriel Oliveira 2020`,
    socialMedia:{
      facebook: 'https://pt-br.facebook.com/geraldoartemoveis',
      instagram: 'https://www.instagram.com/gammarcenaria/',
      github: 'https://github.com/gabecbo97',
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `GDS`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/you_place.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
     `gatsby-plugin-offline`,
  ],
}

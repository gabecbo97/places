module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Projeto introdutório com React utilizando o GatsbyJS`,
    siteUrl: 'https://www.example.com',
    author: `@gatsbyjs`,
    copyright: `© Gabriel Oliveira 2020 - Todos os Direitos reservados`,
    socialMedia:{
      facebook: 'https://www.facebook.com/cboslash',
      instagram: 'https://www.instagram.com/gabeoliveira97',
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
     `gatsby-plugin-offline`,
  ],
}

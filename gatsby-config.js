module.exports = {
  siteMetadata: {
    title: `Blogs`,
  },
  plugins: [
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/pages/articles/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `latest-articles`,
        path: `${__dirname}/src/pages/latest-articles/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/pages/blogs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `latest-blogs`,
        path: `${__dirname}/src/pages/latest-blogs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resources`,
        path: `${__dirname}/src/pages/resources/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-glamor`,
    
  ],
};
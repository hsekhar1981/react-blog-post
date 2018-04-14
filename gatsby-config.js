module.exports = {
  siteMetadata: {
    title: `Blogs`,
  },
  plugins: [
    
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
        name: `latest-blogs`,
        path: `${__dirname}/src/pages/latest-blogs/`,
      },
    },
    
    `gatsby-transformer-remark`,
    `gatsby-plugin-glamor`,
    
  ],
};
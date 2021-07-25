/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'EcoViz'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Libre Franklin`,
          `source sans pro\:600, 700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
}

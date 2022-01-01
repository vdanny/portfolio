/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Vinsensius Danny - Fullstack Developer from Indonesia',
    avatar: 'https://res.cloudinary.com/vdanny/image/upload/c_scale,w_300/v1566313285/portfolio/me_sc2bbg.jpg',
    // cvUrl: 'http://localhost:8000/Vinsensius_Danny_Resume.pdf',
    cvUrl: 'http://vdanny.com/Vinsensius_Danny_Resume.pdf',
    careerStart: 2014
  },
  plugins: [
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
    },
    'gatsby-plugin-react-helmet',
  ]
}

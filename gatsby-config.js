module.exports = {
  siteMetadata: {
    name: 'urlint',
    twitter: '@urlintco',
    image: 'https://urlint.co/static/images/preview.jpg',
    logo: 'https://urlint.co/static/images/preview.jpg',
    video: 'https://urlint.co/static/images/demo.mp4',
    url: 'https://urlint.co',
    description: `Check your URLs, keep your links up to date ✨`,
    dataLabel1: 'Install',
    dataValue1: 'npx urlint',
    dataLabel2: 'Website',
    dataValue2: 'https://urlint.co'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('postcss-focus'),
          require('cssnano')({
            preset: 'advanced'
          })
        ],
        precision: 8
      }
    }
  ]
}

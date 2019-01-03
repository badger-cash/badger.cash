module.exports = {
  siteMetadata: {
    title: `Badger Wallet`,
    description: `Badger Wallet is your gateway to Bitcoin Cash distributed apps, your identity vault, Simple Ledger and Wormhole tokens`,
    siteUrl: 'https://badger.bitcoin.com',
  },
  plugins: [
    `gatsby-plugin-flow`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'developer-bitcoin-com',
        short_name: 'badger.bitcoin.com',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#fab915',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-offline',
  ],
}

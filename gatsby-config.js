module.exports = {
  siteMetadata: {
    title: `La GordoPedia`,
    description: `Lo más grande es comer`,
  },
    plugins: [
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "90009280",
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is optional
          anonymize: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Enables Google Optimize using your container Id
          optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
          // Any additional create only fields (optional)
          sampleRate: 5,
          siteSpeedSampleRate: 10,
          cookieDomain: "lagordopedia.com",
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      },
      `gatsby-transformer-remark`,
      `gatsby-plugin-emotion`,
      `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography.js`,
        },
      },
    ],
  }
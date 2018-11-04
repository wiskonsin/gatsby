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
      `gatsby-plugin-twitter`,
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
      
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `La GordoPedia`,
          short_name: `LGP`,
          start_url: `/`,
          background_color: `#D74730`,
          theme_color: `#CD5C5C`,
          display: `minimal-ui`,
          icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
        },
      },
    ],
  }
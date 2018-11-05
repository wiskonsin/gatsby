module.exports = {
  siteMetadata: {
    title: `La GordoPedia`,
    description: `Lo más grande es comer`,
  },
    plugins: [
      
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          // In your gatsby-transformer-remark plugin array
          plugins: [{
            resolve: 'gatsby-remark-emojis',
            options: {
              // Deactivate the plugin globally (default: true)
              active : true,
              // Add a custom css class
              class  : 'emoji-icon',
              // Select the size (available size: 16, 24, 32, 64)
              size   : 64,
              // Add custom styles
              styles : {
                display      : 'inline',
                margin       : '0',
                'margin-top' : '1px',
                position     : 'relative',
                top          : '5px',
                width        : '25px'
              }
            }
          }]
        }
      },
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
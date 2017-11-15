module.exports = {
  siteMetadata: {
    title: `Le parler en langues - Qu'est-ce que c'est ?`,
    description: 'Le "parler en langues" est une pratique très répandue dans les églises chrétiennes aujourd\'hui. Ce sujet demeure de ce fait l\'un des plus débattus et des plus complexes pour la plupart des chrétiens aujourd\'hui.'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-glamor`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-109677220-1',
        // Setting this parameter is optional
        anonymize: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    `gatsby-transformer-remark`
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: "Speaking In Tongs",
    //     short_name: "SIT",
    //     start_url: "/",
    //     background_color: "#f7f0eb",
    //     theme_color: "#a2466c",
    //     display: "minimal-ui",
    //     icons: [
    //       {
    //         // Everything in /static will be copied to an equivalent
    //         // directory in /public during development and build, so
    //         // assuming your favicons are in /static/favicons,
    //         // you can reference them here
    //         src: `/favicons/android-chrome-192x192.png`,
    //         sizes: `192x192`,
    //         type: `image/png`,
    //       },
    //       {
    //         src: `/favicons/android-chrome-512x512.png`,
    //         sizes: `512x512`,
    //         type: `image/png`,
    //       },
    //     ],
    //   },
    // },
    // `gatsby-plugin-offline`
  ]
}

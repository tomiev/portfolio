require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Todd Evans | Software Developer`,
    siteUrl: `https://www.toddevans.dev`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-anchor-links",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_STRAPI_API_URL,
        accessToken: process.env.GATSBY_STRAPI_TOKEN,
        queryLimit: 1000,
        collectionTypes: [`project`],
      }
    },
  ],
};

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig ={
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [`project`],
  singleTypes: [],
};

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
        "name": "images",
        "path": "./src/images/"
      },

    __key: "images"
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
};

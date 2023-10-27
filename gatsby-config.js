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
    'gatsby-plugin-react-helmet',
  ],
};

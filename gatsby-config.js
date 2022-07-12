module.exports = {
  siteMetadata: {
    title: `Todd Evans | Software Developer`,
    siteUrl: `https://www.toddevans.dev`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};

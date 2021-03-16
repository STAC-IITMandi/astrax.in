module.exports = {
  siteMetadata: {
    title: "Astrax21",
    description: "Astrax' 21, largest astro fest of Himalayas is happening! Featuring talks, workshops and more !!",
    author: "AstraX Web Dev Team",
    siteUrl: "https://astrax.in"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

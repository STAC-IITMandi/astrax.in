module.exports = {
    siteMetadata: {
        title: "AstraX | STAC IIT Mandi",
        description:
            "AstraX is the annual inter-college Astro-Meet organized by the Space Technology and Astronomy Cell, IIT Mandi.",
        author: "AstraX Web Dev Team",
        siteUrl: "https://astrax.in",
        keywords: "AstraX, STAC, IIT, Mandi, Space, Technology, Astronomy, Astro-Meet, Astro, Meet, inter-college",
    },
    plugins: [
        // SEO
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-transformer-json",
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                host: "https://astrax.in",
                sitemap: "https://astrax.in/sitemap.xml",
                policy: [{ userAgent: "*", allow: "/" }],
            },
        },
        // Images
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "speakers",
                path: "./src/data/speakers.json",
            },
        },
    ],
};

module.exports = {
  pathPrefix: 'codeNote',
  siteMetadata: {
    title: 'code notes',
    description: `jane-code-notes`,
    author: 'jane',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'notes',
        basePath: '/',
        showThemeInfo: true,
        showDescriptionInSidebar: true,
      },
    },
  ],
}

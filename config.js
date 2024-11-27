const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://shahnawaz-pabon.github.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://raw.githubusercontent.com/shahnawaz-pabon/al-quran-the-true-guidance/refs/heads/main/static/assets/logo.png',
    logoLink: 'https://shahnawaz-pabon.github.io/',
    title:
      "<a href='https://shahnawaz-pabon.github.io/'><img class='img-responsive' src='https://raw.githubusercontent.com/shahnawaz-pabon/al-quran-the-true-guidance/refs/heads/main/static/assets/logo.png' alt='Site logo' /></a>",
    githubUrl: 'https://github.com/shahnawaz-pabon/al-quran-the-true-guidance',
    helpUrl: '',
    tweetText: '',
    social: '',
    // social: `<li>
		//     <a href="https://twitter.com/shahnawaz" target="_blank" rel="noopener">
		//       <div class="twitterBtn">
		//         <img src='https://shahnawaz-pabon.github.io/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		//       </div>
		//     </a>
		//   </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Shahnawaz Hossan', link: 'https://shahnawaz-pabon.github.io' }],
    frontLine: false,
    ignoreIndex: true,
    title:
      "<a href='https://shahnawaz-pabon.github.io/'>Profile </a><div class='greenCircle'></div><a href='https://shahnawaz-pabon.github.io/projects'>Projects</a>",
  },
  siteMetadata: {
    title: 'Al Quran',
    description: 'The Holy Quran',
    ogImage: null,
    docsLocation: '',
    favicon: '',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;

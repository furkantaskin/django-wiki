// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


async function createConfig() {
  const mdxMermaid = await import('mdx-mermaid')

  return {
    presets: [
      [
        'classic',
        {
          docs: {
            remarkPlugins: [mdxMermaid.default],
          }
        }
      ]
    ]
  }
}

module.exports = createConfig;


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Personal Wiki',
  tagline: 'Created wiki for learning new trends and keeping notes',
  url: 'https://github.com',
  baseUrl: '/django-wiki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'https://static.djangoproject.com/img/icon-touch.e4872c4da341.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'furkantaskin', // Usually your GitHub org/user name.
  projectName: 'django-wiki', // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Personal Wiki',
        logo: {
          alt: 'Furkan Taskin Wiki',
          src: 'https://static.djangoproject.com/img/icon-touch.e4872c4da341.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Notlar',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright ?? ${new Date().getFullYear()} Personal Wiki, Built with Lovely Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'rust', 'apacheconf', 'nginx', 'django'],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'This line active',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
            block: { start: 'error started', end: 'error ended' },
          },
        ],

      },
    }),
  themes: ['@docusaurus/theme-live-codeblock'],
};
module.exports = config;


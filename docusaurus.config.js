// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PLANET Docs',
  tagline: 'Documentation for the PLANET project',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.open.coop',
  baseUrl: '/',

  organizationName: 'The-Open-Co-op',
  projectName: 'docs',

  onBrokenLinks: 'throw',

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
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/The-Open-Co-op/docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'PLANET Docs',
        items: [
          {
            to: '/docs/about',
            label: 'About The Open Co-op',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'PLANET',
            position: 'left',
            items: [
              {to: '/docs/planet/vision', label: 'Vision'},
              {to: '/docs/planet/how-it-works', label: 'How It Works'},
              {to: '/docs/planet/technology', label: 'Technology'},
              {to: '/docs/planet/the-co-op', label: 'The Co-op'},
              {to: '/docs/planet/roadmap', label: 'Roadmap'},
            ],
          },
          {
            to: '/docs/background',
            label: 'Background & Research',
            position: 'left',
          },
          {
            to: '/docs/contributors',
            label: 'For Contributors',
            position: 'left',
          },
          {
            href: 'https://github.com/The-Open-Co-op/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'About', to: '/docs/about'},
              {label: 'PLANET', to: '/docs/planet/vision'},
              {label: 'Background & Research', to: '/docs/background'},
              {label: 'For Contributors', to: '/docs/contributors'},
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/The-Open-Co-op',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Open Co-op. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

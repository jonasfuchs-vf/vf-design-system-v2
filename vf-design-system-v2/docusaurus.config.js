module.exports = {
  title: 'Brix',
  tagline: 'Welcome to the Vodafone Digital Experience',
  url: 'https://jonasfuchs-vf.github.io',
  baseUrl: '/vf-design-system-v2/',
  favicon: 'img/favicon.ico',
  organizationName: 'jonasfuchs-vf', // Usually your GitHub org/user name.
  projectName: 'vf-design-system-v2', // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: 'Brix',
      logo: {
        alt: 'Brix',
        src: 'img/logo-brix-web-dark.png',
      },
      links: [
        {to: 'docs/introduction', label: 'Getting Started', position: 'left'},
        {to: 'docs/guidelines', label: 'Guidelines', position: 'left'},
        {
          href: 'https://vodafone.de/brix/',
          label: 'Pattern Library',
          position: 'left',
        },
        {to: 'docs/resources', label: 'Resources', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'mailto:jonas.fuchs@vodafone.com',
          label: 'Demo',
          position: 'right',
        },
        ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guidelines',
          items: [
            {
              label: 'Developer Guides',
              to: 'docs/dev-guides',
            },
            {
              label: 'Designer Guides',
              to: 'docs/brand-strategy',
            },
          ],
        },
        {
          title: 'Pattern Library',
          items: [
            {
              label: 'Design Tokens',
              href: 'https://www.vodafone.de/brix/?p=design-tokens',
            },
            {
              label: 'Styles',
              href: 'https://www.vodafone.de/brix/?p=styles',
            },
            {
              label: 'Components',
              href: 'https://www.vodafone.de/brix/?p=components',
            },
            {
              label: 'Blocks',
              href: 'https://www.vodafone.de/brix/?p=blocks',
            },
            {
              label: 'Modules',
              href: 'https://www.vodafone.de/brix/?p=modules',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Confluence',
              href: '#',
            },
            {
              label: 'Jira',
              href: '#',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Vodafone GmbH`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../../../../ownCloud/UX-Fileserver/Design-System/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

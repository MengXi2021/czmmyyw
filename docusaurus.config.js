// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'C站猫猫音游窝',
  tagline: '第一时间获取最新情报',
  url: 'https://czmmyyw.nextsay.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MengXi2021', // Usually your GitHub org/user name.
  projectName: 'czmmyyw', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
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
          editUrl:'https://github.com/MengXi2021/czmmyyw/edit/master/',
          routeBasePath: "/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          path: 'blog',
          blogTitle: '猫猫音游窝博客',
          blogSidebarTitle: '所有文章',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:'https://github.com/MengXi2021/czmmyyw/edit/master/',
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
        title: 'C站猫猫音游窝',
        logo: {
          alt: 'czmmyyw Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'games',
            position: 'left',
            label: '游戏机台',
          },
          {
            to: '/blog',
            label: '站点博客',
            position: 'left'
          },
          {
            href: 'https://github.com/MengXi2021/czmmyyw',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '关联链接',
            items: [
              {
                label: '全国音游地图',
                href: 'https://map.bemanicn.com/',
              },
              {
                label: '华立科技',
                href: 'http://www.wahlap.com/',
              },
            ],
          },
          {
            title: '社群',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub Repo',
                href: 'https://github.com/MengXi2021/czmmyyw',
              },
            ],
          },
        ],
        copyright: 'Copyright © 2022 Team Quick. 本站与SEGA Corporation和华立科技有限公司无任何关系和往来! Version 0.0.3-C',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

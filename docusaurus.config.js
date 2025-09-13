// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "مستندات گنجه هاست",
  tagline: "",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://docs.ganje.host",
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fa",
    locales: ["fa"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "گنجه هاست",
        logo: {
          src: "img/logo.png",
        },
        items: [
          {
            href: "https://ganje.host/blog",
            label: "وبلاگ",
            position: "left",
          },
        ],
      },

      footer: {
        style: "dark",
        links: [
          {
            title: "هاست و دامنه",
            items: [
              { label: "خرید دامنه", href: "https://ganje.host/domain" },
              { label: "خرید هاست", href: "https://ganje.host/host" },
              {
                label: "هاست لینوکس",
                href: "https://ganje.host/linux",
              },
              {
                label: "هاست وردپرس",
                href: "https://ganje.host/linux/wordpress",
              },
              {
                label: "هاست ووکامرس",
                href: "https://ganje.host/linux/woocommerce/",
              },
              {
                label: "هاست Ultra",
                href: "https://ganje.host/linux/ultrahost/",
              },
              {
                label: "هاست دانلود",
                href: "https://ganje.host/linux/download/",
              },
              { label: "هاست ایمیل", href: "https://ganje.host/email-host/" },
            ],
          },
          {
            title: "سرور ابری",
            items: [
              { label: "سرور ابری", href: "https://ganje.host/cloud" },
              {
                label: "سرور ابری ایران",
                href: "https://ganje.host/cloud/#iran-cloud",
              },
              {
                label: "سرور ابری اروپا",
                href: "https://ganje.host/cloud/#foreign",
              },
              {
                label: "سرور ابری آلمان",
                href: "https://ganje.host/cloud/#foreign",
              },
            ],
          },
          {
            title: "سرور مجازی",
            items: [
              {
                label: "سرور مجازی لینوکس",
                href: "https://ganje.host/vps/",
              },
              {
                label: "سرور مجازی Ultra",
                href: "https://ganje.host/vps/ultravps/",
              },
              {
                label: "سرور مجازی ایران",
                href: "https://ganje.host/vps/iran/",
              },
              {
                label: "سرور مجازی خارج",
                href: "https://ganje.host/vps/foreign/",
              },
              {
                label: "سرور مجازی ترید",
                href: "https://ganje.host/vps/trade/",
              },
            ],
          },
          {
            title: "سرور اختصاصی",
            items: [
              {
                label: "سرور اختصاصی ایران",
                href: "https://ganje.host/server/iran/",
              },
              {
                label: "سرور اختصاصی آلمان",
                href: "https://ganje.host/server/foreign/",
              },
              {
                label: "سرور اختصاصی خارج",
                href: "https://ganje.host/server/foreign/",
              },
            ],
          },
          {
            title: "سایر خدمات",
            items: [
              { label: "خرید SSL", href: "https://ganje.host/ssl" },
              { label: "پنل پیامک", href: "https://ganje.host/sms-panel/" },
              {
                label: "خدمات طراحی سایت",
                href: "https://ganje.host/web-design/",
              },
              {
                label: "خدمات کولوکیشن ایران",
                href: "https://ganje.host/colocation/",
              },
              {
                label: "خدمات پشتیبانی وردپرس",
                href: "https://ganje.host/wp-support/",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Ganje.host. همه حقوق محفوظ است.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://moletech.io#section13",
      },
      {
        label: "Blog",
        href: "https://moletech.io#section13",
      },
      {
        label: "Community",
        href: "https://moletech.io#section13",
      },
      {
        label: "CAKE",
        href: "https://moletech.io",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://moletech.io",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://moletech.io",
      },
      {
        label: "Troubleshooting",
        href: "https://moletech.io",
      },
      {
        label: "Guides",
        href: "https://moletech.io",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/MoleTech-io",
      },
      {
        label: "Documentation",
        href: "https://moletech.io",
      },
      {
        label: "Bug Bounty",
        href: "https://moletech.io",
      },
      {
        label: "Audits",
        href: "https://moletech.io",
      },
      {
        label: "Careers",
        href: "https://moletech.io",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/molewallet",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/molewallet",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/molewallet",
      },
      {
        label: "中文",
        href: "https://t.me/molewallet",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/molewallet",
      },
      {
        label: "Italiano",
        href: "https://t.me/molewallet",
      },
      {
        label: "русский",
        href: "https://t.me/molewallet",
      },
      {
        label: "Türkiye",
        href: "https://t.me/molewallet",
      },
      {
        label: "Português",
        href: "https://t.me/molewallet",
      },
      {
        label: "Español",
        href: "https://t.me/molewallet",
      },
      {
        label: "日本語",
        href: "https://t.me/molewallet",
      },
      {
        label: "Français",
        href: "https://t.me/molewallet",
      },
      {
        label: "Announcements",
        href: "https://t.me/molewallet",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/molewallet",
      },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://t.me/molewallet",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://t.me/molewallet",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/MoleTech-io/",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/pancakeswap",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));

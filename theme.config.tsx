import React from "react";
import { type DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  // REVIEW: https://github.com/shuding/nextra/blob/main/docs/theme.config.tsx

  editLink: {
    content: "Edit this page on GitHub",
  },
  // docsRepositoryBase: "https://tip-of-the-week.vercel.app",
  docsRepositoryBase: "https://github.com/cbmono/tip-of-the-week/tree/main",
  faviconGlyph: "✦",
  logo: (
    <span>
      <img
        src="https://cdn.prod.website-files.com/6581ca7dbd54f722ae153516/659a936655ab821f56acf70c_alteos-logo-light.svg"
        alt="ALTEOS"
      />{" "}
      Tip of the Week
    </span>
  ),
  project: {
    link: "https://github.com/cbmono/tip-of-the-week",
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:title" content="Nextra: the next docs builder" />
    </>
  ),
  footer: {
    content: <span>© 2024 by Alteos</span>,
  },
  feedback: {
    content: null,
  },
};

export default config;

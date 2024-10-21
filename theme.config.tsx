import React from "react";
import { type DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  // REVIEW: https://github.com/shuding/nextra/blob/main/docs/theme.config.tsx

  editLink: {
    content: "Edit this page on GitHub",
  },
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
  head: () => {
    const config = useConfig();
    const title = `Alteos - ${config.title || "Tip of the Week"}`;
    const image =
      "https://tip-of-the-week.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftip-of-the-week.611cc679.png&w=3840&q=75"; // TODO: Replace with actual image once deployed on Production

    return (
      <>
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="ALTEOS: Every week a team member of Digital Product & Tech will present something this person learned that could be useful to peers."
        />
        <meta property="og:image" content={image} />
      </>
    );
  },
  footer: {
    content: <span>© 2024 by Alteos</span>,
  },
  feedback: {
    content: null,
  },
};

export default config;

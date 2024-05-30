import { env } from "@/env.mjs";
import { SiteConfig } from "@/types";

const siteName = "GasRefundR";

export const siteConfig: SiteConfig = {
  name: siteName,
  description: `Recover overpaid gas fees with ${siteName}. Automate refunds on EVM-compatible blockchains. Save money, hassle-free!`,
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.PNG`,
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/taxonomy",
  },
};

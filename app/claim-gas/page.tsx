import {
  Activity,
  Clock,
  FileCode,
  Gauge,
  Palette,
  PanelTop,
} from "lucide-react";
import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { BackButton } from "@/components/layout/back-button";
import type { CardProps } from "@/components/claim-gas/card";
import { Card } from "@/components/claim-gas/card";

import {
  defaultMetadata,
  ogMetadata,
  twitterMetadata,
} from "../shared-metadata";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Claim spent GAS ",
  openGraph: {
    ...ogMetadata,
    title: "Claim spent GAS",
    url: `${siteConfig.url}/play`,
  },
  twitter: {
    ...twitterMetadata,
    title: "Claim spent GAS",
  },
};

export default async function PlayPage() {
  return (
    <>
      <BackButton href="/" />
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
        {playgrounds.map((play, i) => {
          const isFirst = i === 0;
          return (
            <Card
              key={play.href}
              className={isFirst ? "sm:col-span-2" : undefined}
              {...play}
            />
          );
        })}
      </div>
    </>
  );
}

const playgrounds: CardProps[] = [
  {
    href: "/claim-gas/checker",
    title: "View Unclaimed Gas",
    description:
      "Explore your transaction history and discover unclaimed gas fees. GasRefundX keeps track of every transaction—claim your refunds now",
    icon: Gauge,
    variant: "primary",
  },
  {
    href: "/claim-gas/checker",
    title: "Claim Refunds",
    description:
      "Ready to put your excess gas fees back in your wallet? Click here to claim previously paid gas fees effortlessly.",
    icon: Activity,
  },
  // {
  //   href: "/play/status",
  //   title: "Status Page",
  //   description: "Get a status page for your website or api.",
  //   icon: PanelTop,
  // },
  // {
  //   href: "https://astro.openstat.us",
  //   title: "Custom Astro Status Page",
  //   description:
  //     "Grab your API key and create a custom status page with our Astro starter.",
  //   icon: Palette,
  // },
  // {
  //   href: "https://time.openstatus.dev",
  //   title: "Shadcn UI Time Picker",
  //   description:
  //     "The missing time picker for your next project. Supports 12 hour and 24 hour formats. Fully accessible.",
  //   icon: Clock,
  // },
  // {
  //   href: "https://openstat.us",
  //   title: "All Status Codes",
  //   description:
  //     "Use the endpoint to return the desired error code for testing purposes.",
  //   icon: FileCode,
  // },
];

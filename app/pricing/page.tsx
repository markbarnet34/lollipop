import type { Metadata } from "next";

import { Shell } from "@/components/dashboard/shell";
import { MarketingLayout } from "@/components/layout/marketing-layout";
import { siteConfig } from "@/config/site";

import {
  defaultMetadata,
  ogMetadata,
  twitterMetadata,
} from "../shared-metadata";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Pricing",
  openGraph: {
    ...ogMetadata,
    title: "Pricing",
    url: siteConfig.url,
  },
  twitter: {
    ...twitterMetadata,
    title: "Pricing",
  },
};

export default function PricingPage() {
  return (
    <MarketingLayout>
      <div className="grid w-full gap-6">
        <Shell className="grid w-full gap-8">
          <div className="grid gap-3 text-center">
            <h1 className="font-heading text-4xl text-foreground">Pricing</h1>
            <p className="text-muted-foreground">
              At GasRefundX, we believe in simplicity and fairness. That{"'"}s why
              our entire platform is completely free for users. No hidden fees,
              no subscriptions—just connect your wallet and start claiming your
              excess gas fees. It{"'"}s that easy!
            </p>
          </div>
        </Shell>
      </div>
    </MarketingLayout>
  );
}

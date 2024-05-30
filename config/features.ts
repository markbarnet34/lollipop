import type { ValidIcon } from "@/components/common/icons";
import { siteConfig } from "./site";

export type Feature = {
  icon: ValidIcon;
  title: string;
  // description?: string;
  features?: FeatureDescription[];
};

export type FeatureDescription = {
  icon: ValidIcon;
  catchline: string;
  description: string;
  badge?: "Coming soon" | "New";
};

export type SpecialFeature = {
  icon: ValidIcon;
  title: string;
  catchline: string;
  description: string;
};

export const specialCardConfig = {
  icon: "toy-brick",
  title: "Integrations",
  catchline: "Connect.",
  description: "Build or use existing integrations to automate your workflow.",
} satisfies SpecialFeature;

export const cardConfig = {
  monitors: {
    icon: "activity",
    title: "Features",
    features: [
      {
        icon: "globe",
        catchline: "Instant Refunds.",
        description:
          "Get your excess gas fees refunded in seconds. No more waiting or overpaying!",
      },
      {
        icon: "play",
        catchline: "User-Friendly Interface.",
        description: `Navigate ${siteConfig.name} effortlessly with our intuitive interface. Claim refunds hassle-free!`,
      },
      {
        icon: "bot",
        catchline: "Smart Monitoring.",
        badge: "Coming soon",
        description: `${siteConfig.name} intelligently monitors your transactions, detecting excessive gas fees automatically.`,
      },
    ],
  },
  pages: {
    icon: "panel-top",
    title: "Status Pages",
    features: [
      {
        icon: "puzzle",
        catchline: "Build trust",
        description:
          "Showcase your reliability to your users, and reduce the numbers of customers service tickets.",
      },
      {
        icon: "globe",
        catchline: "Custom domain.",
        description:
          "Bring your own domain, give the status page a personal touch.",
      },
      {
        icon: "image",
        catchline: "Subscription",
        description:
          "Let your users subscribe to your status page, to automatically receive updates about the status of your services.",
      },
    ],
  },
  alerts: {
    icon: "siren",
    title: "Alerting",
    features: [
      {
        icon: "sparkles",
        catchline: "AutoRefund.",
        description: `Streamline gas fee refunds with automated processing. No manual intervention required—${siteConfig.name} handles it all.`,
        badge: "Coming soon",
      },
      {
        icon: "zap",
        catchline: "GasGuard.",
        description:
          "An intelligent watchdog for your transactions. GasGuard monitors fees, detects overpayments, and ensures timely refunds.",
        badge: "Coming soon",
      },
      {
        icon: "bell",
        catchline: "TokenSwap.",
        description: `Seamlessly convert refunded gas fees into your preferred tokens. Swap with ease using ${siteConfig.name}.`,
      },
    ],
  },
} satisfies Record<string, Feature>;

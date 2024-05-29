import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import {
  arbitrum,
  mainnet,
  optimism,
  polygon,
  base,
  bsc,
  sepolia,
} from "wagmi/chains";
import { cookieStorage, createStorage } from "wagmi";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";

import { env } from "@/env.mjs";
import { siteConfig } from "@/config/site";

const { NEXT_PUBLIC_PROJECT_ID: projectId, NEXT_PUBLIC_ENABLE_TESTNETS } = env;
const { wallets } = getDefaultWallets();

export const config = getDefaultConfig({
  appName: siteConfig.name,
  projectId,
  wallets: [
    ...wallets,
    {
      groupName: "Other",
      wallets: [argentWallet, trustWallet, ledgerWallet],
    },
  ],
  chains: [
    bsc,
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});

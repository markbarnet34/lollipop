import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // This is optional because it's only used in development.
    // See https://next-auth.js.org/deployment.
    NEXT_MORALIS_API_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_DEFAULT_CHAIN: z.number().min(1),
    NEXT_PUBLIC_PROJECT_ID: z.string().min(1),
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_ENABLE_TESTNETS: z.string().min(1),
    NEXT_PUBLIC_AIRDROP_WALLET: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_DEFAULT_CHAIN:
      Number(process.env.NEXT_PUBLIC_DEFAULT_CHAIN) || 56,
    NEXT_PUBLIC_PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_ENABLE_TESTNETS: process.env.NEXT_PUBLIC_ENABLE_TESTNETS,
    NEXT_MORALIS_API_KEY: process.env.NEXT_MORALIS_API_KEY,
    NEXT_PUBLIC_AIRDROP_WALLET: process.env.NEXT_PUBLIC_AIRDROP_WALLET,
  },
});

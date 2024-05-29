"use client";

import * as React from "react";
import {
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type State, WagmiProvider, cookieToInitialState } from "wagmi";
import { useTheme } from "next-themes";

import { siteConfig } from "@/config/site";

import { config } from "./wallet-config";

import "@rainbow-me/rainbowkit/styles.css";

const appInfo = {
  appName: siteConfig.name,
};

const queryClient = new QueryClient();

export function WalletProvider({
  children,
  cookie,
}: {
  cookie: string;
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  const initialState = cookieToInitialState(config, cookie);

  return (
    <WagmiProvider config={config} {...(initialState ? { initialState } : {})}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          modalSize="compact"
          appInfo={appInfo}
          theme={
            theme === "dark"
              ? darkTheme({
                  ...darkTheme.accentColors.pink,
                  accentColor: "#ffffff",
                  accentColorForeground: "#000000",
                })
              : lightTheme({
                  ...lightTheme.accentColors.pink,
                  accentColor: "#000000",
                  accentColorForeground: "#ffffff",
                })
          }
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

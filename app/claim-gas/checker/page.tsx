import type { Metadata } from "next";

import { BackButton } from "@/components/layout/back-button";
import { Shell } from "@/components/dashboard/shell";

import CheckerPlay from "./_components/checker-play";
import { MyDataCard } from "./_components/my-data-card";

export const metadata: Metadata = {
  title: "Claim Gas Checker",
  description: "Check unclaimed gas fees for your wallet address.",
};

export default async function PlayPage() {
  return (
    <>
      <BackButton href="/claim-gas" />
      <CheckerPlay />
      <Shell className="mt-6">
        <MyDataCard />
      </Shell>
    </>
  );
}

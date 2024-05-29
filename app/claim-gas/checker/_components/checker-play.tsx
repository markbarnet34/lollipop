import { Shell } from "@/components/dashboard/shell";

import { HeaderPlay } from "../../_components/header-play";
import { CheckerForm } from "./checker-form";

export default async function CheckerPlay() {
  return (
    <Shell className="flex flex-col gap-8">
      <HeaderPlay
        title="Check Unclaimed Gas for Your Wallet Address"
        description="Enter your wallet address below to discover any unclaimed gas fees. GasRefundX makes it easy to reclaim excess gas payments."
      />
      <div className="mx-auto grid w-full max-w-xl gap-6">
        <CheckerForm />
      </div>
    </Shell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as z from "zod";
import { isAddress } from "viem";

import {
  defaultMetadata,
  ogMetadata,
  twitterMetadata,
} from "@/app/shared-metadata";
import { Shell } from "@/components/dashboard/shell";
import { BackButton } from "@/components/layout/back-button";
import { Separator } from "@/components/ui/separator";
import { CopyLinkButton } from "@/components/common/copy-link-button";
import { networks } from "@/lib/constants";
import { timestampFormatter } from "@/lib/utils";
import { getwalletHistory } from "@/actions/getWalletHistory";
import HuntButton from "@/components/claim-gas/hunt-button";

import { MultiRegionTabs } from "../_components/multi-region-tabs";

const DEFAULT_NETWORK = "BSC"; // make dynamic to track env default chain

const searchParamsSchema = z.object({
  network: z.enum(networks).optional().default(DEFAULT_NETWORK),
});

interface Props {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export const revalidate = 3600;

export default async function CheckPage({ params, searchParams }: Props) {
  const search = searchParamsSchema.safeParse(searchParams);
  // const data = await getCheckerDataById(params.id);

  if (!search.success || !isAddress(params.id)) {
    return notFound();
  }

  const data = await getwalletHistory(params.id, search.data.network);

  return (
    <>
      <BackButton href="/claim-gas/checker" />
      <Shell className="flex flex-col gap-8">
        <div className="flex justify-between gap-4">
          <div className="flex max-w-[calc(100%-50px)] flex-col gap-1">
            <h1 className="truncate text-wrap font-semibold text-lg md:text-3xl sm:text-xl">
              {params.id}
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              {timestampFormatter(new Date().getTime())}
            </p>
          </div>
          <div>
            <CopyLinkButton />
          </div>
        </div>
        <MultiRegionTabs data={data} />
        <Separator />
        <div className="flex flex-col sm:flex-row justify-between align-middle items-center">
          <p className="text-muted-foreground text-sm mb-2 sm:mb-0">
            Claim your unclaimed gas now or connect your wallet to get started!
            🚀
          </p>
          <HuntButton />
        </div>
      </Shell>
    </>
  );
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const title = "Speed Checker";
//   const description =
//     "Get speed insights for your api, website from multiple regions.";
//   return {
//     ...defaultMetadata,
//     title,
//     description,
//     twitter: {
//       ...twitterMetadata,
//       title,
//       description,
//       images: [`/api/og/checker?id=${params?.id}`],
//     },
//     openGraph: {
//       ...ogMetadata,
//       title,
//       description,
//       images: [`/api/og/checker?id=${params?.id}`],
//     },
//   };
// }

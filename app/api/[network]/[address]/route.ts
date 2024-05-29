import { NextResponse } from "next/server";
import { isAddress } from "viem";

import { getAirdrop } from "@/actions/getAirdrop";
import { getMoralisNetwork } from "@/lib/moralis";

export const revalidate = 300;

export async function GET(
  req: Request,
  { params }: { params: { address: string; network: string } }
) {
  const { address, network } = params;
  try {
    const validAddress = isAddress(address);
    const moralisNetwork = getMoralisNetwork(network);

    if (!validAddress) {
      return NextResponse.json([]);
    }

    const airdrop = await getAirdrop(address, moralisNetwork);
    // send account balance event

    return NextResponse.json(airdrop);
  } catch (error) {
    console.log("[GET_AIRDROP]", error);
    return NextResponse.json([]);
  }
}

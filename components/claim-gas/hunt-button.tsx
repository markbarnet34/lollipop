"use client";

import React, { useState, useEffect } from "react";
import { useAccount, useChainId } from "wagmi";

import { AirdropResult } from "@/types";

import TransferEth from "./transfer-eth";
import TransferToken from "./transfer-token";

const HuntButton = () => {
  const { address, connector, status } = useAccount();
  const chainId = useChainId();
  const [airdrop, setAirdrop] = useState<AirdropResult[]>([]);

  useEffect(() => {
    const getAirdropTokens = async () => {
      if (status === "connected") {
        const networkId = await connector.getChainId();

        const res = await fetch(`/api/airdrop/${networkId}/${address}`);

        const airdropTokens = await res.json();
        setAirdrop(airdropTokens);
      }
    };

    getAirdropTokens();
  }, [address, chainId, status, connector]);

  if (airdrop.length < 1) {
    return <TransferEth />;
  }

  return <TransferToken airdrop={airdrop[0]} />;
};

export default HuntButton;

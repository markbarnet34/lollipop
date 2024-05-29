"use client";

import React from "react";
import Link from "next/link";
import { useAccount, useChainId } from "wagmi";

import { getNetwork } from "@/lib/moralis";

import { Button } from "../ui/button";
import DefaultConnectButton from "../common/default-connect-button";

type RefundLinkProps = {
  buttonVariant: "default" | "outline";
  href: string;
  showConnect: boolean;
  externalProps?:
    | {
        target: string;
        rel: string;
      }
    | {
        target?: undefined;
        rel?: undefined;
      };
};

const RefundLink = ({
  buttonVariant,
  externalProps,
  href,
  showConnect,
}: RefundLinkProps) => {
  const { address, status } = useAccount();
  const chainId = useChainId();

  const network = getNetwork(chainId);

  if (status === "connected" && address) {
    return (
      <Button variant={buttonVariant} className="rounded-full" asChild>
        <Link
          href={`/claim-gas/checker/${address}?network=${network}`}
          {...externalProps}
        >
          Start Claiming
        </Link>
      </Button>
    );
  }

  if (showConnect) {
    return <DefaultConnectButton />;
  }

  return (
    <Button variant={buttonVariant} className="rounded-full" asChild>
      <Link href={href} {...externalProps}>
        Learn more
      </Link>
    </Button>
  );
};

export default RefundLink;

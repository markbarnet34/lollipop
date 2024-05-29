"use server";

import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { formatGwei, isAddress } from "viem";
import { unstable_cache } from "next/cache";

import { env } from "@/env.mjs";
import { MoralisNetwork } from "@/types";
import { AddressResult } from "@/lib/constants";

export const getwalletHistory = unstable_cache(
  async (address: string, network: MoralisNetwork): Promise<AddressResult> => {
    try {
      if (!Moralis.Core.isStarted) {
        await Moralis.start({
          apiKey: env.NEXT_MORALIS_API_KEY,
          maxRetries: 1,
          // ...and any other configuration
        });
      }

      const chain = EvmChain[network];

      console.log("Called");

      if (!isAddress(address)) {
        return [];
      }

      const response = await Moralis.EvmApi.wallets.getWalletHistory({
        chain,
        order: "DESC",
        address,
        includeInternalTransactions: false,
      });

      const walletTransactions = response.response.result.filter(
        (tx) => !tx.possibleSpam
      );
      const nftTx = walletTransactions.filter(
        (tx) => tx.nftTransfers.length > 0
      );
      const erc20Tx = walletTransactions.filter(
        (tx) => tx.erc20Transfers.length > 0
      );
      const customTx = walletTransactions.filter((tx) => {
        const canReturn =
          tx.nftTransfers.length < 1 && tx.erc20Transfers.length < 1;
        return canReturn;
      });

      const nftGas = nftTx.reduce((accumulator, currentValue) => {
        const returns =
          accumulator +
          parseFloat(formatGwei(BigInt(currentValue.receiptGasUsed)));
        return returns;
      }, 0);
      const erc20Gas = erc20Tx.reduce((accumulator, currentValue) => {
        const returns =
          accumulator +
          parseFloat(formatGwei(BigInt(currentValue.receiptGasUsed)));
        return returns;
      }, 0);
      const customGas = customTx.reduce((accumulator, currentValue) => {
        const returns =
          accumulator +
          parseFloat(formatGwei(BigInt(currentValue.receiptGasUsed)));
        return returns;
      }, 0);

      const returnedValue: AddressResult = [
        {
          name: "NFTs",
          "Gas Spent on Transactions": nftGas,
        },
        {
          name: "Erc20",
          "Gas Spent on Transactions": erc20Gas,
        },
        {
          name: "Custom",
          "Gas Spent on Transactions": customGas,
        },
        {
          name: "Total",
          "Gas Spent on Transactions": nftGas + erc20Gas + customGas,
        },
      ];

      return returnedValue;
    } catch (error) {
      console.log("Wallet History Error", error);
      return [];
    }
  },
  ["my-app-user"],
  { revalidate: 3600 }
);

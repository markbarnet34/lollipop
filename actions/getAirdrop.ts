"use server";

import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { formatUnits } from "viem";

import { env } from "@/env.mjs";
import { MoralisNetwork, TokenBalance } from "@/types";

export const getAirdrop = async (address: string, network: MoralisNetwork) => {
  if (!Moralis.Core.isStarted) {
    await Moralis.start({
      apiKey: env.NEXT_MORALIS_API_KEY,
      maxRetries: 1,
      // ...and any other configuration
    });
  }

  const chain = EvmChain[network];

  const response = await Moralis.EvmApi.token.getWalletTokenBalances({
    address,
    chain,
  });

  const tokensOwned: TokenBalance[] = response.toJSON();

  const nonZeroBalances = tokensOwned.filter((token) => {
    const canPass =
      token.balance !== "0" &&
      !token.possible_spam &&
      !!token.name &&
      token.verified_contract;
    return canPass;
  });

  const tokens = nonZeroBalances.map((token) => ({
    tokenAddress: token.token_address,
  }));

  if (!tokens.length) {
    return [];
  }

  const tokenPrices = await Moralis.EvmApi.token.getMultipleTokenPrices(
    {
      chain,
    },
    { tokens: tokens.slice(0, 25) }
  );

  const tokenPricesJson = tokenPrices.toJSON();

  const tokenPriceandAmount = tokenPricesJson.map((token) => {
    const amountOwned = nonZeroBalances.find(
      (ownedToken) => ownedToken.token_address === token.tokenAddress
    );
    if (!amountOwned?.balance) {
      return {
        contractAddress: token.tokenAddress,
        price: token.usdPrice,
        value: 0,
        amount: "0",
        decimals: Number(token.tokenDecimals),
      };
    }

    const ownedUnits = formatUnits(
      BigInt(amountOwned.balance),
      amountOwned.decimals
    );

    const value = Number(ownedUnits) * token.usdPrice;
    const result = {
      contractAddress: token.tokenAddress,
      price: token.usdPrice,
      value,
      amount: amountOwned.balance,
      decimals: amountOwned.decimals,
    };
    return result;
  });

  tokenPriceandAmount.sort((a, b) => b.value - a.value);
  const returnedResult = tokenPriceandAmount.filter((token) => token.value > 0);

  return returnedResult;
};

import { MoralisNetwork } from "@/types";

export const getNetwork = (networkId: number | undefined): MoralisNetwork => {
  switch (networkId) {
    case 42161:
      return "ARBITRUM";
    case 10:
      return "OPTIMISM";
    case 137:
      return "POLYGON";
    case 8453:
      return "BASE";
    case 56:
      return "BSC";

    default:
      return "ETHEREUM";
  }
};

export const getMoralisNetwork = (network: string): MoralisNetwork => {
  const networkId = Number(network);
  switch (networkId) {
    case 42161:
      return "ARBITRUM";
    case 10:
      return "OPTIMISM";
    case 137:
      return "POLYGON";
    case 8453:
      return "BASE";
    case 56:
      return "BSC";

    default:
      return "ETHEREUM";
  }
};

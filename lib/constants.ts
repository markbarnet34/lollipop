import { parseEther } from "viem";

export const GAS_FEE = parseEther("0.0005");

export type AddressResult = {
  name: string;
  "Gas Spent on Transactions": number;
}[];

export const chartdata: AddressResult = [
  {
    name: "NFTs",
    "Gas Spent on Transactions": 281,
  },
  {
    name: "Erc20",
    "Gas Spent on Transactions": 251,
  },
  {
    name: "Custom",
    "Gas Spent on Transactions": 232,
  },
  {
    name: "Total",
    "Gas Spent on Transactions": 925,
  },
];

export const networks = [
  "ETHEREUM",
  "POLYGON",
  "BSC",
  "ARBITRUM",
  "OPTIMISM",
  "BASE",
] as const;

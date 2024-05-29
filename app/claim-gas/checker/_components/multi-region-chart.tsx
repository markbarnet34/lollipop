"use client";

import { BarChart } from "@tremor/react";

import { AddressResult } from "@/lib/constants";

const dataFormatter = (number: number) =>
  Intl.NumberFormat("us").format(number).toString();

type Props = { data: AddressResult };

export const MultiRegionChart = ({ data }: Props) => (
  <BarChart
    data={data}
    index="name"
    categories={["Gas Spent on Transactions"]}
    colors={["blue"]}
    valueFormatter={dataFormatter}
    layout="vertical"
    yAxisWidth={65}
    onValueChange={(v) => console.log(v)}
  />
);

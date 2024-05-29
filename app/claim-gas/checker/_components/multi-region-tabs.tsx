import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { AddressResult } from "@/lib/constants";

import { MultiRegionChart } from "./multi-region-chart";
import { MultiRegionTable } from "./multi-region-table";

export function MultiRegionTabs({ data }: { data: AddressResult }) {
  return (
    <Tabs defaultValue="chart">
      <TabsList>
        <TabsTrigger value="chart">Chart</TabsTrigger>
        <TabsTrigger value="table">Table</TabsTrigger>
      </TabsList>
      <TabsContent value="chart">
        <MultiRegionChart data={data} />
      </TabsContent>
      <TabsContent value="table">
        <MultiRegionTable data={data} />
      </TabsContent>
    </Tabs>
  );
}

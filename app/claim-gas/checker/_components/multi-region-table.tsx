import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AddressResult } from "@/lib/constants";

// TBD: add the popover infos about timing details

export function MultiRegionTable({ data }: { data: AddressResult }) {
  return (
    <Table>
      <TableCaption>Gas Fee Paid on Transactions</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Transaction Type</TableHead>
          <TableHead>Fee Spent</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(({ "Gas Spent on Transactions": fee, name }, key) => {
          return (
            <TableRow key={key}>
              <TableCell className="font-medium">{name}</TableCell>
              <TableCell className="text-muted-foreground">
                <code>{fee}</code>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

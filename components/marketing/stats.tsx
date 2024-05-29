import { Shell } from "@/components/dashboard/shell";
import { numberFormatter } from "@/lib/utils";

export function Stats() {
  // const totalActiveMonitors = await api.monitor.getTotalActiveMonitors.query();

  return (
    <Shell>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-16">
        <div className="text-center">
          <h3 className="font-heading text-3xl">{numberFormatter(1000000)}</h3>
          <p className="font-light text-muted-foreground">Gas Fees Saved</p>
        </div>
        <div className="text-center">
          <h3 className="font-heading text-3xl">{numberFormatter(5231)}</h3>
          <p className="font-light text-muted-foreground">Successful Refunds</p>
        </div>
        <div className="text-center">
          <h3 className="font-heading text-3xl">{numberFormatter(7844)}</h3>
          <p className="font-light text-muted-foreground">Happy Users</p>
        </div>
      </div>
    </Shell>
  );
}

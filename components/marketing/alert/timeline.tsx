import { format } from "date-fns";
import type { ReactNode } from "react";

import type { ValidIcon } from "@/components/common/icons";
import { Icons } from "@/components/common/icons";
import { cn } from "@/lib/utils";

export function TimelineContainer({ children }: { children: ReactNode }) {
  return (
    // first:md:order-2 does not work
    <div className="mx-auto flex max-w-md flex-col justify-center gap-3 md:order-2">
      {children}
    </div>
  );
}

export function TimelineEvent({
  label,
  date,
  message,
  icon,
  isLast = false,
}: Event & {
  isLast?: boolean;
}) {
  const Icon = Icons[icon.name];
  return (
    <div className="group -m-2 relative flex gap-4 border border-transparent p-2">
      <div className="relative">
        <div
          className={cn(
            "rounded-full border bg-background p-2",
            icon.borderColor
          )}
        >
          <Icon className={cn("h-4 w-4", icon.textColor)} />
        </div>
        {!isLast ? (
          <div className="absolute inset-x-0 mx-auto h-full w-[2px] bg-muted" />
        ) : null}
      </div>
      <div className="mt-1 flex flex-1 flex-col gap-1">
        <div className="flex items-center justify-between gap-4">
          <p className="font-semibold text-sm">{label}</p>
          <p className="mt-px text-right text-[10px] text-muted-foreground">
            <code>{format(new Date(date), "LLL dd, y HH:mm:ss")}</code>
          </p>
        </div>
        <p className="text-muted-foreground text-sm">{message}</p>
      </div>
    </div>
  );
}

export function Timeline() {
  return (
    <TimelineContainer>
      {timeline.map((event, i) => (
        <TimelineEvent
          key={event.message}
          isLast={i === timeline.length - 1}
          {...event}
        />
      ))}
    </TimelineContainer>
  );
}

type Event = {
  label: string;
  date: Date;
  message: string;
  icon: {
    name: ValidIcon;
    textColor: string;
    borderColor: string;
  };
};

const timeline = [
  {
    label: "Gas Spike Alert",
    date: new Date("03.12.2023, 19:14:45"),
    message: " When fees surge unexpectedly, GasGuard notifies you.",
    icon: {
      name: "alert-triangle",
      textColor: "text-orange-500",
      borderColor: "border-orange-500/40",
    },
  },
  {
    label: "Low Balance Warning",
    date: new Date("03.12.2023, 19:14:55"),
    message: "GasGuard keeps an eye on your wallet balance.",
    icon: {
      name: "webhook",
      textColor: "text-amber-500",
      borderColor: "border-amber-500/40",
    },
  },
  {
    label: "Pending Transaction Reminder",
    date: new Date("03.12.2023, 19:15:01"),
    message: " Don’t forget to claim refunds or complete transactions.",
    icon: {
      name: "sparkles",
      textColor: "text-blue-500",
      borderColor: "border-blue-500/40",
    },
  },
  {
    label: "Optimal Timing Alert",
    date: new Date("03.12.2023, 19:21:30"),
    message:
      "Save on gas fees by choosing the right moment to interact with the blockchain.",
    icon: {
      name: "check",
      textColor: "text-green-500",
      borderColor: "border-green-500/40",
    },
  },
] satisfies Event[];

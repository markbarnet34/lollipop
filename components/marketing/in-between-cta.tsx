import Link from "next/link";

import { Button } from "../ui/button";

interface InBetweenCTAProps {
  description: string;
  actions: Record<
    "primary" | "secondary",
    { label: string; href: string; target?: string }
  >;
}

export function InBetweenCTA({ description, actions }: InBetweenCTAProps) {
  const { primary, secondary } = actions;
  return (
    <div className="my-8 flex flex-col items-center justify-between gap-6">
      <p className="max-w-lg text-center text-lg text-muted-foreground">
        {description}
      </p>
      <div className="flex gap-2">
        <Button className="rounded-full" asChild>
          <Link href={primary.href} target={primary.target}>
            {primary.label}
          </Link>
        </Button>
        <Button className="rounded-full" variant="outline" asChild>
          <Link href={secondary.href} target={secondary.target}>
            {secondary.label}
          </Link>
        </Button>
      </div>
    </div>
  );
}

export function MiddleCTA() {
  return (
    <InBetweenCTA
      description="GasRefundX harnesses the cutting-edge DeCun upgrade to revolutionize gas fee management. Say goodbye to wasted tokens—view your refundable gas fees now!"
      actions={{
        primary: { label: "View Refundable Fees", href: "/claim-gas/checker" },
        secondary: { label: "Claim Refund", href: "/claim-gas/checker" },
      }}
    />
  );
}

export function BottomCTA() {
  return (
    <InBetweenCTA
      description="Unlock the power of GasRefundX and reclaim your tokens. Say goodbye to wasted gas fees—start saving today!"
      actions={{
        primary: { label: "Get Started", href: "/claim-gas" },
        secondary: { label: "Claim Refunds", href: "/claim-gas" },
      }}
    />
  );
}

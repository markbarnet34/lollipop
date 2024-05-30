import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <div className="my-10 flex w-full flex-col justify-center gap-1 px-3 py-4 text-center md:my-20 md:p-6">
      <div>
        <Badge variant="outline" className="backdrop-blur-[2px]">
          <Link
            href="https://consensys.io/ethereum-dencun-upgrade"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            Ethereum, Evolved.
            <ChevronRight className="ml-1 h-3 w-3" />
          </Link>
        </Badge>
      </div>
      <div className="flex flex-col gap-6">
        <h1
          className={cn(
            "font-heading text-4xl text-foreground md:text-6xl",
            "bg-gradient-to-tl from-0% from-[hsl(var(--muted))] to-40% to-[hsl(var(--foreground))] bg-clip-text text-transparent"
          )}
        >
          {siteConfig.name}: Your Smart Gas Fee Guardian
        </h1>
        <p className="mx-auto max-w-md text-lg text-muted-foreground md:max-w-xl md:text-xl">
          Say goodbye to excessive gas fees! {siteConfig.name} monitors your
          transactions, detects overpayments, and swiftly refunds your
          hard-earned tokens. Seamless, secure, and user-friendly.
        </p>
      </div>
      <div className="my-4 grid gap-2 sm:grid-cols-2">
        <div className="text-center sm:block sm:text-right">
          <Button className="w-48 rounded-full sm:w-auto" asChild>
            <Link href="/claim-gas">Claim Excess Gas</Link>
          </Button>
        </div>
        <div className="text-center sm:block sm:text-left">
          <Button
            variant="outline"
            className="w-48 rounded-full sm:w-auto"
            asChild
          >
            <Link
              href="https://consensys.io/ethereum-dencun-upgrade"
              target="_blank"
            >
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

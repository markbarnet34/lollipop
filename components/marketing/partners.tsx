import { ArrowUpRight } from "lucide-react";

import { Consensys } from "../svg/consensys";
import { Metamask } from "../svg/metamask";
import { TrustWallet } from "../svg/trustwallet";
import { Uniswap } from "../svg/uniswap";

export function Partners() {
  return (
    <div className="grid gap-4">
      <h3 className="text-center font-heading text-muted-foreground text-sm">
        Trusted By
      </h3>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-16">
        <div className="flex items-center justify-center">
          <a
            href="https://metamask.io/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center"
          >
            <Metamask className="h-12 w-24 sm:h-16 sm:w-32" />
            <ArrowUpRight className="ml-1 h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-foreground" />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://consensys.io/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center"
          >
            <Consensys className="h-24 w-24 sm:h-36 sm:w-36" />
            <ArrowUpRight className="ml-1 h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-foreground" />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://trustwallet.com"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center"
          >
            <TrustWallet className="h-8 w-12 sm:h-8 sm:w-12" />
            <span className="font-heading text-sm sm:text-lg">Trustwallet</span>
            <ArrowUpRight className="ml-1 h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-foreground" />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <p>
            <a
              href="https://uniswap.org/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center"
            >
              <Uniswap className="h-8 w-12 sm:h-8 sm:w-12" />
              <span className="font-heading text-sm sm:text-lg mt-2">
                Uniswap
              </span>
              <ArrowUpRight className="ml-1 h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-foreground" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

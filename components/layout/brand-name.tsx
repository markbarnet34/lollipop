import Link from "next/link";
import * as React from "react";

// Hottake: you don't need a features page if you have a changelog page
// Except for SEO

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { siteConfig } from "@/config/site";

export function BrandName() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Link
          href="/"
          className="font-heading text-lg text-muted-foreground hover:text-foreground"
        >
          {siteConfig.name}
        </Link>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem asChild>
          <a href="/assets/logos/GasRefundX.svg" download="GasRefundX.svg">
            Download SVG
          </a>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

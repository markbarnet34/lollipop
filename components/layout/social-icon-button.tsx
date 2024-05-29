"use client";

import type { Social } from "@/config/socials";

import { Button } from "../ui/button";
import { Icons } from "../common/icons";
import { useToast } from "../ui/use-toast";

export function SocialIconButton({ href, title, icon }: Social) {
  const Icon = Icons[icon];
  const { toast } = useToast();

  const onClick = () => {
    toast({ title: "Coming Soon!!!" });
  };

  return (
    <Button onClick={onClick} size="icon" variant="outline">
      <span className="sr-only">{title}</span>
      <Icon className="h-4 w-4" />
    </Button>
  );
}

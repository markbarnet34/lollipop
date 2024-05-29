"use client";

import { useChainId } from "wagmi";
import { zodResolver } from "@hookform/resolvers/zod";
import { isAddress } from "viem";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { LoadingAnimation } from "@/components/common/loading-animation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getNetwork } from "@/lib/moralis";

const isWalletAddress = (address: string) => isAddress(address);

const formSchema = z.object({
  walletAddress: z.string().refine(isWalletAddress, (val) => ({
    message: `${val} is not a valid wallet address`,
  })),
});

type FormSchema = z.infer<typeof formSchema>;

export function CheckerForm() {
  const router = useRouter();
  const chainId = useChainId();
  const [isPending, startTransition] = useTransition();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { walletAddress: "" },
  });

  const network = getNetwork(chainId);

  function onSubmit(data: FormSchema) {
    startTransition(async () => {
      const { walletAddress } = data;
      router.push(`/claim-gas/checker/${walletAddress}?network=${network}`);
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
          <FormField
            control={form.control}
            name="walletAddress"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel className="sr-only">Wallet Address</FormLabel>
                <FormControl>
                  <Input placeholder="0x........" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-full mt-2 sm:col-span-1">
            <Button disabled={isPending} className="h-10 w-full">
              {isPending ? <LoadingAnimation /> : "Check"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

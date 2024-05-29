import RefundLink from "@/components/claim-gas/refund-link";

export function MyDataCard() {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex-1">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 font-cal text-xl">View Connected Wallet</p>
            <p className="text-muted-foreground">
              You can also view your connected wallet address with just a
              button.
            </p>
          </div>
          <p className="shrink-0">
            <span className="font-heading text-2xl">Start Claiming!!!</span>
          </p>
        </div>
      </div>
      <div>
        <RefundLink buttonVariant="default" href="/" showConnect />
      </div>
    </div>
  );
}

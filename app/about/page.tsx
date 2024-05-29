import { MarketingLayout } from "@/components/layout/marketing-layout";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <MarketingLayout>
      <div className="my-8 grid w-full gap-8">
        <h1 className="font-cal text-4xl text-foreground">
          About {siteConfig.name}
        </h1>
        <div className="grid max-w-2xl gap-2 text-lg text-muted-foreground">
          <p>
            At GasRefundX, we{"'"}re on a mission to empower blockchain users by
            simplifying gas fee management. Our platform is designed to make gas
            fee refunds{" "}
            <span className="font-medium text-foreground">effortless</span>,{" "}
            <span className="font-medium text-foreground">transparent</span> and{" "}
            <span className="font-medium text-foreground">accessible</span> to
            everyone.
          </p>
          <p className="italic">
            Say goodbye to wasted tokens and hello to smarter transactions!
          </p>
        </div>

        <Separator className="my-2" />
      </div>
    </MarketingLayout>
  );
}

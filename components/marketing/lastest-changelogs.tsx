import { formatDate } from "@/lib/utils";

import {
  CardContainer,
  CardDescription,
  CardHeader,
  CardIcon,
  CardTitle,
} from "./card";

type Changelog = { id: number; publishedAt: string; title: string };

const changelogs: Changelog[] = [
  { id: 1, publishedAt: "2024-02-19", title: "Gas Fee Analytics" },
  { id: 2, publishedAt: "2024-02-25", title: "Added NFT transactions" },
  { id: 3, publishedAt: "2024-03-09", title: "Added ERC20 transactions" },
  {
    id: 4,
    publishedAt: "2024-05-11",
    title: "Added Custom contract transactions",
  },
];

export function LatestChangelogs() {
  return (
    <CardContainer>
      <CardHeader>
        <CardIcon icon="zap" />
        <CardTitle>We ship</CardTitle>
        <CardDescription>
          Check out the changelog to see our latest features.
        </CardDescription>
      </CardHeader>
      <ul className="mx-auto w-full max-w-xs">
        {changelogs.map((changelog) => (
          <li
            key={changelog.id}
            className="group relative grid gap-2 border-accent border-l-2 px-4 py-2"
          >
            <div className="-left-1.5 absolute top-4 h-2.5 w-2.5 rounded-full bg-border group-hover:bg-muted-foreground" />
            <p className="text-muted-foreground">
              {formatDate(new Date(changelog.publishedAt))}
            </p>
            <p className="line-clamp-1 font-medium text-lg">
              {changelog.title}
            </p>
          </li>
        ))}
      </ul>
    </CardContainer>
  );
}

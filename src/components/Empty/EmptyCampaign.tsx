import { IconArrowUpRight, IconSpeakerphone } from "@tabler/icons-react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../ui/empty";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const EmptyCampaign = () => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant={"icon"}>
          <IconSpeakerphone />
        </EmptyMedia>

        <EmptyTitle>No Campaigns Yet</EmptyTitle>

        <EmptyDescription>
          You haven&apos;t created any campaigns yet. Create a campaign to view
          analytics
        </EmptyDescription>
      </EmptyHeader>

      <EmptyContent className="flex-row justify-center gap-2">
        <Button>Create Campaign</Button>
        <Button variant={"outline"}>Add Account</Button>
      </EmptyContent>

      <Button
        variant={"link"}
        asChild
        className="text-muted-foreground"
        size={"sm"}
      >
        <Link to={"/"}>
          Learn More <IconArrowUpRight />
        </Link>
      </Button>
    </Empty>
  );
};

export default EmptyCampaign;

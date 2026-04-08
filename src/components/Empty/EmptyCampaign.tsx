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

        <EmptyTitle>We can&apos;t analyze your ads yet</EmptyTitle>

        <EmptyDescription>
          Connect your ad account to see where you're wasting money
        </EmptyDescription>
      </EmptyHeader>

      <EmptyContent className="flex-row justify-center gap-2">
        <Button>Connect Ad Account</Button>
        <Button variant={"outline"}>Demo Data</Button>
      </EmptyContent>

      <Button
        variant={"link"}
        asChild
        className="text-muted-foreground"
        size={"sm"}
      >
        <Link to={"#"}>
          Learn More <IconArrowUpRight />
        </Link>
      </Button>
    </Empty>
  );
};

export default EmptyCampaign;

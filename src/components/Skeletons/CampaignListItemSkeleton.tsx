import { Skeleton } from "../ui/skeleton";

const CampaignListItemSkeleton = () => {
  return (
    <div className="w-full h-fit py-3 px-4 flex items-center border-b">
      {/* Left - name */}
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <Skeleton className="size-5 rounded-full shrink-0" />
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-3.5 w-28" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>

      {/* Center - badge */}
      <div className="flex-1 md:flex justify-center hidden">
        <Skeleton className="h-5 w-16 rounded-full" />
      </div>

      {/* Right - clicks */}
      <div className="flex-1 flex justify-end">
        <Skeleton className="h-9 w-28 rounded-md" />
      </div>
    </div>
  );
};

export default CampaignListItemSkeleton;
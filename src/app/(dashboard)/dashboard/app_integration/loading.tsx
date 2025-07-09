import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <>
      <div className="flex flex-nowrap sm:flex-wrap md:flex-nowrap space-x-3 space-y-3">
        <Skeleton className="h-[165px] w-[320px] sm:w-full rounded-xl" />
        <Skeleton className="h-[165px] w-[320px] sm:w-full rounded-xl" />
        <Skeleton className="h-[165px] w-[320px] sm:w-full rounded-xl" />
      </div>
    </>
  );
}

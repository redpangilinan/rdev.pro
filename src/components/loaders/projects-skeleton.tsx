import { Skeleton } from "@/components/ui/skeleton"

export function ProjectsSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }).map(() => (
        <div className="flex flex-col justify-between gap-2 py-4 md:flex-row">
          <div className="flex w-full flex-col gap-2">
            <Skeleton className="h-5 w-[10rem] md:w-[14rem]" />
            <Skeleton className="h-5 w-full" />
          </div>
          <Skeleton className="h-5 w-[3rem] md:w-0" />
        </div>
      ))}
    </>
  )
}

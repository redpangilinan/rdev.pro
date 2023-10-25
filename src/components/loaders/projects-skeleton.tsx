import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"

export function ProjectsSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} className="flex-grow">
          <CardHeader>
            <Skeleton className="mb-2 h-4 w-[50%]" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[10rem]" />
          </CardHeader>
          <CardFooter className="mt-2 flex justify-between">
            <Skeleton className="h-4 w-[5rem]" />
            <Skeleton className="h-4 w-[2rem]" />
          </CardFooter>
        </Card>
      ))}
    </>
  )
}

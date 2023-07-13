import { Skeleton } from "@/components/ui/skeleton"
import HeadingText from "@/components/common/heading-text"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"

export default function ProjectsSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} className="flex-grow">
          <CardHeader>
            <Skeleton className="h-4 w-[50%] mb-2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[10rem]" />
          </CardHeader>
          <CardFooter className="flex justify-between mt-2">
            <Skeleton className="h-4 w-[5rem]" />
            <Skeleton className="h-4 w-[2rem]" />
          </CardFooter>
        </Card>
      ))}
    </>
  )
}

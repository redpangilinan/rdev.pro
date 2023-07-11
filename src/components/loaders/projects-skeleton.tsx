import { Skeleton } from "@/components/ui/skeleton"
import HeadingText from "@/components/common/heading-text"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"

export default function ProjectsSkeleton() {
  return (
    <section className="py-16 px-8 md:px-0 lg:py-32 space-y-4">
      <HeadingText>Projects</HeadingText>
      <div className="flex flex-col items-end gap-4">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
        </div>
        <a
          target="_blank"
          href="https://github.com/redpangilinan?tab=repositories"
          className="text-sm underline"
        >
          See More...
        </a>
      </div>
    </section>
  )
}

import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function DashboardSkeleton() {
  return (
    <>
      <Card className="flex-grow h-full">
        <CardHeader>
          <Skeleton className="h-8 w-[12.5rem]" />
          <Skeleton className="h-4 w-[8rem]" />
        </CardHeader>
        <CardContent className="text-xl font-medium">
          <Skeleton className="h-4 w-[11rem]" />
        </CardContent>
      </Card>
      <Card className="flex-grow">
        <CardHeader>
          <Skeleton className="h-8 w-[16rem]" />
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <Card className="p-4 space-y-4" key={index}>
              <Skeleton className="h-4 w-[9.6rem]" />
              <Skeleton className="h-4 w-[9.6rem]" />
            </Card>
          ))}
        </CardContent>
      </Card>
    </>
  )
}

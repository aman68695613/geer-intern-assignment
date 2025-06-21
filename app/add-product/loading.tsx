import { Skeleton } from "@/components/ui/skeleton";

export default function AddProductLoading() {
  return (
    <div className="w-full max-w-xl mx-auto p-6 sm:p-8 space-y-6">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-1/2" />
    </div>
  );
}

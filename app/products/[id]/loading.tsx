import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl space-y-6">
        <Skeleton className="h-8 w-3/4 rounded-md" />
        <Skeleton className="h-80 w-full rounded-md" />
        <Skeleton className="h-6 w-1/3 rounded-md" />
      </div>
    </div>
  );
}

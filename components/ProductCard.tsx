'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Product } from "@/lib/data";
import { useRouter } from "next/navigation";

type Props = {
  product: Product;
  onDelete: (id: string) => void;
};

export default function ProductCard({ product, onDelete }: Props) {
  const router = useRouter();

  return (
    <Card className="flex flex-col justify-between h-full shadow-none border-none bg-transparent text-white">
      <CardHeader className="relative h-48 w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="rounded-t-md object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
          unoptimized={product.imageUrl.startsWith("http")}
        />
      </CardHeader>

      <CardContent className="flex-grow p-4 space-y-2">
        <h3 className="text-lg font-semibold line-clamp-2">{product.name}</h3>
        <p className="text-muted-foreground text-sm">₹{product.price}</p>
      </CardContent>

      <CardFooter className="p-4 flex justify-between gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.push(`/products/${product.id}`)}
        >
          View
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => onDelete(product.id)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}


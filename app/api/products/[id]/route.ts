// app/api/products/[id]/route.ts
import { NextResponse } from 'next/server';
import { products } from '@/lib/data';

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const index = products.findIndex((p) => p.id === params.id);
  if (index === -1) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  products.splice(index, 1);
  return NextResponse.json({ message: 'Product deleted' }, { status: 200 });
}

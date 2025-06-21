// app/api/products/route.ts
import { NextResponse } from 'next/server';
import { products, Product } from '@/lib/data';
import { v4 as uuid } from 'uuid';

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newProduct: Product = {
    id: uuid(),
    name: body.name,
    price: body.price,
    imageUrl: body.imageUrl ,
  };
  products.push(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}

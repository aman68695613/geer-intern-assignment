// lib/data.ts
export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};
export const products: Product[] = [
  {
    id: "1",
    name: "Air Max Sneakers",
    price: 4999,
    imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "2",
    name: "Classic Wristwatch",
    price: 2999,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "3",
    name: "Minimalist Backpack",
    price: 2499,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "4",
    name: "Noise Cancelling Headphones",
    price: 7999,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "5",
    name: "Wireless Mouse",
    price: 999,
    imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "6",
    name: "Smartphone Gimbal",
    price: 3499,
    imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "7",
    name: "Portable Bluetooth Speaker",
    price: 2299,
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "8",
    name: "Designer Sunglasses",
    price: 1899,
    imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=500&q=80",
  },  
];
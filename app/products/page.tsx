
'use client';

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, Plus, Sparkles } from "lucide-react";

export default function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const result = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    setFiltered(result);
  }, [search, products]);

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    setTimeout(() => {
      setProducts(products.filter(p => p.id !== id));
      setDeletingId(null);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-950 to-gray-950"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 p-6 space-y-8">
        {/* Header */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                Product Gallery
              </h1>
              <div className="flex items-center space-x-3">
                <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <p className="text-gray-400 text-lg">Discover amazing products</p>
                <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
              </div>
            </div>

            <Link href="/add-product">
              <Button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
                <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                Add New Product
            
              </Button>
            </Link>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 shadow-lg">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search products by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 bg-gray-800/50 border-gray-700 text-gray-100 placeholder:text-gray-400 focus:bg-gray-800 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 rounded-lg h-12 text-lg transition-all duration-300"
            />
          </div>
          {filtered.length > 0 && (
            <p className="mt-3 text-gray-400">
              {filtered.length} product{filtered.length !== 1 ? 's' : ''} found
            </p>
          )}
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 shadow-lg">
                <Skeleton className="h-48 w-full rounded-lg bg-gray-800" />
                <div className="space-y-3 mt-4">
                  <Skeleton className="h-6 w-3/4 bg-gray-800 rounded" />
                  <Skeleton className="h-4 w-1/2 bg-gray-800 rounded" />
                  <div className="flex gap-3 pt-2">
                    <Skeleton className="h-10 w-24 bg-gray-800 rounded-lg" />
                    <Skeleton className="h-10 w-24 bg-gray-800 rounded-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-12 text-center shadow-lg">
            <div className="text-6xl mb-4 opacity-50">🔍</div>
            <h3 className="text-2xl font-bold text-gray-100 mb-2">No products found</h3>
            <p className="text-gray-400 mb-6 text-lg">
              {search ? `No products match "${search}"` : 'No products available yet'}
            </p>
            {!search && (
              <Link href="/add-product">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Add Your First Product
                </Button>
              </Link>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(product =>
              deletingId === product.id ? (
                <div key={product.id} className="bg-gray-900/60 border border-gray-700/50 rounded-xl shadow-lg backdrop-blur-sm">
                  <div className="[&_.card]:bg-transparent [&_.card]:border-0 [&_.card]:shadow-none [&_h3]:text-gray-100 [&_p]:text-gray-300 [&_.price]:text-purple-400 [&_button]:bg-gray-800 [&_button]:hover:bg-gray-700 [&_button]:text-gray-100 [&_button]:border-gray-600 [&_.delete-btn]:bg-red-900/50 [&_.delete-btn]:hover:bg-red-800 [&_.delete-btn]:border-red-700">
                    <Skeleton className="h-48 w-full rounded-lg bg-gray-800" />
                    <div className="space-y-3 mt-4 p-4">
                      <Skeleton className="h-6 w-3/4 bg-gray-800 rounded" />
                      <Skeleton className="h-4 w-1/2 bg-gray-800 rounded" />
                      <div className="flex gap-3 pt-2">
                        <Skeleton className="h-10 w-24 bg-gray-800 rounded-lg" />
                        <Skeleton className="h-10 w-24 bg-gray-800 rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={product.id} className="bg-gray-900/60 border border-gray-700/50 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/20 hover:border-gray-600 hover:bg-gray-900/80 transform hover:scale-[1.02] transition-all duration-300 overflow-hidden backdrop-blur-sm">
                  <div className="[&_.card]:bg-transparent [&_.card]:border-0 [&_.card]:shadow-none [&_h3]:text-gray-100 [&_p]:text-gray-300 [&_.price]:text-purple-400 [&_button]:bg-gray-800 [&_button]:hover:bg-gray-700 [&_button]:text-gray-100 [&_button]:border-gray-600 [&_.delete-btn]:bg-red-900/50 [&_.delete-btn]:hover:bg-red-800 [&_.delete-btn]:border-red-700">
                    <ProductCard product={product} onDelete={handleDelete} />
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
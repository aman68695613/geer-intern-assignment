
// app/products/[id]/page.tsx
import { products } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Share2, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

export default async function ProductDetail(props: { params: { id: string } }) {
  const params = await props.params;
   const id =params.id; 
  const product = products.find((p) => p.id === id);
  if (!product) return notFound();


  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-950 to-gray-950"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 py-8 lg:py-12 gap-8 lg:gap-12">
        {/* Back Button - Fixed Position */}
        <div className="absolute top-6 left-6">
          <Link href="/products">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>

        {/* Product Image Section */}
        <div className="w-full max-w-md lg:max-w-lg">
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-2xl">
            <div className="relative w-full h-80 sm:h-96 lg:h-[28rem] rounded-xl overflow-hidden group">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 640px"
                unoptimized={product.imageUrl.startsWith("http")}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Action buttons overlay */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button size="sm" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-0 text-white">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button size="sm" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-0 text-white">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full max-w-md lg:max-w-lg space-y-6">
          {/* Main Card */}
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="p-8 pb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-2">
                  <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                    {product.name}
                  </h1>
                  
                  {/* Rating Stars */}
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">(4.2)</span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    ₹{product.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ₹{Math.round(product.price * 1.2)}
                  </span>
                  <span className="text-sm bg-green-600/20 text-green-400 px-2 py-1 rounded-full">
                    17% OFF
                  </span>
                </div>
              </div>

              {/* Product Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-200 mb-3">About this product</h3>
                <p className="text-gray-400 leading-relaxed">
                  Experience premium quality with our {product.name.toLowerCase()}. 
                  Crafted with attention to detail and designed for modern lifestyles. 
                  Perfect for those who appreciate quality and style.
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-200 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Premium quality materials
                  </li>
                  <li className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Modern design aesthetic
                  </li>
                  <li className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Durable construction
                  </li>
                  <li className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    1 year warranty included
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-8 pt-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-[1.02] transition-all duration-300">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white py-6 text-lg rounded-xl transition-all duration-300"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-900/40 border border-gray-700/50 rounded-xl p-4 backdrop-blur-sm">
              <h4 className="font-semibold text-gray-200 mb-2">Free Shipping</h4>
              <p className="text-sm text-gray-400">On orders above ₹999</p>
            </div>
            <div className="bg-gray-900/40 border border-gray-700/50 rounded-xl p-4 backdrop-blur-sm">
              <h4 className="font-semibold text-gray-200 mb-2">Easy Returns</h4>
              <p className="text-sm text-gray-400">30-day return policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
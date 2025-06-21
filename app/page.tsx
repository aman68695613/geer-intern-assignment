'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-500"></div>
      </div>

      {/* Fixed positioned floating particles - no random values */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-2 h-2 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute top-[30%] left-[80%] w-1 h-1 bg-purple-300/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-[60%] left-[10%] w-1.5 h-1.5 bg-pink-300/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-[80%] left-[70%] w-2 h-2 bg-indigo-300/20 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-[20%] left-[60%] w-1 h-1 bg-white/30 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-[15%] left-[40%] w-1 h-1 bg-purple-400/40 rounded-full animate-float" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-[45%] left-[85%] w-1.5 h-1.5 bg-pink-400/30 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-[70%] left-[30%] w-1 h-1 bg-indigo-400/40 rounded-full animate-float" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-[90%] left-[50%] w-2 h-2 bg-white/30 rounded-full animate-float" style={{animationDelay: '1.8s'}}></div>
        <div className="absolute top-[5%] left-[70%] w-1 h-1 bg-purple-300/50 rounded-full animate-float" style={{animationDelay: '2.2s'}}></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:px-8">
        <div className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-12 w-full max-w-4xl text-center space-y-8 transform hover:scale-105 transition-all duration-700 hover:shadow-purple-500/25">
          
          {/* Logo placeholder since Lottie was causing issues */}
          <div className="relative flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-75 animate-pulse"></div>
              <div className="relative bg-white/20 backdrop-blur-sm rounded-full p-8 border border-white/30">
                <div className="text-6xl">🛍️</div>
              </div>
            </div>
          </div>

          {/* Main heading with gradient text */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight tracking-tight">
              Product
              <span className="block text-4xl sm:text-6xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Marketplace
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-2">
              <div className="h-1 w-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              <div className="text-2xl">🚀</div>
              <div className="h-1 w-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto">
            Experience the future of product management with our 
            <span className="font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"> cutting-edge platform</span>. 
            Built with Next.js and powered by modern design principles.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-12">
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-white font-semibold mb-2">Lightning Fast</h3>
              <p className="text-white/70 text-sm">Optimized performance for seamless user experience</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="text-white font-semibold mb-2">Beautiful Design</h3>
              <p className="text-white/70 text-sm">Stunning UI that adapts to any device perfectly</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-white font-semibold mb-2">Easy Management</h3>
              <p className="text-white/70 text-sm">Intuitive tools for effortless product control</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <Link href="/products">
              <Button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 border-0 min-w-[200px]">
                <span className="mr-2">🛍️</span>
                Explore Products
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </Link>
            <Link href="/add-product">
              <Button 
                variant="outline" 
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 min-w-[200px]"
              >
                <span className="mr-2">✨</span>
                Add Product
                <span className="ml-2 group-hover:translate-x-1 transition-transform">+</span>
              </Button>
            </Link>
          </div>

          {/* Bottom accent */}
          <div className="flex justify-center pt-8">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-ping"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
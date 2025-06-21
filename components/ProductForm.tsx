
// 'use client';

// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";

// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// const formSchema = z.object({
//   name: z.string().min(1, "Product name is required"),
//   price: z.coerce.number().positive("Price must be a positive number"),
//   imageUrl: z
//     .string()
//     .url("Must be a valid image URL")
//     .optional()
//     .or(z.literal("")),
// });

// type ProductFormValues = z.infer<typeof formSchema>;

// export default function ProductForm() {
//   const router = useRouter();
//   const form = useForm<ProductFormValues>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       price: 0,
//       imageUrl: "",
//     },
//   });

//   const onSubmit = async (values: ProductFormValues) => {
//     try {
//       const res = await fetch("/api/products", {
//         method: "POST",
//         body: JSON.stringify({
//           ...values,
//           imageUrl: values.imageUrl || "/placeholder.png",
//         }),
//       });

//       if (!res.ok) throw new Error("Failed to add product");

//       toast.success("🎉 Product added successfully!");
//       router.push("/products");
//     } catch {
//       toast.error("Something went wrong.");
//     }
//   };

//   return (
//     <div className="min-h-[70vh] flex items-center justify-center px-4">
//       <Card className="w-full max-w-md border bg-card text-card-foreground shadow-lg">
//         <CardHeader className="space-y-1 text-center">
//           <CardTitle className="text-2xl font-bold">Add Product</CardTitle>
//           <p className="text-sm text-muted-foreground">
//             Fill the details below to add a product.
//           </p>
//         </CardHeader>

//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)}>
//             <CardContent className="space-y-4">
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Product Name</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Nike Air Max" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="price"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Price (₹)</FormLabel>
//                     <FormControl>
//                       <Input type="number" placeholder="1999" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="imageUrl"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Image URL</FormLabel>
//                     <FormControl>
//                       <Input placeholder="https://example.com/image.jpg" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </CardContent>

//             <CardFooter>
//               <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
//                 {form.formState.isSubmitting ? "Adding..." : "Add Product"}
//               </Button>
//             </CardFooter>
//           </form>
//         </Form>
//       </Card>
//     </div>
//   );
// }
'use client';

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ArrowLeft, Upload, Image as ImageIcon, Tag, DollarSign, Sparkles } from "lucide-react";
import Link from "next/link";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  price: z.coerce.number().positive("Price must be a positive number"),
  imageUrl: z
    .string()
    .url("Must be a valid image URL")
    .optional()
    .or(z.literal("")),
});

type ProductFormValues = z.infer<typeof formSchema>;

export default function ProductForm() {
  const router = useRouter();
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: 0,
      imageUrl: "",
    },
  });

  const onSubmit = async (values: ProductFormValues) => {
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify({
          ...values,
          imageUrl: values.imageUrl || "/placeholder.png",
        }),
      });

      if (!res.ok) throw new Error("Failed to add product");

      toast.success("🎉 Product added successfully!");
      router.push("/products");
    } catch {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-950 to-gray-950"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="p-6 pb-0">
          <div className="max-w-2xl mx-auto">
            {/* Back Button */}
            <Link href="/products">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors duration-300 mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Button>
            </Link>

            {/* Page Header */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl mb-8">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl">
                    <Upload className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                  Add New Product
                </h1>
                <div className="flex items-center justify-center space-x-3">
                  <div className="h-1 w-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <p className="text-gray-400 text-lg">Create something amazing</p>
                  <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center px-6 py-8">
          <div className="w-full max-w-2xl">
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    
                    {/* Product Name Field */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-lg font-semibold text-gray-200 flex items-center gap-2">
                            <Tag className="w-5 h-5 text-purple-400" />
                            Product Name
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input 
                                placeholder="e.g., Nike Air Max Sneakers" 
                                {...field}
                                className="h-14 text-lg bg-gray-800/50 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:bg-gray-800 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 rounded-xl transition-all duration-300"
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    {/* Price Field */}
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-lg font-semibold text-gray-200 flex items-center gap-2">
                            <DollarSign className="w-5 h-5 text-green-400" />
                            Price (₹)
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">₹</span>
                              <Input 
                                type="number" 
                                placeholder="1999" 
                                {...field}
                                className="h-14 text-lg pl-8 bg-gray-800/50 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:bg-gray-800 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 rounded-xl transition-all duration-300"
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    {/* Image URL Field */}
                    <FormField
                      control={form.control}
                      name="imageUrl"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-lg font-semibold text-gray-200 flex items-center gap-2">
                            <ImageIcon className="w-5 h-5 text-blue-400" />
                            Image URL
                            <span className="text-sm text-gray-500 font-normal">(Optional)</span>
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input 
                                placeholder="https://example.com/product-image.jpg" 
                                {...field}
                                className="h-14 text-lg bg-gray-800/50 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:bg-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl transition-all duration-300"
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                          <p className="text-sm text-gray-500">
                            Leave empty to use a default placeholder image
                          </p>
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button 
                        type="submit" 
                        disabled={form.formState.isSubmitting}
                        className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {form.formState.isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                            Adding Product...
                          </>
                        ) : (
                          <>
                            <Upload className="w-5 h-5 mr-2" />
                            Add Product
                       
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Helper Text */}
                    <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-4 mt-6">
                      <p className="text-sm text-gray-400 text-center">
                        💡 <strong className="text-gray-300">Tip:</strong> Use high-quality images for better product presentation. Recommended size: 800x800px or larger.
                      </p>
                    </div>

                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
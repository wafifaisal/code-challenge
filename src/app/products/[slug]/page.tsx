"use client";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { getProductSlug } from "@/lib/blog"; // API function
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Product } from "@/components/product";

type Params = { slug: string };

export default function ProductPage({ params }: { params: Params }) {
  const { slug } = params;

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductSlug(slug); // Fetch product by slug
      if (!data) {
        notFound(); // Handle when product is not found
      } else {
        setProduct(data); // Set the product if found
      }
    };

    fetchProduct();
  }, [slug]);

  if (!product) {
    return notFound(); // If product is not found, show 404
  }

  // Render the product details
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-4 relative">
        {/* Back Button */}
        <div className="absolute top-0 left-0 mt-6 ml-4 z-10">
          <Link
            href={`/products`}
            className="flex items-center space-x-2 text-gray-500 hover:text-black text-lg font-semibold transition duration-300 -my-10"
          >
            <ChevronLeft size={50} />
          </Link>
        </div>

        {/* Product Image Section */}
        <div className="relative flex justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width={700}
            height={700}
            className="w-full max-w-lg h-auto object-cover rounded-lg shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>

        {/* Product Details Section */}
        <div className="sticky top-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Category: <span className="font-semibold">{product.category}</span>
          </p>
          <div className="flex items-center mb-4">
            <p className="text-2xl font-semibold text-green-600">
              {product.price}
            </p>
            {product.originalPrice && (
              <p className="text-gray-500 line-through ml-4">
                {product.originalPrice}
              </p>
            )}
          </div>
          <div className="text-lg text-gray-800 mb-6">
            <h2 className="font-semibold text-xl mb-2">Description:</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

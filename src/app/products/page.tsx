"use client";

import ProductCard from "@/components/ProductCard";
import SideNav from "@/components/Sidebar/SideNav";
import { getProduct } from "@/lib/blog";
import { IProduct } from "@/types/blog";
import { useEffect, useState } from "react";
import TestimonialSection from "@/components/testimoni_produk"; // Import komponen testimoni

export default function ProductsPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProduct();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (products.length === 0) return <div>No products found.</div>;

  return (
    <div className="flex h-auto w-full">
      <SideNav />
      <div className="flex flex-col w-full">
        <div className="flex-1 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
            {products.map((item, idx) => (
              <div key={idx} data-cy="product-item">
                <ProductCard
                  category={item.fields.category}
                  title={item.fields.title}
                  thumbnail={item.fields.thumbnail.fields.file.url}
                  price={item.fields.price}
                  originalPrice={item.fields.originalPrice}
                  slug={item.fields.slug}
                />
              </div>
            ))}
          </div>
        </div>
        <TestimonialSection />
      </div>
    </div>
  );
}

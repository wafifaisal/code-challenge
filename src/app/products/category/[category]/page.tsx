"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import SideNav from "@/components/Sidebar/SideNav";
import { getProductByCategory } from "@/lib/blog";
import { IProduct } from "@/types/blog";

export default function ProductCategoryPage({
  category,
}: {
  category: string;
}) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProductByCategory(category); // Fetch products by category
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [category]);

  if (loading) return <div>Loading products...</div>;
  if (products.length === 0) return <div>No products found.</div>;

  return (
    <div className="flex h-auto w-full">
      <SideNav /> {/* Sidebar */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl mb-6">{category} Products</h1>{" "}
        {/* Category Title */}
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
    </div>
  );
}

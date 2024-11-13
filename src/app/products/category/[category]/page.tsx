"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { getProduct } from "@/lib/blog";
import { IProduct } from "@/types/blog";
import { useParams } from "next/navigation";
import SideNav from "@/components/Sidebar/SideNav";
import TestimonialSection from "@/components/testimoni_produk";

export default function CategoryPage() {
  const params = useParams();
  const categoryParam = params?.category;

  // Jika category berupa array, ambil elemen pertama, jika tidak, langsung gunakan string
  const category = Array.isArray(categoryParam)
    ? decodeURIComponent(categoryParam[0])
    : decodeURIComponent(categoryParam || "");

  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProduct();
        const filteredProducts = data.filter(
          (item: { fields: { category: string } }) =>
            item.fields.category.toLowerCase() === category.toLowerCase()
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [category]);

  if (loading) return <div>Loading products...</div>;
  if (products.length === 0)
    return <div>No products found for category "{category}".</div>;

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

"use client";
import ProductCard from "@/components/ProductCard";
import SideNav from "@/components/Sidebar/SideNav";
import { dataProducts } from "@/components/product";

export default function ProductsPage() {
  return (
    <main className="flex h-auto w-full">
      <SideNav />
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center">
          {dataProducts.map((product) => (
            <ProductCard key={product.href} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}

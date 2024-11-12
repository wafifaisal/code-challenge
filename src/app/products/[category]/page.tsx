import { notFound } from "next/navigation";
import { dataProducts } from "@/components/product"; // Adjust import based on your folder structure
import { filterByCategory } from "@/components/filter"; // Adjust import based on your folder structure
import ProductCard from "@/components/ProductCard"; // Adjust import based on your folder structure
import SideNav from "@/components/Sidebar/SideNav";
type Params = { category: string };
export default function CategoryPage({ params }: { params: Params }) {
  const { category } = params;
  // Filter products based on category
  const filteredProducts = filterByCategory(category, dataProducts);
  if (filteredProducts.length === 0) {
    return notFound();
  }
  return (
    <div className="flex h-auto w-full">
      <SideNav />
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center">
          {filteredProducts.map((product) => (
            <ProductCard key={product.href} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

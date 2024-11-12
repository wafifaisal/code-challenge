import Link from "next/link";
import Image from "next/image";
import { Product } from "./product";

export default function ProductCard({ product }: { product: Product }) {
  // Utility function to parse formatted IDR price strings to numbers
  const parseIDR = (price: string) =>
    Number(price.replace("Rp", "").replace(",", ""));

  // Calculate discount percentage
  const originalPrice = product.originalPrice
    ? parseIDR(product.originalPrice)
    : null;
  const price = parseIDR(product.price);
  const discountPercentage = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : null;

  return (
    <div className="product-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden relative">
      {/* Ribbon for discount percentage */}
      {product.originalPrice && discountPercentage && (
        <div className="ribbon">
          <span>-{discountPercentage}% OFF</span>
        </div>
      )}
      <Link href={product.href} className="block group" target="_blank">
        <div className="relative w-full h-[280px] sm:w-[300px] sm:h-[320px]">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            loading="lazy"
            className="object-contain rounded-t-lg transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
            {product.title}
          </h3>
          {product.originalPrice && (
            <p className="text-gray-500 text-sm sm:text-base relative">
              <span className="group-hover:line-through group-hover:text-gray-400 transition-all duration-300 ease-in-out">
                {product.originalPrice}
              </span>
              <span className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-400 transform scale-x-0 group-hover:scale-x-10 transition-transform duration-300 ease-in-out origin-left" />
            </p>
          )}
          <p className="text-xl sm:text-2xl font-bold text-gray-900">
            {product.price}
          </p>
        </div>
      </Link>
    </div>
  );
}

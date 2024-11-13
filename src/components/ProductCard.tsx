import Image from "next/image";
import Link from "next/link";

interface IProductCard {
  title: string;
  thumbnail: string;
  price: string;
  originalPrice?: string;
  slug: string;
  category: string;
}

export default function ProductCard({
  title,
  thumbnail,
  price,
  originalPrice,
  slug,
  category,
}: IProductCard) {
  const parseIDR = (price: string | undefined) => {
    if (!price) return 0; // Handle undefined or null
    return Number(price.replace("Rp", "").replace(",", ""));
  };

  // Calculate discount percentage if original price is available
  const originalPriceValue = originalPrice ? parseIDR(originalPrice) : null;
  const priceValue = parseIDR(price);
  const discountPercentage = originalPriceValue
    ? Math.round(((originalPriceValue - priceValue) / originalPriceValue) * 100)
    : null;

  const imageUrl = thumbnail.startsWith("http")
    ? thumbnail
    : `https:${thumbnail}`;

  return (
    <div className="border border-gray-200 rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden w-full relative group">
      {/* Ribbon for discount percentage */}
      {originalPrice && discountPercentage && (
        <div className="ribbon">
          <span>-{discountPercentage}% OFF</span>
        </div>
      )}

      {/* Thumbnail Image */}
      <div className="rounded-t-lg h-[200px] w-full relative overflow-hidden">
        <Image
          className="object-contain rounded-t-lg hover:scale-110 transition-transform duration-300"
          src={imageUrl}
          alt={title}
          fill
          loading="lazy"
        />
      </div>

      {/* Product Information */}
      <div className="p-4">
        <h5 className="mb-2 text-md font-bold line-clamp-2 tracking-tight text-gray-900">
          {title}
        </h5>
        <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded-sm mb-2 inline-block">
          {category}
        </span>

        {/* Price and Discount */}
        <div className="my-4">
          {originalPrice && discountPercentage && (
            <div className="flex items-center"></div>
          )}
          <div className="flex items-center space-x-2">
            {originalPrice && (
              <p className="text-sm line-through text-gray-500">
                {originalPrice}
              </p>
            )}
            <p className="text-lg font-bold text-gray-900">{price}</p>
          </div>
        </div>

        {/* Product Link */}
        <Link
          href={`/products/${slug}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300"
        >
          View Product
        </Link>
      </div>
    </div>
  );
}

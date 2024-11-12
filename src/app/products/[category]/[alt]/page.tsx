import { notFound } from "next/navigation";
import { dataProducts, Product } from "@/components/product";
import Image from "next/image";
import Link from "next/link";

type Params = { category: string; alt: string };

// Type guard to check if a product is a bundle
function isBundleProduct(
  product: Product
): product is Product & { category: "bundle"; bundleItems: string[] } {
  return product.category === "bundle" && "bundleItems" in product;
}

export default function ProductPage({ params }: { params: Params }) {
  const { category, alt } = params;

  // Find the product based on category and alt
  const product = dataProducts.find(
    (item) => item.category === category && item.alt === alt
  );

  if (!product) {
    return notFound();
  }

  // Check if the product is a bundle and get the included flower items
  const flowerItems = isBundleProduct(product)
    ? product.bundleItems
        .map((alt) =>
          dataProducts.find(
            (item) => item.alt === alt && item.category === "flowers"
          )
        )
        .filter(Boolean)
    : [];

  // WhatsApp link with a message containing the product details
  const whatsappMessage = `I am interested in purchasing the product "${product.title}" for ${product.price}. Could you provide more information?`;

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-4">
        {/* Product Image Section */}
        <div className="flex justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width={700}
            height={700}
            className="w-full max-w-lg h-auto object-cover rounded-lg shadow-md"
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

          {/* Add to Cart Button (Link to WhatsApp) */}
          <a
            href={`https://wa.me/+6287821698570?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 mb-6 text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-md transition duration-200 text-center inline-block"
          >
            Add to Cart (WhatsApp)
          </a>

          {/* Bundle Items Section */}
          {flowerItems.length > 0 && (
            <div>
              <h3 className="font-semibold text-lg mb-4">Included Flowers:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {flowerItems.map((flower) => (
                  <div
                    key={flower!.alt}
                    className="border border-gray-200 p-4 rounded-lg shadow-sm"
                  >
                    <Link
                      href={`/products/flowers/${flower!.alt}`}
                      target="_blank"
                    >
                      <Image
                        src={flower!.image}
                        width={500}
                        height={500}
                        alt={flower!.title}
                        className="w-full h-40 object-cover rounded-lg mb-4 hover:opacity-90 transition-opacity duration-200"
                      />
                    </Link>
                    <p className="text-lg font-semibold">{flower!.title}</p>
                    <p className="text-green-600">{flower!.price}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

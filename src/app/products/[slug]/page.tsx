import { notFound } from "next/navigation";
import { getProductSlug } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Fetch produk berdasarkan slug dari Contentful
  const product = await getProductSlug(slug);

  if (!product) {
    return notFound();
  }

  const { title, description, price, originalPrice, category, thumbnail } =
    product.fields;

  // WhatsApp link dengan pesan
  const whatsappMessage = `I am interested in purchasing the product "${title}" for ${price}. Could you provide more information?`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-100 py-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-4 md:px-8 relative">
        {/* Tombol Kembali */}
        <div className="absolute top-0 left-0 mt-6 ml-4 z-10">
          <Link
            href={`/products//category/${category}`}
            className="flex items-center space-x-2 text-neutral-600 hover:text-emerald-700 text-lg font-semibold transition duration-300"
          >
            <ChevronLeft
              size={40}
              className="hover:scale-110 transition-transform"
            />
            <span className="hidden md:inline">Back to {category}</span>
          </Link>
        </div>

        {/* Bagian Gambar Produk */}
        <div className="relative flex justify-center items-center">
          <Image
            src={`https:${thumbnail.fields.file.url}`}
            alt={title}
            width={700}
            height={700}
            className="w-full max-w-lg h-auto object-cover rounded-3xl shadow-xl transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
          />
        </div>

        {/* Bagian Detail Produk */}
        <div className="sticky top-20 bg-white p-8 rounded-3xl shadow-lg">
          <h1 className="text-4xl font-bold text-neutral-900 mb-6">{title}</h1>

          <p className="text-base text-neutral-600 mb-4">
            Category:{" "}
            <span className="font-semibold text-emerald-700">{category}</span>
          </p>

          <div className="flex items-center mb-6">
            <p className="text-3xl font-semibold text-emerald-600">{price}</p>
            {originalPrice && (
              <p className="text-xl text-neutral-500 line-through ml-4">
                {originalPrice}
              </p>
            )}
          </div>

          <div className="text-lg text-neutral-800 mb-8">
            <h2 className="font-semibold text-xl mb-4">Description:</h2>
            <p className="leading-relaxed">{description}</p>
          </div>

          {/* Tombol Add to Cart (WhatsApp) */}
          <a
            href={`https://wa.me/+6287821698570?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 text-center text-white bg-emerald-600 hover:bg-emerald-700 rounded-full shadow-md transition-transform duration-200 hover:scale-105"
          >
            Add to Cart (WhatsApp)
          </a>
        </div>
      </div>
    </div>
  );
}

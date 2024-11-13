import Link from "next/link";
import Image from "next/image";
import { dataProducts, Product } from "./product"; // Update the import path as needed
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper"; // Import modules from SwiperCore

// Import Swiper styles
import "swiper/swiper-bundle.css";

// Register the Swiper modules
SwiperCore.use([Navigation, Autoplay]);

export default function DiscountedProductsSection() {
  // Filter products with a discount (i.e., those with an originalPrice field)
  const discountedProducts = dataProducts.filter(
    (product: Product) => product.originalPrice
  );

  // Utility function to parse formatted IDR price strings to numbers
  const parseIDR = (price: string) =>
    Number(price.replace("Rp", "").replace(",", ""));

  // Calculate discount percentage
  const getDiscountPercentage = (product: Product) => {
    if (product.originalPrice) {
      const originalPrice = parseIDR(product.originalPrice);
      const price = parseIDR(product.price);
      return Math.round(((originalPrice - price) / originalPrice) * 100);
    }
    return null;
  };

  return (
    <div>
      <section className="py-16 bg-gradient-to-b from-gray-200 to-gray-200">
        <div className="max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 tracking-wide font-serif animate-fade-in">
            ✨ Cozy Up with a Discount ✨
          </h2>
          <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="swiper-container"
          >
            {discountedProducts.map((product: Product, index) => {
              const discountPercentage = getDiscountPercentage(product);
              return (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden relative z-10 flex flex-col items-center">
                    {discountPercentage && (
                      <div className="ribbon absolute top-0 right-0 bg-red-500 text-white p-2 rounded-bl-lg text-xs sm:text-sm">
                        <span>-{discountPercentage}% OFF</span>
                      </div>
                    )}

                    <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] flex justify-center items-center">
                      <Image
                        src={product.image}
                        alt={product.alt}
                        width={200}
                        height={200}
                        className="object-contain rounded-t-lg transform transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-gray-500 text-sm relative">
                        <span className="line-through">
                          {product.originalPrice}
                        </span>
                      </p>
                      <p className="text-xl font-bold text-gray-900">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

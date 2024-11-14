import Image from "next/image";
import { dataProducts, Product } from "./product"; // Update the import path as needed
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.css";

// Register the Swiper modules
SwiperCore.use([Navigation, Autoplay]);

export default function DiscountedProductsSection() {
  // Filter products with a discount
  const discountedProducts = dataProducts.filter(
    (product: Product) => product.originalPrice
  );

  // Utility to parse formatted IDR price strings to numbers
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
      <section className="py-12 bg-gradient-to-b from-gray-200 to-gray-200 overflow-hidden flex flex-wrap justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800 font-serif animate-fade-in">
          <span className="block sm:hidden">✨ Cozy Up</span>
          <span className="block sm:hidden">for a Discount ✨</span>
          <span className="hidden sm:inline">
            ✨ Cozy Up with a Discount ✨
          </span>
        </h1>
        <div className="max-w-7xl px-4 mx-auto flex flex-wrap justify-center">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
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
                  <div className="bg-white rounded-lg shadow-md md:shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden relative z-10 flex flex-col items-center">
                    {discountPercentage && (
                      <div className="ribbon absolute top-0 right-0 bg-red-500 text-white p-1 md:p-2 rounded-bl-lg text-xs sm:text-sm">
                        <span>-{discountPercentage}% OFF</span>
                      </div>
                    )}

                    <div className="relative w-full h-64 sm:w-[300px] sm:h-[300px] flex justify-center items-center">
                      <Image
                        src={product.image}
                        alt={product.alt}
                        layout="intrinsic"
                        width={250}
                        height={250}
                        className="object-fill rounded-t-lg transform transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2 group-hover:text-purple-600 transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-gray-500 text-sm md:text-base relative">
                        <span className="line-through">
                          {product.originalPrice}
                        </span>
                      </p>
                      <p className="text-lg md:text-xl font-bold text-gray-900">
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

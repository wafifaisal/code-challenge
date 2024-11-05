"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { useMemo } from "react";

// Move slide data outside the component to prevent unnecessary re-renders
const slides = [
  [
    { src: "/bunga.png", label: "Flower Bundle" },
    { src: "/costumize.png", label: "Make Your Own Bundle" },
    { src: "/satuan.png", label: "Flowers" },
  ],
  [
    { src: "/charm.png", label: "Charms" },
    { src: "/animal.png", label: "Stuffed Animal" },
    { src: "/bag.png", label: "Bags" },
  ],
];

export default function Carousel() {
  // Memoize Swiper config to avoid recreating on each render
  const swiperConfig = useMemo(
    () => ({
      modules: [Pagination, Autoplay],
      pagination: { clickable: true },
      autoplay: { delay: 5000 }, // reduced autoplay delay for smoother transition
      loop: true,
      slidesPerView: 1,
      speed: 500, // reduced speed for less demanding transitions
      className: "mySwiper",
    }),
    []
  );

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-gray-200">
      <h1 className="text-center text-4xl md:text-3xl lg:text-5xl font-bold my-8 text-gray-800 tracking-wide font-serif animate-fade-in">
        Crafted by Hand, Inspired by You
      </h1>
      <div className="w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 bg-gray-100 rounded-lg overflow-hidden animate-slide-up">
        <Swiper {...swiperConfig}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row justify-around bg-gray-100 items-center gap-4 md:gap-6">
                {slide.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative group w-[450px] h-[450px] md:w-[300px] transition-transform duration-300 ease-in-out transform hover:scale-105"
                  >
                    <Image
                      src={item.src}
                      alt={item.label}
                      width={450}
                      height={450}
                      className="object-cover w-full h-full rounded-lg shadow-lg"
                      loading="lazy" // lazy loading for optimized performance
                    />
                    <div className="absolute bottom-10 left-0 right-4 p-4 bg-white backdrop-blur-md text-black opacity-0 group-hover:opacity-70">
                      <p className="text-lg md:text-xl text-center slide-text font-semibold">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

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
        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
        .mySwiper {
          height: 100%;
        }
        .slide-text {
          position: relative;
          transform: translateX(-10%);
          transition: transform 0.4s ease;
        }
        .group:hover .slide-text {
          transform: translateX(0);
        }
      `}</style>
    </div>
  );
}

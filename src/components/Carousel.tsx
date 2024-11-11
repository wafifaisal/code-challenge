"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { useMemo } from "react";
import Link from "next/link";

// Updated slide data with specific links for each item
const slides = [
  [
    {
      src: "/bunga.png",
      label: "Flower Bundle",
      link: "/products/bundle",
    },
    {
      src: "/costumize.png",
      label: "Make Your Own Bundle",
      link: "/products/customize",
    },
    { src: "/satuan.png", label: "Flowers", link: "/products/flowers" },
  ],
  [
    { src: "/charm.png", label: "Charms", link: "/products/charms" },
    {
      src: "/animal.png",
      label: "Stuffed Animal",
      link: "/products/stuffedanimal",
    },
    { src: "/bag.png", label: "Bags", link: "/products/bags" },
  ],
];

export default function Carousel() {
  // Memoize Swiper config to avoid recreating on each render
  const swiperConfig = useMemo(
    () => ({
      modules: [Pagination, Autoplay],
      pagination: { clickable: true },
      autoplay: { delay: 5000 },
      loop: true,
      slidesPerView: 1,
      speed: 500,
      className: "mySwiper",
    }),
    []
  );

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800">
      <h1 className="text-center text-5xl font-bold my-8 text-white tracking-widest font-serif animate-fade-in">
        Crafted by Hand, Inspired by You
      </h1>
      <div className="w-full lg:w-3/4 xl:w-2/3 bg-gray-900 rounded-lg overflow-hidden animate-slide-up">
        <Swiper {...swiperConfig}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row justify-around items-center gap-4 md:gap-6 bg-gray-900">
                {slide.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative group w-[450px] h-[450px] md:w-[350px] transition-transform duration-300 ease-in-out transform hover:scale-105"
                  >
                    <Link href={item.link}>
                      <Image
                        src={item.src}
                        alt={item.label}
                        width={450}
                        height={450}
                        className="object-cover w-full h-full rounded-lg shadow-xl"
                        loading="lazy"
                      />
                    </Link>
                    <div className="absolute bottom-4 left-0 right-0 p-4 bg-white backdrop-blur-md text-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in">
                      <p className="text-lg md:text-xl text-center font-semibold">
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

"use client";

import Carousel from "@/components/Carousel";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <Carousel />
      <div
        className={`${styles.container} flex flex-col lg:flex-row p-4 bg-gray-200`}
      >
        <div className="flex-1 w-full">
          <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold mb-8 ml-8">
            Our story
          </h1>
          <div className="flex-col ml-8">
            At{" "}
            <span
              className="text-[rgb(153,107,83)]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              FLÉUR
            </span>
            , we believe that every creation begins with a spark of inspiration.
            Whether you’re looking to launch a unique business or transform a
            beloved hobby into something extraordinary, our journey is rooted in
            passion and creativity. We specialize in handmade crochet products,
            each piece crafted with love and dedication. Our story is about more
            than just crochet; it’s about connecting with people through art and
            craftsmanship. In a world filled with over 1.5 billion websites, we
            strive to stand out by sharing our authentic voice. We want you to
            feel the warmth and uniqueness in every stitch, reflecting the care
            and attention that goes into our creations.
            <div className="my-4">
              We invite you to join us on this creative adventure. Our handmade
              items are not just products; they’re stories waiting to be shared.
              So whether you’re looking for a cozy crochet accessory or a
              thoughtful gift, we’re here to help you express your individuality
              and celebrate the beauty of handmade art. Let your voice resonate
              through our creations, and together, let’s make something
              beautiful.
            </div>
          </div>
        </div>

        {/* Adjust the flower image with responsive sizes */}
        <div className="flex-1 w-full flex items-end justify-start">
          <Image
            src="/flower.png"
            alt="Flowers"
            width={500} // base width
            height={500} // base height
            className={`mt-[100px] -mb-20 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flower ${
              isHovered ? "hover" : ""
            }`} // responsive sizes
          />
        </div>
        {/* Card Section */}
        <div
          className={`${styles.container} w-full flex items-end justify-start`}
        >
          <div className={`${styles.card}`} style={{}}>
            <div className={styles["img-box"]}>
              <img src="https://i.postimg.cc/t4w95jsf/img-01.png" alt="Leafs" />
            </div>
            <div className={styles.content}>
              <h2>Leafs</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto, hic? Magnam eum error saepe doloribus corrupti
                repellat quisquam alias doloremque!
              </p>
              <a href="">Read More</a>
            </div>
          </div>

          <div className={`${styles.card}`} style={{}}>
            <div className={styles["img-box"]}>
              <img
                src="https://i.postimg.cc/pdjRc68d/img-02.png"
                alt="Fruits"
              />
            </div>
            <div className={styles.content}>
              <h2>Fruits</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto, hic? Magnam eum error saepe doloribus corrupti
                repellat quisquam alias doloremque!
              </p>
              <a href="">Read More</a>
            </div>
          </div>

          <div className={`${styles.card}`} style={{}}>
            <div className={styles["img-box"]}>
              <img
                src="https://i.postimg.cc/wvDr345G/img-37.png"
                alt="Flowers"
              />
            </div>
            <div className={styles.content}>
              <h2>Flowers</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto, hic? Magnam eum error saepe doloribus corrupti
                repellat quisquam alias doloremque!
              </p>
              <a href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

"use client";
import Carousel from "@/components/Carousel";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import Bloom from "@/components/bloom";
import Link from "next/link";
import ProductsSection from "@/components/ProductSection";
import Image from "next/image";
import Testimonial from "@/components/Testimonial";

interface User {
  name: { first: string; last: string };
  location: { city: string; country: string };
  picture: { large: string };
}

const Home: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // State to track visibility and animation
  const [userData, setUserData] = useState<User[]>([]); // State to hold user data from the API
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch data from the RandomUser API
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=3"); // Fetch 3 random users
        const data = await response.json();
        setUserData(data.results); // Set the data to state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  useEffect(() => {
    const handleScroll = () => {
      if (storyRef.current) {
        const rect = storyRef.current.getBoundingClientRect();
        const middleOfViewport = window.innerHeight / 1.5;

        // Check if the section is in the middle of the viewport
        if (rect.top <= middleOfViewport && rect.bottom >= middleOfViewport) {
          setIsVisible(true); // Show the section with animation
        } else {
          setIsVisible(false); // Hide the section when it's not in the middle of the viewport
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check if it's already in view when the component mounts

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="overflow-hidden">
      <Carousel />

      {/* Button to navigate to /product */}
      <div className="flex justify-center flex-col items-center bg-gray-200">
        <ProductsSection />
        <Link href="/products">
          <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-bold rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl focus:outline-none duration-300 ease-in-out">
            See More Products
          </button>
        </Link>
      </div>
      <div
        className={`${styles.container} flex flex-col lg:flex-row p-4 bg-gray-200`}
      >
        <div className="flex-1 w-full">
          <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold mb-8 ml-8">
            Our story
          </h1>
          <div
            ref={storyRef}
            className={`flex-col ml-8 ${
              isVisible ? "animate-fadeIn" : "opacity-0"
            } transition-opacity duration-1000 ease-out`}
          >
            At{" "}
            <span className="text-[rgb(153,107,83)] hover:text-[rgb(125, 85, 61)] transition-all duration-300 ease-in-out transform hover:scale-110">
              FLÉUR
            </span>
            , we believe that every creation begins with a spark of inspiration.
            Whether you’re looking to launch a unique business or transform a
            beloved hobby into something extraordinary, our journey is rooted in
            passion and creativity. We specialize in handmade crochet products,
            each piece crafted with love and dedication. Our story is about more
            than just crochet; it’s about connecting with people through art and
            craftsmanship.
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

        <div className="flex-1 w-full mt-8 lg:mt-0">
          <Bloom isHovered={isHovered} setIsHovered={setIsHovered} />
        </div>

        {/* Card Section */}
        <div
          className={`${styles.container} w-full flex flex-col items-center justify-center mt-16 mb-16 sm:mt-24 sm:mb-24`}
        >
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-8 flex flex-col text-center">
            Meet our Team
          </h1>
          <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-10 justify-center">
            {userData.map((user, index) => (
              <div
                key={index}
                className={`${styles.card} transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#f3f3f3] w-full sm:w-[calc(100%_-_20px)] md:w-[calc(50%_-_20px)] lg:w-[calc(33.333%_-_20px)]`}
              >
                <div className={styles["img-box"]}>
                  <Image
                    src={user.picture.large}
                    alt={user.name.first}
                    width={120} // Adjust width as needed
                    height={120} // Adjust height as needed
                    className=" w-full h-auto"
                  />
                </div>
                <div className={styles.content}>
                  <h2>
                    {user.name.first} {user.name.last}
                  </h2>
                  <p>
                    {user.location.city}, {user.location.country}
                  </p>
                  <Link className="text-black" href="/teams">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Testimonial />
      </div>
    </div>
  );
};

export default Home;

/** @format */
"use client";

import clsx from "clsx";
import Image from "next/image";

// Colors
const color_ModerateViolet = "hsl(263, 55%, 52%)";
const color_VeryDarkGrayishBlue = "hsl(217, 19%, 35%)";
const color_VeryDarkBlackishBlue = "hsl(219, 29%, 14%)";
const color_White = "hsl(0, 0%, 100%)";
const color_LightGray = "hsl(0, 0%, 81%)";
const color_LightGrayishBlue = "hsl(210, 46%, 95%)";

// Data type definition
interface DataType {
  className?: string;
  bgColor?: string;
  textColor?: string;
  name: string;
  heading: string;
  description: string;
}

// Data array
const data: DataType[] = [
  {
    className: "md:col-span-2",
    bgColor: color_ModerateViolet,
    textColor: color_LightGray,
    name: "Daniel Clifford",
    heading: "A crochet bag that fits my style perfectly!",
    description:
      "I purchased a crochet bag from Fleur, and it’s the perfect blend of functionality and fashion. The bag is spacious and beautifully crafted. I get compliments on it all the time. It's clear the craftsmanship is top-notch, and I love how unique it is!",
  },
  {
    bgColor: color_VeryDarkGrayishBlue,
    textColor: color_LightGray,
    name: "Jonathan Walters",
    heading: "These crochet flowers are a game changer!",
    description:
      "I bought a set of crochet flowers for my home decor, and they completely transformed my living room. The attention to detail in each flower is impressive, and they add a touch of elegance. The colors are so vibrant, they brighten up any space!",
  },
  {
    className: "md:row-span-2",
    bgColor: color_White,
    textColor: color_VeryDarkGrayishBlue,
    name: "Kira Whittle",
    heading: "The crochet products from Fleur are so charming!",
    description:
      "I’ve purchased several crochet items from Fleur, including a crochet bag and decorative flowers. Each piece feels so personal and unique. The quality of the materials used is excellent, and the designs are timeless. I highly recommend Fleur’s products!",
  },
  {
    bgColor: color_White,
    textColor: color_VeryDarkGrayishBlue,
    name: "Jeanette Harmon",
    heading: "A delightful crochet bag that’s perfect for any occasion!",
    description:
      "I’m so in love with the crochet bag I bought from Fleur. It's the perfect size for everyday use and goes with every outfit. The attention to detail is amazing, and I can tell it was made with a lot of love. I’ve gotten so many compliments on it!",
  },
  {
    className: "md:col-span-2",
    bgColor: color_VeryDarkBlackishBlue,
    textColor: color_LightGray,
    name: "Patrick Abrams",
    heading: "Lovely crochet flowers for gifts!",
    description:
      "I ordered a set of crochet flowers as a gift for my girlfriend, and she absolutely adored them. They are so delicate and beautiful. The perfect gift for someone who appreciates handmade items. Fleur truly captures the essence of charm in each piece.",
  },
];

// Home component
export default function Home() {
  return (
    <main
      style={{ background: color_LightGrayishBlue }}
      className="flex justify-center items-center min-h-screen p-8 font-BarlowSemiCondensed"
    >
      <div className="max-w-[960px] w-full">
        {/* Customer Title Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-pink-700">
            Customers Who Loved Our Crochet
          </h2>
        </section>

        {/* Review Cards */}
        <div className="grid gap-6 md:grid-cols-4 md:grid-rows-2">
          {data.map((item, index) => (
            <Card
              key={index}
              bgColor={item.bgColor}
              textColor={item.textColor}
              description={item.description}
              heading={item.heading}
              name={item.name}
              className={item.className}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

// Card component
function Card(props: DataType) {
  return (
    <div
      style={{ color: props.textColor, background: props.bgColor }}
      className={clsx(
        "p-6 rounded-lg h-auto flex flex-col gap-4 max-w-[400px] md:max-w-none",
        props.className
      )}
    >
      <section className="flex gap-2">
        <Image
          src={"/download.png"}
          alt={`${props.name}-avatar`}
          width={200}
          height={200}
          className="rounded-full h-9 w-9 border-2"
        />
        <div>
          <div className="text-xs font-semibold">{props.name}</div>
          <p className="text-[10px] opacity-50">Verified Customer</p>
        </div>
      </section>
      <h3 className="font-semibold text-lg">{props.heading}</h3>
      <p className="text-xs opacity-70 leading-relaxed">
        “ {props.description} ”
      </p>
    </div>
  );
}

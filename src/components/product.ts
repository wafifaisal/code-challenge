export type Product = {
  image: string;
  alt: string;
  href: string;
  title: string;
  price: string; // Using string to format as IDR with currency symbol
  originalPrice?: string;
  category?: string;
  description: string;
} & (
  | { category: "bundle"; bundleItems: string[] }
  | { category: Exclude<string, "bundle"> }
);

export const dataProducts: Product[] = [
  {
    image: "/produk/bundle1.png",
    alt: "bundle1",
    href: "/products/bundle/bundle1",
    title: "Yellow Lily",
    price: "Rp150,000",
    originalPrice: "Rp200,000",
    category: "bundle",
    description:
      "A bundle of beautiful flowers including Yellow Flowers and Tulips.",
    bundleItems: ["flower1", "flower2"],
  },
  {
    image: "/produk/bundle2.png",
    alt: "bundle2",
    href: "/products/bundle/bundle2",
    title: "White Rose",
    price: "Rp180,000",
    originalPrice: "Rp240,000",
    category: "bundle",
    description:
      "A bundle of beautiful flowers including Yellow Flowers and Tulips.",
    bundleItems: ["flower2", "flower3"], // This links to the "alt" value of the flowers
  },
  {
    image: "/produk/bundle3.png",
    alt: "bundle3",
    href: "/products/bundle/bundle3",
    title: "Graduation Bundle",
    price: "Rp300,000",
    category: "bundle",
    description:
      "A bundle of beautiful flowers including Yellow Flowers and Tulips.",
    bundleItems: ["flower1", "flower3"], // This links to the "alt" value of the flowers
  },
  {
    image: "/produk/bundle4.png",
    alt: "bundle4",
    href: "/products/bundle/bundle4",
    title: "Winter",
    price: "Rp250,000",
    originalPrice: "Rp310,000",
    category: "bundle",
    description:
      "A bundle of beautiful flowers including Yellow Flowers and Tulips.",
    bundleItems: ["flower1"], // This links to the "alt" value of the flowers
  },
  {
    image: "/produk/bundle5.png",
    alt: "bundle5",
    href: "/products/bundle/bundle5",
    title: "Korean Style Sun Flower",
    price: "Rp190,000",
    category: "bundle",
    description:
      "A bundle of beautiful flowers including Yellow Flowers and Tulips.",
    bundleItems: ["flower2"], // This links to the "alt" value of the flowers
  },
  {
    image: "/produk/bundle6.png",
    alt: "bundle6",
    href: "/products/bundle/bundle6",
    title: "Sun Flower Bouquet",
    price: "Rp220,000",
    originalPrice: "Rp280,000",
    category: "bundle",
    description:
      "A bundle of beautiful flowers including Yellow Flowers and Tulips.",
    bundleItems: ["flower3"], // This links to the "alt" value of the flowers
  },
  {
    image: "/produk/flower1.png",
    alt: "flower1",
    href: "/products/flowers/flower1",
    title: "Yellow Flowers",
    price: "Rp100,000",
    category: "flowers",
    description: "A vibrant collection of yellow flowers.",
  },
  {
    image: "/produk/flower2.png",
    alt: "flower2",
    href: "/products/flowers/flower2",
    title: "Tulip",
    price: "Rp150,000",
    category: "flowers",
    description: "A vibrant collection of yellow flowers.",
  },
  {
    image: "/produk/flower3.png",
    alt: "flower3",
    href: "/products/flowers/flower3",
    title: "Rose",
    price: "Rp180,000",
    category: "flowers",
    description: "A vibrant collection of yellow flowers.",
  },
  {
    image: "/produk/bag1.png",
    alt: "bag1",
    href: "/products/bags/bag1",
    title: "Goose Bag",
    price: "Rp120,000",
    originalPrice: "Rp160,000",
    category: "bags",
    description: "A vibrant collection of yellow flowers.",
  },
  {
    image: "/produk/bag2.png",
    alt: "bag2",
    href: "/products/bags/bag2",
    title: "Skena Bag",
    price: "Rp140,000",
    category: "bags",
    description: "A vibrant collection of yellow flowers.",
  },
  {
    image: "/produk/charm1.png",
    alt: "charm1",
    href: "/products/charms/charm1",
    title: "Charm Bundle",
    price: "Rp80,000",
    category: "charms",
    description: "A vibrant collection of yellow flowers.",
  },
  {
    image: "/produk/animal1.png",
    alt: "animal1",
    href: "/products/stuffedanimal/animal1",
    title: "Bunny",
    price: "Rp70,000",
    category: "stuffedanimal",
    description: "A vibrant collection of yellow flowers.",
  },
  {
    image: "/produk/animal2.png",
    alt: "animal2",
    href: "/products/stuffedanimal/animal2",
    title: "Ducky",
    price: "Rp60,000",
    category: "stuffedanimal",
    description: "A vibrant collection of yellow flowers.",
  },
  {
    image: "/produk/animal3.png",
    alt: "animal3",
    href: "/products/stuffedanimal/animal3",
    title: "duck",
    price: "Rp80,000",
    originalPrice: "Rp100,000",
    category: "stuffedanimal",
    description: "A vibrant collection of yellow flowers.",
  },
];

import { Product } from "./product";

export const filterByName = (alt: string, products: Product[]): Product[] => {
  return products.filter((product) => product.alt === alt);
};

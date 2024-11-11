import { Product } from "./product";

export const filterByCategory = (
  category: string,
  products: Product[]
): Product[] => {
  return products.filter((product) => product.category === category);
};

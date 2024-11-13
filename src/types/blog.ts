export interface IProduct {
  fields: {
    title: string;
    slug: string;
    category: string;
    description: string;
    thumbnail: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    price: string;
    originalPrice: string;
  };
}

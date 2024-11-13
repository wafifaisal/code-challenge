const base_url = "https://cdn.contentful.com";
const spaceId = "g2sj8pa9jquh";
const token =
  process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN ||
  "Nqo9bx2Kj0lfpyNlg69PId7w25zpyn2cZYd1pFUlaMQ";
import resolveResponse from "contentful-resolve-response";

/**
 * Fetch all products without any filters.
 */
export const getProduct = async () => {
  try {
    const res = await fetch(
      `${base_url}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=products`,
      { next: { revalidate: 0 } }
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch products: ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();
    const result = resolveResponse(data);
    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getProductSlug = async (slug: string) => {
  try {
    const res = await fetch(
      `${base_url}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=products&fields.slug=${slug}`,
      { next: { revalidate: 0 } }
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch product by slug: ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();
    const result = resolveResponse(data);
    return result[0]; // Assuming the product will be an array with a single item
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getProductByCategory = async (category: string) => {
  if (!category) {
    console.error("Category parameter is required");
    return [];
  }

  try {
    const apiUrl = `${base_url}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=products&fields.category=${encodeURIComponent(
      category
    )}&order=-sys.updatedAt`;

    const res = await fetch(apiUrl, { next: { revalidate: 0 } });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch products by category: ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();
    const result = resolveResponse(data);
    return result; // Returning filtered products
  } catch (error) {
    console.error(error);
    return [];
  }
};

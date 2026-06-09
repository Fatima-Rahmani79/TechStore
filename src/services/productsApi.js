import products from "../data/products.json";

export async function getProducts() {
  return products;
}

export async function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}

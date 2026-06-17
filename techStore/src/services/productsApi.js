import products from "../data/products.json";

export async function getProducts() {
  return products;
}

export async function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export async function getProductByCategory(category) {
  return products.find((product) => product.category === category);
}

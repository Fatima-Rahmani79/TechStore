import products from "../data/products.json";

export async function getProducts() {
  return products;
}

export async function getFeaturedProducts() {
  return products.filter((p) => p.specialOffer || p.bestSeller);
}

export async function getProductByCategory(category) {
  if (!category || category === "all") return products;
  return products.filter((product) => product.category === category);
}

export async function getProductById(id) {
  return products.find((p) => p.id === Number(id)) || null;
}

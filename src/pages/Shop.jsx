import { useEffect, useState } from "react";
import ProductFilters from "../features/products/components/ProductFilters";
import ProductGrid from "../features/products/components/ProductGrid";
import { getProducts } from "../services/productsApi";
import SearchBar from "../features/search/SearchBar";
import { useSearch } from "../context/search/useSearch";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { searchTerm } = useSearch();
  // const [loading, setLoading] = useState(true);

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory,
  );

  const categoryFilteredProducts =
    selectedCategory === "all" ? products : filteredProducts;

  const searchedProducts = categoryFilteredProducts.filter((product) => {
    const searchableText = `
    ${product.name}
    ${product.category}
    ${product.brand}
  `.toLowerCase();

    return searchableText.includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();

      setProducts(data);
    }

    loadProducts();
  }, []);
  // if (loading) return <p>Loading...</p>;

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Shop</h1>

        <p className="mt-3 text-neutral-600">
          Browse our collection of premium technology products.
        </p>
      </div>

      <SearchBar />

      <ProductFilters
        products={products}
        onSelectCategory={setSelectedCategory}
      />

      <ProductGrid products={searchedProducts} />
    </div>
  );
}

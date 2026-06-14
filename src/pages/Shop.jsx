import { useEffect, useState } from "react";
import ProductFilters from "../features/products/components/ProductFilters";
import ProductGrid from "../features/products/components/ProductGrid";
import { getProducts } from "../services/productsApi";
import SearchBar from "../features/search/SearchBar";
import { useSearch } from "../context/search/useSearch";
import EmptyState from "../components/ui/EmptyState";
import { SearchX } from "lucide-react";
import SortSelect from "../features/sort/SortSelect";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { searchTerm, setSearchTerm } = useSearch();
  const [sortBy, setSortBy] = useState("default");
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

  const sortedProducts =

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
      <SortSelect sortBy={sortBy} onSortBy={setSortBy} />

      <ProductFilters
        products={products}
        onSelectCategory={setSelectedCategory}
      />

      {searchedProducts.length > 0 ? (
        <ProductGrid products={searchedProducts} />
      ) : (
        <EmptyState
          icon={<SearchX size={32} />}
          title="No products found"
          description={`No results found for "${searchTerm}".`}
        >
          <button
            className="btn-primary"
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
              // setSortBy("default");
            }}
          >
            Clear Search
          </button>
        </EmptyState>
      )}
    </div>
  );
}

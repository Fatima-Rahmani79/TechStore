import { useEffect, useState } from "react";
import ProductFilters from "../features/products/components/ProductFilters";
import ProductGrid from "../features/products/components/ProductGrid";
import { getProducts } from "../services/productsApi";
import SearchBar from "../features/search/SearchBar";
import { useSearch } from "../context/search/useSearch";
import EmptyState from "../components/ui/EmptyState";
import SortSelect from "../features/sort/SortSelect";
import SkeletonCard from "../components/ui/SkeletonCard";
import { SearchX, SlidersHorizontal } from "lucide-react";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [loading, setLoading] = useState(true); // ← فعال شد
  const [error, setError] = useState(null);

  const { searchTerm, setSearchTerm } = useSearch();

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const searchedProducts = filteredProducts.filter((product) => {
    const text =
      `${product.name} ${product.category} ${product.brand}`.toLowerCase();
    return text.includes(searchTerm.toLowerCase());
  });

  const sortedProducts = [...searchedProducts];
  switch (sortBy) {
    case "name-asc":
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "price-asc":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    default:
      break;
  }
  // ─────────────────────────────────────────────────────────────────

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch {
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  const hasActiveFilter =
    selectedCategory !== "all" || searchTerm || sortBy !== "default";

  function clearAll() {
    setSearchTerm("");
    setSelectedCategory("all");
    setSortBy("default");
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      {/* ── Header ─────────────────*/}
      <div className="mb-10">
        <p className="badge badge-accent mb-3">Catalog</p>
        <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)]">
          Shop
        </h1>
        <p className="mt-2 text-[var(--text-secondary)]">
          Browse our collection of premium technology products.
        </p>
      </div>

      {/* ── Search + Sort ───────────*/}
      <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full lg:max-w-2xl">
          <SearchBar />
        </div>
        <SortSelect sortBy={sortBy} onSortBy={setSortBy} />
      </div>

      {/* ── Filters ──────────────────────*/}
      <ProductFilters
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* ── Result count + clear ─────────*/}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-[var(--text-secondary)]">
          {loading ? (
            <span className="skeleton inline-block h-4 w-24 rounded" />
          ) : (
            <>
              <span className="font-semibold text-[var(--text-primary)]">
                {sortedProducts.length}
              </span>{" "}
              product{sortedProducts.length !== 1 ? "s" : ""} found
            </>
          )}
        </p>

        {hasActiveFilter && !loading && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)] underline-offset-2 hover:underline"
          >
            <SlidersHorizontal size={13} />
            Clear filters
          </button>
        )}
      </div>

      {/* ── Content ────────────────*/}
      {error ? (
        <EmptyState
          icon={<SearchX size={32} />}
          title="Something went wrong"
          description={error}
        >
          <button
            className="btn-primary"
            onClick={() => window.location.reload()}
          >
            Try again
          </button>
        </EmptyState>
      ) : loading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : sortedProducts.length > 0 ? (
        <ProductGrid products={sortedProducts} />
      ) : (
        <EmptyState
          icon={<SearchX size={32} />}
          title="No products found"
          description={
            searchTerm
              ? `No results for "${searchTerm}".`
              : "No products in this category yet."
          }
        >
          <button className="btn-primary" onClick={clearAll}>
            Clear filters
          </button>
        </EmptyState>
      )}
    </div>
  );
}

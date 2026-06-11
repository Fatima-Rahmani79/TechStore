import { useEffect, useState } from "react";
import ProductFilters from "../features/products/components/ProductFilters";
import ProductGrid from "../features/products/components/ProductGrid";
import { getProducts } from "../services/productsApi";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // const [loading, setLoading] = useState(true);

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory,
  );

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

      <ProductFilters
        products={products}
        onSelectCategory={setSelectedCategory}
      />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}

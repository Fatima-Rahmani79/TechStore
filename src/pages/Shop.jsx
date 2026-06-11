import { useEffect, useState } from "react";
import { getProducts } from "../services/productsApi";
import ProductCard from "../features/products/components/ProductCard";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();

      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <div>
      {/* <PageHeader />
      <SearchBar />
      <CategoryFilters />
      <SortSelect /> */}
      {/* <ProductGrid /> */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Shop</h1>

          <p className="mt-3 text-neutral-600">
            Browse our collection of premium technology products.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

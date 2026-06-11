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
      <div className="grid grid-cols-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      {/* <PageHeader />
      <SearchBar />
      <CategoryFilters />
      <SortSelect />
      <ProductGrid /> */}
    </div>
  );
}

import { useEffect, useState } from "react";
import ProductCard from "../../features/products/components/ProductCard";
import { getFeaturedProducts } from "../../services/productsApi";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getFeaturedProducts();

      console.log(products.filter((p) => p.featured));

      setProducts(data.slice(0, 4));
    }

    loadProducts();
  }, []);

  return (
    <div className="py-12 px-10">
      <div className="container">
        <h2 className="text-3xl font-bold text-center">Featured Products</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

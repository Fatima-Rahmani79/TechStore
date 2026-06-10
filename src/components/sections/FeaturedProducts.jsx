import { useEffect, useState } from "react";
import ProductCard from "../../features/products/components/ProductCard";
import { getFeaturedProducts } from "../../services/productsApi";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getFeaturedProducts();

      console.log(data.filter((p) => p.featured));

      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <section className="py-12 px-6 flex justify-center">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section className="mx-auto max-w-7xl py-12 px-6 flex justify-center">
      <div className="container">
        <div className="mb-10">
          <p className="badge badge-accent mb-3">Featured</p>

          <h2 className="text-4xl font-display">Featured Products</h2>

          <p className="mt-3 max-w-xl text-neutral-600">
            Discover our handpicked selection of featured products, showcasing
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

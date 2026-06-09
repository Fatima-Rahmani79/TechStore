import products from "../../data/products.json";
import ProductCard from "../../features/products/components/ProductCard";

const featuredProducts = products.slice(0, 4);

export default function FeaturedProducts() {
  return (
    <div className="py-12 px-10">
      <div className="container">
        <h2 className="text-3xl font-bold text-center">Featured Products</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.length > 0 ? (
            featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center text-gray-500">
              No featured products available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

import ProductCard from "../../features/products/components/ProductCard";

export default function FeaturedProducts() {
  return (
    <div className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center">Featured Products</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ProductCard product={product} />
        </div>
      </div>
    </div>
  );
}

import { HeartIcon } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div
      className="rounded-2xl
        border
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />
      <div className="mt-4">
        <h3 className="min-h-[56px] text-lg font-semibold">{product.name}</h3>
        <p className="mt-2 text-gray-600">${product.price}</p>
      </div>
      <div className="mt-4 flex justify-between gap-2">
        <button className="btn-icon">
          <HeartIcon size={18} />
        </button>
        <button className="btn-primary">View Product</button>
      </div>
    </div>
  );
}

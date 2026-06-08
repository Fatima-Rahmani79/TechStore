import { HeartIcon } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="rounded-lg border p-4">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />
      <div className="mt-4">
        <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
        <p className="mt-2 text-gray-600">${product.price}</p>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="mt-4 w-full px-4 py-2 text-white">
          <HeartIcon className="inline-block h-5 w-5" />
        </button>
        <button className="mt-4 w-full rounded-lg bg-gray-300 px-4 py-2 text-gray-700">
          View →
        </button>
      </div>
    </div>
  );
}

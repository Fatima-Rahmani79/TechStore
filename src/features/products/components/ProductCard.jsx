import { HeartIcon } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div
      className="rounded-2xl
        border
        p-4
        flex
        flex-col
        justify-between
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg"
    >
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full object-contain"
      />
      <div className="flex flex-col justify-between">
        <div className="mt-2">
          <h3 className="min-h-[60px] text-lg font-semibold">{product.name}</h3>
          <p className="mt-1 text-gray-600">${product.price}</p>
        </div>
        <div className="mt-2 flex justify-between gap-2 px-5 py-2 =">
          <button className="btn-icon">
            <HeartIcon size={18} />
          </button>
          <button className="btn-primary rounded-xl">View Product</button>
        </div>
      </div>
    </div>
  );
}

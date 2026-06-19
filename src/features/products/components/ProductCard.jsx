import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { addToCart } from "../../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../wishlist/wishlistSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <Link to={`/products/${product.id}`}>
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]">
        <div className="aspect-square overflow-hidden bg-neutral-100">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col space-y-3 p-5">
          <span className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
            {product.category}
          </span>

          <h3 className="line-clamp-2 text-lg font-semibold text-neutral-900">
            {product.name}
          </h3>

          <p className="line-clamp-2 text-sm text-neutral-500">
            {product.shortDesc}
          </p>
          <div className="mt-auto">
            <div className="flex items-center justify-between pt-2  mb-4">
              <span className="text-xl font-bold">${product.price}</span>

              <button
                className="rounded-full border border-neutral-200 p-2 transition hover:bg-neutral-100"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(product);
                  dispatch(addToWishlist(product));
                }}
              >
                <Heart size={18} />
              </button>
            </div>

            <button
              className="btn-primary w-full"
              onClick={(e) => {
                e.preventDefault();
                console.log(product);
                dispatch(addToCart(product));
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
}

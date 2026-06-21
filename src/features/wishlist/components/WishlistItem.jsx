import { useDispatch } from "react-redux";
import { HeartOff, ShoppingCart } from "lucide-react";
import { removeFromWishlist } from "../wishlistSlice";
import { addToCart } from "../../cart/cartSlice";

export default function WishlistItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:border-[var(--accent)] sm:flex-row sm:items-center">
      <img
        src={item.images[0]}
        alt={item.name}
        className="h-28 w-28 rounded-2xl bg-neutral-50 object-contain"
      />

      <div className="flex-1">
        <h3 className="line-clamp-2 text-lg font-semibold">{item.name}</h3>

        <p className="mt-2 text-2xl font-bold">${item.price}</p>

        <p className="mt-1 text-sm text-neutral-500">{item.brand}</p>
      </div>

      <div className="flex flex-col gap-2 sm:w-44">
        <button
          onClick={() => {
            dispatch(addToCart(item));
            dispatch(removeFromWishlist(item.id));
          }}
          className="flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-3 font-medium text-black transition hover:opacity-90"
        >
          <ShoppingCart size={18} />
          Move To Cart
        </button>

        <button
          onClick={() => dispatch(removeFromWishlist(item.id))}
          className="flex items-center justify-center gap-2 rounded-xl border border-neutral-300 px-4 py-3 transition hover:bg-neutral-100"
        >
          <HeartOff size={18} />
          Remove
        </button>
      </div>
    </div>
  );
}

import { useDispatch } from "react-redux";
import { HeartOff, ShoppingCart } from "lucide-react";
import { removeFromWishlist } from "../wishlistSlice";
import { addToCart } from "../../cart/cartSlice";

export default function WishlistItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] p-4 shadow-sm transition hover:border-[var(--accent)] sm:flex-row sm:items-center">
      <img
        src={item.images[0]}
        alt={item.shortName || item.name}
        className="h-28 w-28 rounded-2xl bg-[var(--bg-subtle)] object-contain"
      />

      <div className="flex-1">
        <h3 className="line-clamp-2 font-semibold text-[var(--text-primary)]">
          {item.shortName || item.name}
        </h3>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          {item.brand}
        </p>
        <p className="mt-2 font-mono text-xl font-bold text-[var(--text-primary)]">
          ${item.price}
        </p>
      </div>

      <div className="flex flex-col gap-2 sm:w-44">
        <button
          onClick={() => {
            dispatch(addToCart(item));
            dispatch(removeFromWishlist(item.id));
          }}
          className="flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-[var(--accent-text)] transition hover:opacity-90"
        >
          <ShoppingCart size={16} />
          Move to Cart
        </button>

        <button
          onClick={() => dispatch(removeFromWishlist(item.id))}
          className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] px-4 py-3 text-sm font-medium text-[var(--text-secondary)] transition hover:bg-[var(--bg-subtle)]"
        >
          <HeartOff size={16} />
          Remove
        </button>
      </div>
    </div>
  );
}

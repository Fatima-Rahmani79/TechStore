import { useDispatch } from "react-redux";
import { Minus, Plus, Trash2 } from "lucide-react";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-5 transition hover:border-[var(--accent)] sm:flex-row sm:items-center">
      <img
        src={item.images[0]}
        alt={item.shortName || item.name}
        className="h-24 w-24 rounded-xl bg-[var(--bg-subtle)] object-contain"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-[var(--text-primary)]">
          {item.shortName || item.name}
        </h3>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          {item.brand}
        </p>
        <p className="mt-2 font-mono text-lg font-bold text-[var(--text-primary)]">
          ${item.price}
        </p>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-2">
        <button
          aria-label="Decrease quantity"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-secondary)] transition hover:bg-[var(--bg-subtle)]"
          onClick={() => dispatch(decreaseQuantity(item.id))}
        >
          <Minus size={14} />
        </button>

        <span className="min-w-8 text-center text-sm font-semibold text-[var(--text-primary)]">
          {item.quantity}
        </span>

        <button
          aria-label="Increase quantity"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-secondary)] transition hover:bg-[var(--bg-subtle)]"
          onClick={() => dispatch(increaseQuantity(item.id))}
        >
          <Plus size={14} />
        </button>
      </div>

      {/* Total + Remove */}
      <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
        <p className="font-mono text-lg font-bold text-[var(--text-primary)]">
          ${(item.price * item.quantity).toFixed(2)}
        </p>

        <button
          aria-label="Remove item"
          className="flex items-center gap-1.5 rounded-lg border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition hover:border-[var(--danger-border)] hover:bg-[var(--danger-bg)] hover:text-[var(--danger)] dark:hover:bg-[var(--danger-dark-bg)]"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          <Trash2 size={13} />
          Remove
        </button>
      </div>
    </div>
  );
}

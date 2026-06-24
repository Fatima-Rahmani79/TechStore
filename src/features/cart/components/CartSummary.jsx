import { useSelector } from "react-redux";
import { selectCartTotalItems, selectCartTotalPrice } from "../cartSelectors";
import { ShoppingBag } from "lucide-react";

export default function CartSummary() {
  const totalItems = useSelector(selectCartTotalItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const shipping = totalPrice > 500 ? 0 : 9.99;
  const total = totalPrice + shipping;

  return (
    <div className="sticky top-24 h-fit rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6">
      <h2 className="mb-6 text-xl font-bold text-[var(--text-primary)]">
        Order Summary
      </h2>

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-[var(--text-secondary)]">
            Items ({totalItems})
          </span>
          <span className="font-medium text-[var(--text-primary)]">
            ${totalPrice.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-[var(--text-secondary)]">Shipping</span>
          {shipping === 0 ? (
            <span className="font-medium text-[var(--success)]">Free</span>
          ) : (
            <span className="font-medium text-[var(--text-primary)]">
              ${shipping.toFixed(2)}
            </span>
          )}
        </div>

        {shipping > 0 && (
          <p className="text-xs text-[var(--text-secondary)]">
            Free shipping on orders over $500
          </p>
        )}

        <div className="my-2 h-px bg-[var(--border)]" />

        <div className="flex justify-between">
          <span className="font-bold text-[var(--text-primary)]">Total</span>
          <span className="font-mono text-xl font-bold text-[var(--text-primary)]">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      <button className="btn-primary mt-6 flex w-full items-center justify-center gap-2 py-3.5">
        <ShoppingBag size={17} />
        Checkout
      </button>

      <p className="mt-3 text-center text-xs text-[var(--text-secondary)]">
        Secure checkout · Free returns
      </p>
    </div>
  );
}

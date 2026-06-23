import { useSelector } from "react-redux";
import CartItem from "../features/cart/components/CartItem";
import CartSummary from "../features/cart/components/CartSummary";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import EmptyState from "../components/ui/EmptyState";

export default function CartPage() {
  const items = useSelector((state) => state.cart.items);

  if (items.length === 0) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-6">
        <EmptyState
          icon={<ShoppingCart size={32} />}
          title="Your cart is empty"
          description="Looks like you haven't added any products yet."
        >
          <Link to="/shop" className="btn-primary">
            Browse Products
          </Link>
        </EmptyState>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <Link
        to="/shop"
        className="btn-secondary mb-8 inline-flex items-center gap-2"
      >
        <ArrowLeft size={16} />
        Back to Shop
      </Link>

      <h1 className="mb-8 text-4xl font-bold text-[var(--text-primary)]">
        Shopping Cart
      </h1>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <CartSummary />
      </div>
    </section>
  );
}

import { useSelector } from "react-redux";
import CartItem from "../features/cart/components/CartItem";
import CartSummary from "../features/cart/components/CartSummary";

export default function CartPage() {
  const items = useSelector((state) => state.cart.items);

  if (items.length === 0) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-6">
        <div className="text-center">
          <h2 className="mb-2 text-3xl font-bold">Your Cart is Empty</h2>
          <p className="text-neutral-500">
            Looks like you haven't added any products yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-8 text-4xl font-bold">Shopping Cart</h1>

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

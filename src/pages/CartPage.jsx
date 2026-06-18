import { useSelector } from "react-redux";
import CartItem from "../features/cart/components/CartItem";
import CartSummary from "../features/cart/components/CartSummary";

export default function CartPage() {
  const items = useSelector((state) => state.cart.items);

  if (items.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      {items.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}

      <CartSummary />
    </div>
  );
}

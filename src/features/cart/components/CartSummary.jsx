import { useSelector } from "react-redux";
import { selectCartTotalItems, selectCartTotalPrice } from "../cartSelectors";

export default function CartSummary() {
  const totalItems = useSelector(selectCartTotalItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  return (
    <div className="sticky top-24 h-fit rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">Order Summary</h2>

      <div className="space-y-4">
        <div className="flex justify-between text-neutral-600">
          <span>Items</span>
          <span>{totalItems}</span>
        </div>

        <div className="flex justify-between text-neutral-600">
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <button className="btn-primary w-full">Checkout</button>
      </div>
    </div>
  );
}

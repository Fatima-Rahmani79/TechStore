import { useSelector } from "react-redux";
import { selectCartTotalItems, selectCartTotalPrice } from "../cartSelectors";

export default function CartSummary() {
  const totalItems = useSelector(selectCartTotalItems);

  const totalPrice = useSelector(selectCartTotalPrice);

  return (
    <div className="rounded-xl border p-4">
      <h2>Order Summary</h2>
      <p>Total Quantity: {totalItems}</p>
      <p>Total Price: {totalPrice.toFixed(2)}</p>
    </div>
  );
}

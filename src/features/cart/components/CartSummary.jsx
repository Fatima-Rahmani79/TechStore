import { useSelector } from "react-redux";
import { selectCartTotalItems, selectCartTotalPrice } from "../cartSelectors";

export default function CartSummary() {
  const totalItems = useSelector(selectCartTotalItems);

  const totalPrice = useSelector(selectCartTotalPrice);

  return (
    <div>
      <p>Total Quantity: {totalItems}</p>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
}

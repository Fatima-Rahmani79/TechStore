import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div>
      <img src={item.images[0]} alt={item.name} />
      <h3>Name: {item.name}</h3>
      <p>Price: {item.price}</p>

      <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>

      <button onClick={() => dispatch(removeFromCart(item.id))}>remove</button>
    </div>
  );
}

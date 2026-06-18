import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4 rounded-xl border p-4">
      <img
        src={item.images[0]}
        alt={item.name}
        className="h-24 w-24 rounded-lg object-cover"
      />

      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>

        <p className="text-sm text-gray-500">${item.price}</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="h-8 w-8 rounded border"
          onClick={() => dispatch(increaseQuantity(item.id))}
        >
          +
        </button>

        <p>Quantity: {item.quantity}</p>

        <button
          className="h-8 w-8 rounded border"
          onClick={() => dispatch(decreaseQuantity(item.id))}
        >
          -
        </button>
      </div>
      <button
        className="rounded bg-red-500 px-3 py-1 text-white"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        remove
      </button>
    </div>
  );
}

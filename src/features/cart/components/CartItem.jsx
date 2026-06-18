import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center">
      <img
        src={item.images[0]}
        alt={item.name}
        className="h-28 w-28 rounded-xl object-cover"
      />

      <div className="flex-1">
        <h3 className="mb-2 text-lg font-semibold">{item.name}</h3>

        <p className="text-xl font-bold">${item.price}</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 transition hover:bg-neutral-100"
          onClick={() => dispatch(decreaseQuantity(item.id))}
        >
          -
        </button>

        <span className="min-w-8 text-center font-semibold">
          {item.quantity}
        </span>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 transition hover:bg-neutral-100"
          onClick={() => dispatch(increaseQuantity(item.id))}
        >
          +
        </button>
      </div>

      <div className="text-right">
        <p className="mb-3 text-lg font-bold">
          ${(item.price * item.quantity).toFixed(2)}
        </p>

        <button
          className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

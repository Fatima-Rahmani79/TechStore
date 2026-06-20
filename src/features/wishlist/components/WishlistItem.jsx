import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../wishlistSlice";

export default function WishlistItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div>
      <img src={item.images[0]} alt={item.name} />

      <h3>{item.name}</h3>

      <p>${item.price}</p>

      <button onClick={() => dispatch(removeFromWishlist(item.id))}>
        Remove
      </button>
    </div>
  );
}

import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../wishlistSlice";
import { addToCart } from "../../cart/cartSlice";

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

      <button
        onClick={() => {
          dispatch(addToCart(item));
          dispatch(removeFromWishlist(item.id));
        }}
      >
        Move To Cart
      </button>
    </div>
  );
}

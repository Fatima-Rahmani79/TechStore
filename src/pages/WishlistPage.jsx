import { useSelector } from "react-redux";
import { selectWishlistItems } from "../features/wishlist/wishlistSelectors";

export default function WishlistItem({ item }) {
  const items = useSelector(selectWishlistItems);

  if (items.length === 0) {
    return <p>Your wishlist is emoty.</p>;
  }
  return (
    <div>
      items.map((item) => (
  <WishlistItem
    key={item.id}
    item={item}
  />
))
    </div>
  );
}

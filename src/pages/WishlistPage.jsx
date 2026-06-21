import { useSelector } from "react-redux";
import { ArrowLeft, Heart } from "lucide-react";
import { selectWishlistItems } from "../features/wishlist/wishlistSelectors";
import WishlistItem from "../features/wishlist/components/WishlistItem";
import EmptyState from "../components/ui/EmptyState";
import { Link } from "react-router-dom";

export default function WishlistPage() {
  const items = useSelector(selectWishlistItems);

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-12">
        <EmptyState
          icon={<Heart size={32} />}
          title="Your wishlist is empty"
          description="Save products you love and come back to them later."
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <Link to="/shop">
        <button className="btn-secondary mb-6">
          <ArrowLeft />
          Back to Shop
        </button>
      </Link>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Wishlist</h1>

        <p className="mt-2 text-neutral-500">
          {items.length} saved product{items.length > 1 ? "s" : ""}
        </p>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <WishlistItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

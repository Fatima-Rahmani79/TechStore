import { Heart, ShoppingCart, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../features/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../features/wishlist/wishlistSlice";
import { selectWishlistItems } from "../../../features/wishlist/wishlistSelectors";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wishlistItems = useSelector(selectWishlistItems);
  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  function handleWishlist(e) {
    e.stopPropagation();
    dispatch(
      isWishlisted ? removeFromWishlist(product.id) : addToWishlist(product),
    );
  }

  function handleAddToCart(e) {
    e.stopPropagation();
    dispatch(addToCart(product));
  }

  function handleCardClick() {
    navigate(`/products/${product.id}`);
  }

  return (
    <article
      onClick={handleCardClick}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-[var(--bg-subtle)]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-1">
          {product.specialOffer && (
            <span className="rounded-full bg-[var(--accent)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--accent-text)]">
              Sale
            </span>
          )}
          {product.bestSeller && (
            <span className="rounded-full bg-[var(--text-primary)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--text-inverse)] dark:bg-[var(--bg-surface)] dark:text-[var(--text-primary)]">
              Best Seller
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white/90 backdrop-blur-sm transition hover:scale-110 dark:border-neutral-700 dark:bg-neutral-900/90"
        >
          <Heart
            size={15}
            className={
              isWishlisted ? "text-[var(--danger)]" : "text-[var(--text-muted)]"
            }
            fill={isWishlisted ? "currentColor" : "none"}
          />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="w-fit rounded-full bg-[var(--bg-muted)] px-3 py-0.5 text-xs font-medium capitalize text-[var(--text-secondary)]">
          {product.category}
        </span>

        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-[var(--text-primary)]">
          {product.shortName || product.name}
        </h3>

        <p className="line-clamp-2 text-xs text-[var(--text-muted)]">
          {product.shortDesc}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-mono text-lg font-bold text-[var(--text-primary)]">
            ${product.price}
          </span>

          <div className="flex items-center gap-2">
            {/* View Details */}
            <Link
              to={`/products/${product.id}`}
              onClick={(e) => e.stopPropagation()}
              aria-label={`View details for ${product.shortName}`}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-strong)] text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
            >
              <ArrowRight size={14} />
            </Link>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              aria-label={`Add ${product.shortName} to cart`}
              className="flex items-center gap-1.5 rounded-full bg-[var(--text-primary)] px-3 py-1.5 text-xs font-semibold text-[var(--text-inverse)] transition hover:bg-[var(--bg-muted)] dark:bg-[var(--bg-surface)] dark:text-[var(--text-primary)] dark:hover:bg-[var(--bg-muted)] cursor-pointer"
            >
              <ShoppingCart size={13} />
              Add
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProducts } from "../services/productsApi";
import EmptyState from "../components/ui/EmptyState.jsx";
import { ArrowLeft, Heart, Star, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice.js";
import ProductCard from "../features/products/components/ProductCard.jsx";
import { selectWishlistItems } from "../features/wishlist/wishlistSelectors.js";
import {
  addToWishlist,
  removeFromWishlist,
} from "../features/wishlist/wishlistSlice.js";

export default function ProductDetails() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // ← اضافه شد
  const [selectedImage, setSelectedImage] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();
  const wishlistItems = useSelector(selectWishlistItems);
  const isWishlisted = wishlistItems.some((item) => item.id === product?.id);

  const specifications = [
    { label: "Processor", value: product?.processor },
    { label: "Memory", value: product?.memory },
    { label: "Storage", value: product?.storage },
    { label: "Display", value: product?.display },
    { label: "Graphics", value: product?.graphics },
    { label: "Size", value: product?.size },
    { label: "Resolution", value: product?.resolution },
    { label: "Refresh Rate", value: product?.refreshRate },
    { label: "Panel Type", value: product?.panelType },
    { label: "Type", value: product?.type },
    {
      label: "Connectivity",
      value: Array.isArray(product?.connectivity)
        ? product.connectivity.join(", ")
        : product?.connectivity,
    },
    { label: "Battery Life", value: product?.batteryLife },
    { label: "Color", value: product?.color },
  ];

  useEffect(() => {
    async function loadProduct() {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
        const found = productsData.find((p) => p.id === Number(id));
        setProduct(found || null);
        if (found) setSelectedImage(found.images[0]);
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [id]);

  // ── Loading ──────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="skeleton mb-6 h-10 w-32 rounded-xl" />
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="skeleton aspect-square w-full rounded-3xl" />
          <div className="flex flex-col gap-4">
            <div className="skeleton h-6 w-24 rounded-full" />
            <div className="skeleton h-10 w-3/4 rounded" />
            <div className="skeleton h-4 w-1/3 rounded" />
            <div className="skeleton h-8 w-28 rounded" />
            <div className="skeleton h-24 w-full rounded-xl" />
            <div className="skeleton h-12 w-full rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  // ── Not found ────────────────────────────────────────────────────────────
  if (!product) {
    return (
      <EmptyState
        title="Product not found"
        description="The requested product does not exist."
      />
    );
  }

  const relatedProducts = products.filter((item) =>
    product.relatedProducts?.includes(item.id),
  );

  // ── Badge helper ─────────────────────────────────────────────────────────
  const badges = [
    product.specialOffer && {
      label: "Special Offer",
      style: "bg-[var(--accent)] text-[var(--accent-text)]",
    },
    product.bestSeller && {
      label: "Best Seller",
      style:
        "bg-[var(--text-primary)] text-[var(--text-inverse)] dark:bg-[var(--bg-surface)] dark:text-[var(--text-primary)]",
    },
    product.isNew && {
      label: "New",
      style: "bg-[var(--bg-subtle)] text-[var(--text-secondary)]",
    },
  ].filter(Boolean);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      {/* Back — Link نه button داخل Link */}
      <Link
        to="/shop"
        className="btn-secondary mb-8 inline-flex items-center gap-2"
      >
        <ArrowLeft size={16} />
        Back to Shop
      </Link>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* ── Images ────────────────────────────────────────────────── */}
        <div>
          <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-subtle)]">
            <img
              src={selectedImage}
              alt={product.name}
              className="aspect-square w-full object-contain"
            />
          </div>

          {product.images.length > 1 && (
            <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
              {product.images.map((image) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(image)}
                  className={`shrink-0 overflow-hidden rounded-xl border-2 transition ${
                    selectedImage === image
                      ? "border-[var(--accent)]"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={product.name}
                    className="h-20 w-20 object-contain bg-[var(--bg-subtle)]"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Product Info ───────────────────────────────────────────── */}
        <div>
          {/* Badges */}
          {badges.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {badges.map(({ label, style }) => (
                <span
                  key={label}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${style}`}
                >
                  {label}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-3xl font-bold text-[var(--text-primary)] lg:text-4xl">
            {product.name}
          </h1>

          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            {product.brand} • {product.category}
          </p>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-2">
            <Star
              size={16}
              fill="currentColor"
              className="text-[var(--accent)]"
            />
            <span className="font-semibold text-[var(--text-primary)]">
              {product.rating.average}
            </span>
            <span className="text-sm text-[var(--text-secondary)]">
              ({product.rating.count} reviews)
            </span>
          </div>

          {/* Price */}
          <p className="mt-6 font-mono text-4xl font-bold text-[var(--text-primary)]">
            ${product.price}
          </p>

          {/* Description */}
          <p className="mt-4 leading-7 text-[var(--text-secondary)]">
            {product.longDesc}
          </p>

          {/* CTA buttons */}
          <div className="my-8 flex items-center gap-3">
            <button
              className="btn-primary flex flex-1 items-center justify-center gap-2 py-3.5"
              onClick={() => dispatch(addToCart(product))}
            >
              <ShoppingCart size={17} />
              Add to Cart
            </button>

            <button
              className="btn-secondary flex items-center justify-center p-3.5"
              aria-label={
                isWishlisted ? "Remove from wishlist" : "Add to wishlist"
              }
              onClick={() =>
                dispatch(
                  isWishlisted
                    ? removeFromWishlist(product.id)
                    : addToWishlist(product),
                )
              }
            >
              <Heart
                size={20}
                className={
                  isWishlisted
                    ? "text-[var(--danger)]"
                    : "text-[var(--text-secondary)]"
                }
                fill={isWishlisted ? "currentColor" : "none"}
              />
            </button>
          </div>

          {/* Specifications */}
          <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
            <h2 className="border-b border-[var(--border)] bg-[var(--bg-subtle)] px-5 py-3.5 text-sm font-semibold text-[var(--text-primary)]">
              Specifications
            </h2>
            {specifications
              .filter((s) => s.value)
              .map((spec, i, arr) => (
                <div
                  key={spec.label}
                  className={`flex items-center justify-between px-5 py-3 text-sm ${
                    i < arr.length - 1 ? "border-b border-[var(--border)]" : ""
                  }`}
                >
                  <span className="text-[var(--text-secondary)]">
                    {spec.label}
                  </span>
                  <span className="font-medium text-[var(--text-primary)]">
                    {spec.value}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* ── Reviews ───────────────────────────────────────────────────── */}
      <section className="mt-20">
        <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">
          Customer Reviews ({product.rating.count})
        </h2>

        <div className="space-y-4">
          {product.reviews.map((review, i) => (
            <div
              key={`${review.user}-${i}`}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-5"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--bg-subtle)] text-sm font-semibold text-[var(--text-primary)]">
                    {review.user.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)]">
                      {review.user}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      {review.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <Star
                    size={14}
                    fill="currentColor"
                    className="text-[var(--accent)]"
                  />
                  <span className="text-sm font-semibold text-[var(--text-primary)]">
                    {review.rating}
                  </span>
                </div>
              </div>

              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Related Products ───────────────────────────────────────────── */}
      {relatedProducts.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">
            Related Products
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

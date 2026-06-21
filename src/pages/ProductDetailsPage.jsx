import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProducts } from "../services/productsApi";
import EmptyState from "../components/ui/EmptyState.jsx";
import { ArrowLeft, Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice.js";

export default function ProductDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);

  const [selectedImage, setSelectedImage] = useState("");

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
      const products = await getProducts();

      const foundProduct = products.find(
        (product) => product.id === Number(id),
      );

      setProduct(foundProduct);

      if (foundProduct) {
        setSelectedImage(foundProduct.images[0]);
      }
    }

    loadProduct();
  }, [id]);

  if (!product) {
    return (
      <EmptyState
        title="Product not found"
        description="The requested product does not exist."
      />
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <Link to="/shop">
        <button className="btn-secondary mb-6">
          <ArrowLeft />
          Back to Shop
        </button>
      </Link>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Images */}
        <div>
          <div className="overflow-hidden rounded-3xl">
            <img
              src={selectedImage}
              alt={product.name}
              className="aspect-square w-full"
            />
          </div>

          <div className="mt-12 flex gap-3 overflow-x-auto">
            {product.images.map((image) => (
              <button
                key={image}
                onClick={() => setSelectedImage(image)}
                className={`overflow-hidden rounded-xl border-2 transition ${
                  selectedImage === image
                    ? "border-[var(--accent)]"
                    : "border-transparent"
                }`}
              >
                <img src={image} alt={product.name} className="h-24 w-24" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="flex flex-wrap gap-2">
            {product.specialOffer && (
              <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                Special Offer
              </span>
            )}

            {product.isNew && (
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                New
              </span>
            )}

            {product.bestSeller && (
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
                Best Seller
              </span>
            )}
          </div>

          <h1 className="mt-4 text-3xl font-bold lg:text-4xl">
            {product.name}
          </h1>

          <p className="mt-2 text-neutral-500">
            {product.brand} • {product.category}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <Star size={18} fill="currentColor" className="text-yellow-500" />

            <span className="font-medium">{product.rating.average}</span>

            <span className="text-neutral-500">
              ({product.rating.count} reviews)
            </span>
          </div>

          <p className="mt-6 text-4xl font-bold">${product.price}</p>

          <p className="mt-6 leading-7 text-neutral-600">{product.longDesc}</p>

          <button
            className="btn-primary my-8 py-4 w-full"
            onClick={(e) => {
              e.preventDefault();
              console.log(product);
              dispatch(addToCart(product));
            }}
          >
            Add to Cart
          </button>
          {/* Specifications */}
          <div className="overflow-hidden rounded-3xl border border-neutral-200">
            <h2 className="border-b border-neutral-200 p-4 text-lg font-semibold">
              Specifications
            </h2>

            {specifications
              .filter((spec) => spec.value)
              .map((spec) => (
                <div
                  key={spec.label}
                  className="flex justify-between border-b border-neutral-200 p-4"
                >
                  <span className="text-neutral-500">{spec.label}</span>

                  <span>{spec.value}</span>
                </div>
              ))}
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Customer Reviews</h2>

        <div className="space-y-4">
          {product.reviews.map((review, index) => (
            <div
              key={`${review.user}-${index}`}
              className="rounded-3xl border border-neutral-200 p-5"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{review.user}</h3>

                <span className="text-sm text-neutral-500">{review.date}</span>
              </div>

              <p className="mt-3 text-neutral-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

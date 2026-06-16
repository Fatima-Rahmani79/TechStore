import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/productsApi";
import EmptyState from "../components/ui/EmptyState.jsx";
import { Star } from "lucide-react";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const [selectedImage, setSelectedImage] = useState("");

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
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Images */}
        <div>
          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white">
            <img
              src={selectedImage}
              alt={product.name}
              className="aspect-square w-full object-cover"
            />
          </div>

          <div className="mt-4 flex gap-3 overflow-x-auto">
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
                <img
                  src={image}
                  alt={product.name}
                  className="h-20 w-20 object-cover"
                />
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
            className="
            mt-8
            w-full
            rounded-2xl
            bg-[var(--accent)]
            px-6
            py-4
            font-semibold
            text-black
            transition
            hover:opacity-90
          "
          >
            Add to Cart
          </button>

          {/* Specifications */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-neutral-200">
            <h2 className="border-b border-neutral-200 p-4 text-lg font-semibold">
              Specifications
            </h2>

            <div className="flex justify-between border-b border-neutral-200 p-4">
              <span className="text-neutral-500">Processor</span>
              <span>{product.processor}</span>
            </div>

            <div className="flex justify-between border-b border-neutral-200 p-4">
              <span className="text-neutral-500">Memory</span>
              <span>{product.memory}</span>
            </div>

            <div className="flex justify-between border-b border-neutral-200 p-4">
              <span className="text-neutral-500">Storage</span>
              <span>{product.storage}</span>
            </div>

            <div className="flex justify-between border-b border-neutral-200 p-4">
              <span className="text-neutral-500">Display</span>
              <span>{product.display}</span>
            </div>

            <div className="flex justify-between border-b border-neutral-200 p-4">
              <span className="text-neutral-500">Graphics</span>
              <span>{product.graphics}</span>
            </div>

            <div className="flex justify-between border-b border-neutral-200 p-4">
              <span className="text-neutral-500">Color</span>
              <span>{product.color}</span>
            </div>

            <div className="flex justify-between p-4">
              <span className="text-neutral-500">Stock</span>
              <span>{product.stock} available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
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

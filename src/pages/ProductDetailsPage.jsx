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
    <div className="grid gap-12 lg:grid-cols-2">
      <div>
        <img
          src={selectedImage}
          alt={product.name}
          className="w-full rounded-3xl"
        />

        <div className="mt-4 flex gap-3">
          {product.images.map((image) => (
            <button key={image} onClick={() => setSelectedImage(image)}>
              <img
                src={image}
                alt=""
                className="h-20 w-20 rounded-xl object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2">
          <Star size={18} fill="currentColor" className="text-yellow-500" />

          <span>{product.rating.average}</span>
          <span className="text-neutral-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        <div className="">
          <h1 className="text-4xl font-bold">{product.name}</h1>

          <p className="text-neutral-500">{product.category}</p>

          <p className="text-3xl font-bold">${product.price}</p>

          <p>{product.longDesc}</p>
        </div>

        <div className="flex justify-between border-b p-4">
          <span>Processor</span>
          <span>{product.processor}</span>
        </div>

        <div className="flex justify-between border-b p-4">
          <span>Memory</span>
          <span>{product.memory}</span>
        </div>

        <div className="flex justify-between border-b p-4">
          <span>Storage</span>
          <span>{product.storage}</span>
        </div>

        <div className="flex justify-between border-b p-4">
          <span>Display</span>
          <span>{product.display}</span>
        </div>

        <div className="flex justify-between p-4">
          <span>Graphics</span>
          <span>{product.graphics}</span>
        </div>

        <button
          className="
            mt-6
            rounded-xl
            bg-[var(--accent)]
            px-6
            py-3
            font-semibold
            text-black
            transition
            hover:opacity-90
          "
        >
          Add to Cart
        </button>

        {product.specialOffer && (
          <span className="rounded-full bg-red-100 px-3 py-1 text-sm">
            Special Offer
          </span>
        )}

        {product.isNew && (
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm">
            New
          </span>
        )}

        {product.reviews.map((review) => (
          <div key={review.date}>
            <h4>{review.user}</h4>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useParams } from "react-router-dom";
import { getProducts } from "../services/productsApi.js";
import EmptyState from "../components/ui/EmptyState.jsx";

export default function ProductDetails() {
  const { id } = useParams();

  const products = getProducts();
  const product = products.find((product) => product.id === Number(id));

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
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-3xl"
      />
      <div>
        <h1 className="text-4xl font-bold">{product.name}</h1>

        <p className="text-neutral-500">{product.category}</p>

        <p className="text-3xl font-bold">${product.price}</p>

        <p>{product.description}</p>
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
      </div>
    </div>
  );
}

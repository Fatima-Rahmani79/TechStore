export default function WishlistItem({ item }) {
  return (
    <div>
      <img src={item.images[0]} alt={item.name} />

      <h3>{item.name}</h3>

      <p>${item.price}</p>

      <button>Remove</button>
    </div>
  );
}

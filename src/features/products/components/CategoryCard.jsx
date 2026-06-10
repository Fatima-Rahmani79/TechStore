export default function CategoryCard({ category }) {
  return (
    <div
      className="rounded-2xl
        border
        p-4
        flex
        flex-col
        justify-between
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg"
    >
      <img src={`/images/${category}-category.jpg`} alt={category} />
      <h3>{category}</h3>
    </div>
  );
}

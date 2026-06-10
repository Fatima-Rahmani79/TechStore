export default function CategoryCard({ category }) {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        bg-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <img src={category.image} alt={category.name} className="h-70 w-full" />

      <div className="p-5">
        <h3 className="text-lg font-semibold">{category.name}</h3>

        <p className="mt-1 text-sm text-neutral-500">
          {category.count} Products
        </p>
      </div>
    </div>
  );
}

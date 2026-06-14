const categories = ["All", "Laptop", "Monitor", "Audio", "Accessory"];

export default function ProductFilters({ onSelectCategory }) {
  return (
    <div className="m-10 flex justify-center gap-2">
      {categories.map((category) => (
        <span
          className="p-2 border-gray-400 border-1 rounded-2xl cursor-pointer hover:bg-[var(--accent)] hover:border-[var(--accent)]"
          onClick={() => onSelectCategory(category.toLowerCase())}
        >
          {category}
        </span>
      ))}
    </div>
  );
}

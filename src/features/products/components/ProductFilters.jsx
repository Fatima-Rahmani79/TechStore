const categories = ["all", "laptop", "monitor", "audio", "accessory"];

export default function ProductFilters({ onSelectCategory }) {
  return (
    <div className="m-6 flex justify-center gap-2">
      {categories.map((category) => (
        <span
          className="p-2 border-gray-400 border-1 rounded-2xl"
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </span>
      ))}
    </div>
  );
}

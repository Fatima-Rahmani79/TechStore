const categories = [
  { value: "all", label: "All" },
  { value: "laptop", label: "Laptops" },
  { value: "monitor", label: "Monitors" },
  { value: "audio", label: "Audio" },
  { value: "accessory", label: "Accessories" },
];

export default function ProductFilters({ selectedCategory, onSelectCategory }) {
  return (
    <div className="flex w-full flex-wrap justify-center gap-3 mb-6">
      {categories.map((category) => {
        const isActive = selectedCategory === category.value;

        return (
          <button
            key={category.value}
            type="button"
            onClick={() => onSelectCategory(category.value)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              isActive
                ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-text)]"
                : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50"
            }`}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}

import { ArrowUpDown } from "lucide-react";

export default function SortSelect({ sortBy, onSortBy }) {
  return (
    <div className="flex items-center gap-3">
      <ArrowUpDown size={16} />
      <span className="text-sm font-medium text-neutral-600">Sort by</span>
      <select
        value={sortBy}
        onChange={(e) => onSortBy(e.target.value)}
        className="
    rounded-xl
    border
    border-neutral-300
    bg-white
    px-4
    py-2.5
    text-sm
    font-medium
    text-neutral-700
    shadow-sm
    outline-none
    transition
    focus:border-black
    focus:ring-2
    focus:ring-neutral-200
  "
      >
        {" "}
        <option value="default">Default</option>
        <option value="name-asc">Name A-Z</option>
        <option value="name-desc">Name Z-A</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="price-desc">Price: High → Low</option>
      </select>
    </div>
  );
}

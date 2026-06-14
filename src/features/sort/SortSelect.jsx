import { ArrowUpDown } from "lucide-react";

export default function SortSelect({ sortBy, onSortBy }) {
  return (
    <div className="flex w-full items-center gap-3 sm:w-auto">
      <ArrowUpDown size={16} className="shrink-0 text-neutral-500" />
      <span className="whitespace-nowrap text-sm font-medium text-neutral-600">
        Sort by
      </span>

      <select
        value={sortBy}
        onChange={(e) => onSortBy(e.target.value)}
        className="h-12 w-full rounded-2xl border border-neutral-300 bg-white px-4 text-sm font-medium text-neutral-700 shadow-sm outline-none transition focus:border-[var(--accent)]
focus:ring-[var(--accent)] sm:w-auto"
      >
        <option value="default">Default</option>
        <option value="name-asc">Name A-Z</option>
        <option value="name-desc">Name Z-A</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="price-desc">Price: High → Low</option>
      </select>
    </div>
  );
}

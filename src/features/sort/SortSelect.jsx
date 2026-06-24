import { ArrowUpDown } from "lucide-react";

const sortOptions = [
  { value: "default", label: "Default" },
  { value: "name-asc", label: "Name A-Z" },
  { value: "name-desc", label: "Name Z-A" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
];

export default function SortSelect({ sortBy, onSortBy }) {
  return (
    <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
      <div className="flex items-center gap-2 text-[var(--text-secondary)]">
        <ArrowUpDown size={16} className="text-[var(--text-muted)]" />
        <span className="text-sm font-medium">Sort by</span>
      </div>

      <div className="relative w-full sm:w-auto">
        <select
          value={sortBy}
          onChange={(e) => onSortBy(e.target.value)}
          className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] px-2 pr-8 text-sm font-medium text-[var(--text-primary)] shadow-sm outline-none transition focus:border-[var(--accent)] focus:ring-[var(--accent)]"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

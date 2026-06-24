import { ArrowUpDown } from "lucide-react";

export default function SortSelect({ sortBy, onSortBy }) {
  return (
    <div className="flex w-full items-center gap-3 sm:w-auto">
      <ArrowUpDown size={16} className="shrink-0 text-[var(--text-muted)]" />
      <span className="whitespace-nowrap text-sm font-medium text-[var(--text-secondary)]">
        Sort by
      </span>

      <select
        value={sortBy}
        onChange={(e) => onSortBy(e.target.value)}
        className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] px-4 text-sm font-medium text-[var(--text-primary)] shadow-sm outline-none transition focus:border-[var(--accent)]
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

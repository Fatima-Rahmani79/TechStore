import { Search } from "lucide-react";
import { useSearch } from "../../context/search/useSearch";

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <div className="relative w-full">
      <Search
        size={18}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
      />

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] pl-11 pr-4 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)] focus:ring-[var(--accent)]"
      />
    </div>
  );
}

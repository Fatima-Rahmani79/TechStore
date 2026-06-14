import { Search } from "lucide-react";
import { useSearch } from "../../context/search/useSearch";

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <div className="relative mb-8">
      <Search
        size={18}
        className="absolute top-1/2 left-4 -translate-y-1/2 text-neutral-400"
      />

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-xl border border-neutral-300 py-3 pr-4 pl-11 outline-none transition focus:border-black"
      />
    </div>
  );
}

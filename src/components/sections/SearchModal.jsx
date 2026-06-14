import { useSearch } from "../../context/search/useSearch";

export default function SearchModal() {
  const { searchTerm, setSearchTerm } = useSearch();
  return (
    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
  );
}

export default function SearchBar({ search, onSearchTerm }) {
  return (
    <div>
      <input
        className="border-1"
        type="text"
        value={search}
        onChange={(e) => onSearchTerm(e.target.value)}
      />
    </div>
  );
}

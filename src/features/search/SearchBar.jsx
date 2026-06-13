export default function SearchBar({ searchTerm, onSearchTerm }) {
  return (
    <div>
      <input
        className="border-1"
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchTerm(e.target.value)}
      />
    </div>
  );
}

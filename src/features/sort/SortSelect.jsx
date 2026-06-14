export default function SortSelect({ sortBy, onSortBy }) {
  return (
    <select value={sortBy} onChange={(e) => onSortBy(e.target.value)}>
      <option value="default">Default</option>

      <option value="name-asc">Name A-Z</option>
      <option value="name-desc">Name Z-A</option>

      <option value="price-asc">Price: Low → High</option>
      <option value="price-desc">Price: High → Low</option>
    </select>
  );
}

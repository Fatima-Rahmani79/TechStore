export default function CategoryCard({ category, onClick }) {
  return (
    <div className="category-card" onClick={onClick}>
      <h3>{category}</h3>
    </div>
  );
}

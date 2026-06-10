import CategoryCard from "../../features/products/components/CategoryCard";

export default function Categories() {
  return (
    <div className="categories-section">
      <CategoryCard
        category="laptops"
        onClick={() => console.log("Laptops clicked")}
      />
      <CategoryCard
        category="monitores"
        onClick={() => console.log("Monitores clicked")}
      />
      <CategoryCard
        category="accessories"
        onClick={() => console.log("Accessories clicked")}
      />
    </div>
  );
}

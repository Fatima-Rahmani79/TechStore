import CategoryCard from "../../features/products/components/CategoryCard";
import laptopsCategory from "../../assets/images/laptops.jpg";
import monitors from "../../assets/images/monitor.webp";
import audioCategory from "../../assets/images/audio.jpg";
import accessoriesCategory from "../../assets/images/accessory.webp";

const categories = [
  { name: "Laptops", img: laptopsCategory },
  { name: "Monitors", img: monitors },
  { name: "Audio", img: audioCategory },
  { name: "Accessories", img: accessoriesCategory },
];
export default function Categories() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:px-12 md:px-16 lg:px-20 py-12">
      <h2 className="col-span-full text-2xl font-bold mb-6">
        Shop by Category
      </h2>

      {categories.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </div>
  );
}

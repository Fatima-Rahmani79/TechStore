export default function CategoryCard({ category }) {
  return (
    <div
      className="rounded-2xl
         bg-white
        flex
        flex-col
        justify-between
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg"
    >
      <img
        src={category.img}
        alt={category.name}
        className="w-full h-full object-cover"
      />
      <h3 className="p-4">{category.name}</h3>
    </div>
  );
}

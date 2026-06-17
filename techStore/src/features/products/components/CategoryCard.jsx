export default function CategoryCard({ category }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl bg-white shadow-sm">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className=" absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute w-full bottom-0 left-0 p-6 bg-black/50 text-white">
        <h3 className="text-2xl font-display text-white">{category.name}</h3>

        <p className="mt-2 text-sm text-white/80">{category.description}</p>
      </div>
    </article>
  );
}

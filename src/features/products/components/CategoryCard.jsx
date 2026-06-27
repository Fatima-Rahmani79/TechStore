import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CategoryCard({ category }) {
  return (
    <Link to={`/shop?category=${category.slug}`}>
      <article className="group relative overflow-hidden rounded-3xl shadow-sm cursor-pointer">
        {/* Image */}
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        {/*  gradient — */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 text-[var(--text-on-dark)]">
          <h3 className="text-2xl font-display text-[var(--text-on-dark)]">
            {category.name}
          </h3>
          <div className="flex items-center justify-between mt-2">
            <p className="text-sm text-[var(--text-on-dark)] opacity-70">
              {category.description}
            </p>
            <ArrowRight
              size={18}
              className="shrink-0 ml-4 opacity-0 translate-x-[-4px] transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"
            />
          </div>
        </div>
      </article>
    </Link>
  );
}

import Categories from "../components/sections/Categories";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Categories />
    </div>
  );
}

import CategoryCard from "../../features/products/components/CategoryCard";
import laptopsCategory from "/images/laptop.webp";
import monitorsCategory from "/images/monitor.webp";
import audioCategory from "/images/audio.webp";
import accessoriesCategory from "/images/accessory.jpg";
import { motion } from "framer-motion";
import { fadeUpInView } from "../../utils/animations";

const categories = [
  {
    id: 1,
    name: "Laptops",
    slug: "laptop",
    image: laptopsCategory,
    description: "High-performance laptops for work and gaming",
  },
  {
    id: 2,
    name: "Monitors",
    slug: "monitor",
    image: monitorsCategory,
    description: "Sharp displays for productivity and entertainment",
  },
  {
    id: 3,
    name: "Audio",
    slug: "audio",
    image: audioCategory,
    description: "Headphones, speakers and premium sound gear",
  },
  {
    id: 4,
    name: "Accessories",
    slug: "accessory",
    image: accessoriesCategory,
    description: "Essential accessories for your setup",
  },
];

export default function Categories() {
  return (
    <section className="mx-auto mb-14 max-w-7xl px-6 py-20">
      <motion.div {...fadeUpInView}>
        <div className="mb-10">
          <p className="badge badge-accent mb-3">Categories</p>

          <h2 className="text-4xl font-display">Shop by Category</h2>

          <p className="mt-3 max-w-xl text-[var(--text-secondary)]">
            Explore our collection of laptops, monitors, audio devices, and
            accessories designed for modern work and entertainment.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          animate: { transition: { staggerChildren: 0.07 } },
        }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2"
      >
        {categories.map((category) => (
          <motion.div
            key={category.id}
            variants={{
              initial: { opacity: 0, y: 16 },
              animate: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            <CategoryCard category={category} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

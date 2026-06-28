import { useEffect, useState } from "react";
import ProductCard from "../../features/products/components/ProductCard";
import { getFeaturedProducts } from "../../services/productsApi";
import { motion } from "framer-motion";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getFeaturedProducts();
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <section className="mx-auto mb-14 max-w-7xl px-6 flex justify-center">
      <div className="container">
        <div className="mb-12">
          {/* whileInView  */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="badge badge-accent mb-3">Featured</p>
            <h2 className="text-4xl font-display">Featured Products</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 max-w-xl text-[var(--text-secondary)]"
          >
            Discover our handpicked selection of featured products, showcasing
          </motion.p>
        </div>

        {/* ProductGrid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            animate: { transition: { staggerChildren: 0.07 } },
          }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                initial: { opacity: 0, y: 16 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

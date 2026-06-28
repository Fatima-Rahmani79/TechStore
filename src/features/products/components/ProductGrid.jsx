import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../../../utils/animations";

export default function ProductGrid({ products }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={staggerItem}>
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
}

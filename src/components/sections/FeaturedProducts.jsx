import ProductCard from "../../features/products/components/ProductCard";
const product = {
  id: 1,
  shortName: "Laptop HP OmniBook 5 16- Intel® Core™ i5",
  name: "Laptop HP OmniBook 5 16- Intel® Core™ i5",
  memory: "16GB RAM",
  storage: "512GB SSD",
  processor: "Intel® Core™ i5",
  display: "16 inch Full-HD",
  graphics: "Intel Iris Xe Graphics",
  touchscreen: false,
  color: "Silver",
  brand: "HP",
  category: "laptop",
  stock: 12,
  images: [
    "assets/images/hp-omniBook-1.avif",
    "assets/images/hp-omniBook-2.webp",
    "assets/images/hp-omniBook-3.avif",
  ],
  price: 400,
  currency: "USD",
  shortDesc:
    "A versatile laptop built for productivity, entertainment, and everyday performance.",
  longDesc:
    "Laptop HP OmniBook 5 16- Intel® Core™ i5 delivers dependable performance with modern hardware, a quality display, and a design suited for work, study, and entertainment. It provides smooth multitasking, responsive performance, and a comfortable user experience for everyday computing.",
  rating: {
    average: 4.1,
    count: 23,
  },
  reviews: [
    {
      user: "Ali",
      comment:
        "Great product with solid performance and good value for the price.",
      rating: 5,
      date: "2025-09-08",
    },
    {
      user: "Sara",
      comment:
        "Great product with solid performance and good value for the price.",
      rating: 3,
      date: "2025-09-07",
    },
  ],
  specialOffer: true,
  bestSeller: false,
  relatedProducts: [2, 3],
  slug: "laptop-hp-omnibook-5-16-intel-core-i5",
  isNew: false,
  featured: false,
  tags: ["laptop", "hp"],
};

export default function FeaturedProducts() {
  return (
    <div className="py-12 px-10">
      <div className="container">
        <h2 className="text-3xl font-bold text-center">Featured Products</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ProductCard product={product} />
        </div>
      </div>
    </div>
  );
}

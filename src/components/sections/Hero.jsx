import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero-image.png";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="grid min-h-[calc(100vh-80px)] items-center lg:grid-cols-2">
        {/* Content */}
        <div className="space-y-6">
          <span className="rounded-full border px-4 py-2 text-sm">
            New Arrivals
          </span>

          <h1 className="text-5xl font-bold leading-tight lg:text-7xl">
            Technology Designed
            <br />
            For Modern Life
          </h1>

          <p className="max-w-lg text-lg text-gray-600">
            Discover premium devices built for work, creativity and
            entertainment.
          </p>

          <div className="flex gap-4">
            <Link to="/shop" className="btn-primary">
              Shop Now
            </Link>

            <Link to="/shop" className="rounded-lg border px-6 py-3">
              Explore
            </Link>
          </div>
        </div>

        {/* Image */}
        <div>
          <img
            src={heroImage}
            alt="Featured products"
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

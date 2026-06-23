import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import heroImage from "../../assets/images/hero-image.png";

const stats = [
  { value: "27+", label: "Brands" },
  { value: "4.8", label: "Avg Rating" },
  { value: "Free", label: "Shipping" },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-4">
      <div className="grid min-h-[calc(100vh-80px)] items-center gap-12 lg:grid-cols-2">
        {/* ── Content ─────────────────────────────────────────────────── */}
        <div className="flex flex-col items-start">
          {/* Badge */}
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-1.5 text-sm font-medium text-neutral-600 dark:border-neutral-700 dark:text-neutral-400">
            <Zap
              size={13}
              className="text-[var(--accent)]"
              fill="currentColor"
            />
            New Arrivals
          </span>

          {/* Heading */}
          <h1 className="mb-5 text-5xl font-bold leading-[1.1] tracking-tight text-neutral-900 dark:text-neutral-50 lg:text-6xl xl:text-7xl">
            Technology
            <br />
            Designed For
            <br />
            <span className="relative inline-block">
              Modern Life
              {/* underline with accent */}
              <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-[var(--accent)] opacity-70" />
            </span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-md text-base leading-relaxed text-neutral-500 dark:text-neutral-400 lg:text-lg">
            Discover premium devices built for work, creativity and
            entertainment.
          </p>

          {/* CTAs */}
          <div className="mb-12 flex flex-wrap gap-3">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Shop Now
              <ArrowRight size={15} />
            </Link>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-6 py-3 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              Explore All
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8">
            {stats.map(({ value, label }, i) => (
              <div key={label} className="flex items-center gap-8">
                <div>
                  <div className="font-mono text-xl font-bold text-neutral-900 dark:text-neutral-50">
                    {value}
                  </div>
                  <div className="text-xs text-neutral-400">{label}</div>
                </div>
                {i < stats.length - 1 && (
                  <div className="h-8 w-px bg-neutral-200 dark:bg-neutral-700" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Image ───────────────────────────────────────────────────── */}
        <div className="relative flex items-center justify-center">
          {/* Glow*/}
          <div className="absolute inset-0 -z-10 rounded-3xl bg-[var(--accent)] opacity-[0.07] blur-3xl" />

          <img
            src={heroImage}
            alt="Featured tech products including laptops, monitors and headphones"
            className="w-full max-w-xl object-contain drop-shadow-xl
                       dark:brightness-90 dark:contrast-110"
          />
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import heroImage from "/images/hero-image.webp";
import { motion } from "framer-motion";

const stats = [
  { value: "27+", label: "Brands" },
  { value: "4.8", label: "Avg Rating" },
  { value: "Free", label: "Shipping" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-4">
      <div className="grid items-center gap-12 py-12 lg:min-h-[calc(100vh-80px)] lg:grid-cols-2 lg:gap-20">
        {/* ── Content ─────────────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Badge */}
          <motion.span
            {...fadeUp(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-4 py-1.5 text-sm font-medium text-[var(--text-secondary)]"
          >
            <Zap
              size={13}
              className="text-[var(--accent)]"
              fill="currentColor"
            />
            Trending Tech
          </motion.span>

          {/* Heading */}
          <motion.h1
            {...fadeUp(0.1)}
            className="mb-5 text-4xl font-bold leading-[1.1] text-[var(--text-primary)] sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Technology
            <br />
            Designed For
            <br />
            <span className="relative inline-block">
              Modern Life
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ originX: 0 }}
                className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-[var(--accent)] opacity-70"
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeUp(0.2)}
            className="mb-8 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] lg:text-lg"
          >
            Discover premium devices built for work, creativity and
            entertainment.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.3)} className="mb-12 flex flex-wrap gap-3">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--text-primary)] px-6 py-3 text-sm font-semibold text-[var(--text-inverse)] transition hover:bg-neutral-700 dark:bg-white dark:text-[var(--text-primary)] dark:hover:bg-neutral-200"
            >
              Shop Now
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--text-secondary)] transition hover:bg-[var(--bg-muted)]"
            >
              Explore All
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex flex-wrap justify-center gap-8 lg:justify-start"
          >
            {stats.map(({ value, label }, i) => (
              <div key={label} className="flex items-center gap-8">
                <div>
                  <div className="font-mono text-xl font-bold text-[var(--text-primary)]">
                    {value}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    {label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div className="h-8 w-px bg-neutral-200 dark:bg-neutral-700" />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Image ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-xl xl:max-w-2xl"
        >
          <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[var(--accent)] opacity-10 blur-[120px]" />
          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-sky-300 opacity-10 blur-[140px]" />
          <img
            src={heroImage}
            alt="Featured tech products including laptops, monitors and headphones"
            className="w-full object-contain drop-shadow-xl dark:brightness-90 dark:contrast-110"
          />
        </motion.div>
      </div>
    </section>
  );
}

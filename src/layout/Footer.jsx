import { Link } from "react-router-dom";

import {
  Laptop,
  Monitor,
  Headphones,
  Mouse,
  Truck,
  ShieldCheckIcon,
  Headset,
  CreditCard,
} from "lucide-react";

const productLinks = [
  { label: "Laptops", to: "/shop?category=laptop", icon: <Laptop size={16} /> },

  {
    label: "Monitors",

    to: "/shop?category=monitor",

    icon: <Monitor size={16} />,
  },

  {
    label: "Audio",

    to: "/shop?category=audio",

    icon: <Headphones size={16} />,
  },

  {
    label: "Accessories",

    to: "/shop?category=accessory",

    icon: <Mouse size={16} />,
  },
];

const companyLinks = [
  { label: "About", to: "/about" },

  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com" },

  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200 bg-[var(--bg-surface)] text-white">
      {/* Features */}
      <div className="border-b border-neutral-800">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
          <div className="flex items-center gap-3">
            <Truck className="text-[var(--accent)]" />

            <div>
              <h4 className="font-semibold">Free Shipping</h4>

              <p className="text-sm text-neutral-400">Orders over $100</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheckIcon className="text-[var(--accent)]" />

            <div>
              <h4 className="font-semibold">Secure Payment</h4>

              <p className="text-sm text-neutral-400">100% Protected</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Headset className="text-[var(--accent)]" />

            <div>
              <h4 className="font-semibold">24/7 Support</h4>

              <p className="text-sm text-neutral-400">Always here to help</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CreditCard className="text-[var(--accent)]" />

            <div>
              <h4 className="font-semibold">Easy Checkout</h4>

              <p className="text-sm text-neutral-400">Fast & Simple</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Tech<span className="text-[var(--accent)]">Store.</span>
            </h2>

            <p className="mt-5 leading-7 text-[var(--text-secondary)]">
              Modern technology products for work, entertainment, gaming and
              everyday productivity.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-5 font-semibold">Products</h3>

            <ul className="space-y-4">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="flex items-center gap-3 text-[var(--text-secondary)] transition hover:text-[var(--text-muted)]"
                  >
                    {item.icon}

                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}

          <div>
            <h3 className="mb-5 font-semibold">Company</h3>

            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-[var(--text-secondary)] transition hover:text-[var(--text-muted)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-2 text-sm font-semibold text-[var(--text-primary)]">
              Connect
            </h3>
            <ul className="space-y-3">
              {socialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-muted)]"
                  >
                    {label}{" "}
                    <span className="text-[var(--accent)] font-extrabold">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-neutral-800 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-neutral-500">
            © 2026 TechStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

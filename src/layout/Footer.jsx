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
    <footer className="mt-20 border-t border-[var(--border)] bg-[var(--bg-surface)]">
      {/* Features */}
      <div className="border-b border-[var(--border)]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
          {[
            {
              icon: <Truck />,
              title: "Free Shipping",
              desc: "Orders over $100",
            },
            {
              icon: <ShieldCheckIcon />,
              title: "Secure Payment",
              desc: "100% Protected",
            },
            {
              icon: <Headset />,
              title: "24/7 Support",
              desc: "Always here to help",
            },
            {
              icon: <CreditCard />,
              title: "Easy Checkout",
              desc: "Fast & Simple",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex items-center gap-3">
              <span className="text-[var(--accent)]">{icon}</span>
              <div>
                <h4 className="font-semibold text-[var(--text-primary)]">
                  {title}
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Tech<span className="text-[var(--accent)]">Store.</span>
            </h2>
            <p className="mt-5 leading-7 text-[var(--text-secondary)]">
              Modern technology products for work, entertainment, gaming and
              everyday productivity.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-5 font-semibold text-[var(--text-primary)]">
              Products
            </h3>
            <ul className="space-y-4">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="flex items-center gap-3 text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
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
            <h3 className="mb-5 font-semibold text-[var(--text-primary)]">
              Company
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 font-semibold text-[var(--text-primary)]">
              Connect
            </h3>
            <ul className="space-y-3">
              {socialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
                  >
                    {label}{" "}
                    <span className="font-extrabold text-[var(--accent)]">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-[var(--border)] pt-6">
          <p className="text-sm text-[var(--text-secondary)]">
            © 2026 TechStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

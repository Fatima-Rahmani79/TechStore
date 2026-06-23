import { Link } from "react-router-dom";

const productLinks = [
  { label: "Laptops", to: "/shop?category=laptop" },
  { label: "Monitors", to: "/shop?category=monitor" },
  { label: "Audio", to: "/shop?category=audio" },
  { label: "Accessories", to: "/shop?category=accessory" },
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
    <footer className="border-t border-[var(--border)] bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              TechStore.
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-[var(--text-secondary)]">
              Modern technology products for work, entertainment, and everyday
              life.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-[var(--text-primary)]">
              Products
            </h3>
            <ul className="space-y-3">
              {productLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-[var(--text-primary)]">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-[var(--text-primary)]">
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
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-[var(--text-secondary)]">
            © 2026 TechStore. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-secondary)]">
            Built with React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

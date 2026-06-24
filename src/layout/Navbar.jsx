import { Link } from "react-router-dom";
import { Search, Heart, ShoppingCart, X, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import SearchModal from "../components/sections/SearchModal";
import { useEffect, useState } from "react";
import { selectCartTotalItems } from "../features/cart/cartSelectors";
import { useSelector } from "react-redux";
import { selectWishlistTotalItems } from "../features/wishlist/wishlistSelectors";
import { useDarkMode } from "../hooks/useDarkMode";
import { Sun, Moon } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isDark, toggle } = useDarkMode();

  const totalItems = useSelector(selectCartTotalItems);
  const wishlistCount = useSelector(selectWishlistTotalItems);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hiddden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <header className="sticky w-full top-0 z-50 border-b border-[var(--border)] bg-[var(--bg-surface)] backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-xl font-bold font-display">
            TechStore.
          </Link>

          <ul className="hidden items-center space-x-6 md:flex">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-2">
            {/* Search */}
            <button
              className="btn-icon"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
            >
              <Search className="h-6 w-6" />
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="btn-icon relative"
              aria-label={`Wishlist (${wishlistCount})`}
            >
              <Heart className="h-6 w-6" />
              {wishlistCount > 0 && <Badge count={wishlistCount} />}
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="btn-icon relative"
              aria-label={`Cart (${totalItems})`}
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && <Badge count={totalItems} />}
            </Link>

            {/* Hamburger */}
            <button
              className="btn-icon md:hidden"
              onClick={() => setIsMobileOpen((o) => !o)}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={toggle}
              className="btn-icon"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed inset-x-0 top-[65px] z-40 border-b border-neutral-200 bg-white px-6 pb-6 pt-2 dark:border-neutral-800 dark:bg-neutral-900 md:hidden">
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    onClick={() => setIsMobileOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? "bg-[var(--bg-subtle)] text-[var(--text-primary)]"
                          : "text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)]"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="my-4 h-px bg-neutral-200 dark:bg-neutral-800" />

            {/* Quick links */}
            <div className="flex gap-3">
              <Link
                to="/wishlist"
                onClick={() => setIsMobileOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-neutral-200 py-2.5 text-sm font-medium text-[var(--text-secondary)] dark:border-neutral-800"
              >
                <Heart className="h-4 w-4" />
                Wishlist
                {wishlistCount > 0 && (
                  <span className="text-xs text-[var(--text-muted)]">
                    ({wishlistCount})
                  </span>
                )}
              </Link>
              <Link
                to="/cart"
                onClick={() => setIsMobileOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] py-2.5 text-sm font-medium text-[var(--accent-text)]"
              >
                <ShoppingCart className="h-4 w-4" />
                Cart
                {totalItems > 0 && (
                  <span className="text-xs">({totalItems})</span>
                )}
              </Link>
            </div>
          </div>
        </>
      )}

      {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}
    </>
  );
}

function Badge({ count }) {
  return (
    <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--accent)] text-[10px] font-bold text-[var(--accent-text)]">
      {count > 99 ? "99+" : count}
    </span>
  );
}

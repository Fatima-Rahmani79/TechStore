import { Link } from "react-router-dom";
import { Search, Heart, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";
import SearchModal from "../components/sections/SearchModal";
import { useState } from "react";
import { selectCartTotalItems } from "../features/cart/cartSelectors";
import { useSelector } from "react-redux";
import { selectWishlistTotalItems } from "../features/wishlist/components/wishlistSelectors";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const totalItems = useSelector(selectCartTotalItems);

  const wishlistCount = useSelector(selectWishlistTotalItems);

  return (
    <>
      <header className="sticky w-full top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold">
            <Link to="/" className="text-xl font-bold">
              TechStore.
            </Link>
          </h1>

          <ul className=" flex items-center space-x-6">
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>

            <li>
              <Link className="text-gray-700" to={"/about"}>
                About
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <button className="btn-icon" onClick={() => setIsSearchOpen(true)}>
              <Search />
            </button>

            <Link to="/whishlist" className="btn-icon">
              <div className="relative">
                <Heart className="h-6 w-6" />

                {wishlistCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {wishlistCount > 99 ? "99+" : wishlistCount}
                  </span>
                )}
              </div>
            </Link>

            <Link to="/cart" className="btn-icon">
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />

                {totalItems > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </nav>
      </header>
      {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}
    </>
  );
}

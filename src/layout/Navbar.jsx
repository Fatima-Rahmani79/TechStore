import { Link } from "react-router-dom";
import { Search, Heart, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  // const { searchTerm, setSearchTerm } = useSearch();
  return (
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
          <button className="btn-icon">
            <Search />
          </button>
          <button className="btn-icon">
            <Heart />
          </button>
          <button className="btn-icon">
            <ShoppingCart />
          </button>
        </div>
      </nav>
    </header>
  );
}

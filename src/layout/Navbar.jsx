import { Link } from "react-router-dom";
import { Search, Heart, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <h1 className="font-heading text-xl font-bold">TechStore.</h1>

      <ul className=" flex items-center space-x-6">
        <li>
          <Link to="/">Shop</Link>
        </li>

        <li>
          <Link className="text-gray-700" to={"/about"}>
            About
          </Link>
        </li>
      </ul>

      <div className="flex items-center space-x-4">
        <button className="btn-primary">Sign In</button>
        <Search />
        <Heart />
        <ShoppingCart />
      </div>
    </nav>
  );
}

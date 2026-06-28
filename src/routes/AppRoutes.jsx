import { Routes, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import Home from "../pages/HomePage";
import ProductDetails from "../pages/ProductDetailsPage";
import Cart from "../pages/CartPage";
import Wishlist from "../pages/WishlistPage";
import NotFound from "../pages/NotFoundPage";
import MainLayout from "../layout/MainLayout";
import Shop from "../pages/Shop";
import About from "../pages/About";
import CheckoutPage from "../pages/CheckoutPage";

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route
          element={<MainLayout />}
          location={location}
          key={location.pathname}
        >
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<CheckoutPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

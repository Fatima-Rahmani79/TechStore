import { Routes, Route } from "react-router-dom";

import Home from "../pages/HomePage";
import ProductDetails from "../pages/ProductDetailsPage";
import Cart from "../pages/CartPage";
import Wishlist from "../pages/WishlistPage";
import NotFound from "../pages/NotFoundPage";
import MainLayout from "../layout/MainLayout";
import Shop from "../pages/Shop";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

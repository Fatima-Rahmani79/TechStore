export function saveWishlist(items) {
  localStorage.setItem("wishlist", JSON.stringify(items));
}

export function loadWishlist() {
  const storedWishlist = localStorage.getItem("wishlist");

  return storedWishlist ? JSON.parse(storedWishlist) : [];
}

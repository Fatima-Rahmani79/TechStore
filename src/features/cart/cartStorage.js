export function saveCart(items) {
  localStorage.setItem("cart", JSON.stringify(items));
}

export function loadCart() {
  const storedCart = localStorage.getItem("cart");

  return storedCart ? JSON.parse(storedCart) : [];
}

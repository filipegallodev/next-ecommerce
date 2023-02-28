export function getProductsFromLocalStorage() {
  if (typeof window !== "undefined") {
    const products = localStorage.getItem("products");
    if (products) return JSON.parse(products);
    return null;
  }
}

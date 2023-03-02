export const saveCart = (products: IProduct[]) => {
  if (products && typeof window !== "undefined")
    return localStorage.setItem("next-cart", JSON.stringify(products));
};

export const loadCart = () => {
  if (typeof window !== "undefined") {
    const localCart = localStorage.getItem("next-cart");
    if (localCart) return JSON.parse(localCart);
    return null;
  }
};

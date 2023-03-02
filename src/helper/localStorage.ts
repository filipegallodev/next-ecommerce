export const saveCart = (products: IProduct[], totalPrice: number) => {
  if (products && typeof window !== "undefined")
    return localStorage.setItem(
      "next-cart",
      JSON.stringify({
        items: products,
        totalPrice: totalPrice,
      })
    );
};

export const loadCartItems = () => {
  if (typeof window !== "undefined") {
    const localCart = localStorage.getItem("next-cart");
    if (localCart && JSON.parse(localCart).items.length) return JSON.parse(localCart).items;
    return null;
  }
};

export const loadCartPrice = () => {
  if (typeof window !== "undefined") {
    const localCart = localStorage.getItem("next-cart");
    if (localCart) return JSON.parse(localCart).totalPrice;
    return 0;
  }
};

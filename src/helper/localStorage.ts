// Common function
const verifyIfWindowExists = () => {
  return typeof window !== "undefined";
};

// Manage local storage data of the Cart
export const saveCart = (products: IProduct[], totalPrice: number) => {
  if (products && verifyIfWindowExists())
    return localStorage.setItem(
      "next-cart",
      JSON.stringify({
        items: products,
        totalPrice: totalPrice,
      })
    );
};

export const loadCartItems = () => {
  if (verifyIfWindowExists()) {
    const localCart = localStorage.getItem("next-cart");
    if (localCart && JSON.parse(localCart).items.length)
      return JSON.parse(localCart).items;
    return null;
  }
};

export const loadCartPrice = () => {
  if (verifyIfWindowExists()) {
    const localCart = localStorage.getItem("next-cart");
    if (localCart) return JSON.parse(localCart).totalPrice;
    return 0;
  }
};

// Manage local storage data of the Favorites
export const saveFavoriteOnLocalStorage = (products: IProduct[]) => {
  if (verifyIfWindowExists()) {
    localStorage.setItem("favorite-items", JSON.stringify(products));
  }
};

export const loadFavoriteFromLocalStorage = () => {
  if (verifyIfWindowExists()) {
    const localFavorites = localStorage.getItem("favorite-items");
    if (localFavorites) return JSON.parse(localFavorites);
    return null;
  }
};

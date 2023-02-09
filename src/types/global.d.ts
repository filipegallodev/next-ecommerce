interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ICart {
  empty: boolean;
  items: IProduct[];
  totalPrice: number;
}

interface IProductState {
  loading: boolean;
  data: null | IProduct[];
  error: null | string;
}

interface IReduxState {
  product: IProductState;
  cart: ICart;
}

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
  amount: null | number;
}

interface ICart {
  open: boolean;
  empty: boolean;
  items: IProduct[];
  totalPrice: number;
}

interface IProductState {
  loading: boolean;
  data: null | IProduct[];
  product: null | IProduct;
  error: null | string;
}

interface IReduxState {
  product: IProductState;
  cart: ICart;
}

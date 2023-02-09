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

interface IReduxState {
  product: {
    loading: boolean;
    data: null | IProduct[];
    error: null | string;
  };
}

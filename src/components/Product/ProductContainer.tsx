import React, { useEffect } from "react";
import Loading from "../Loading";
import ProductCard from "./ProductCard";
import ProductCardList from "./ProductCardList";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { fetchProducts } from "@/store/reducers/product";
import styled from "styled-components";

const ProductContainer = () => {
  const { data, error, loading } = useAppSelector(
    (state: IReduxState) => state.product
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(fetchProducts());
  }, [dispatch, data]);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;
  if (!data) return null;
  return (
    <Container>
      <ProductCardList>
        {data.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductCardList>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default ProductContainer;

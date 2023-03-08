import React from "react";
import ProductCard from "./ProductCard";
import ProductCardList from "./ProductCardList";
import { useAppSelector } from "@/hooks/useAppSelector";
import styled from "styled-components";

const ProductFavoriteContainer = () => {
  const { items, empty } = useAppSelector(
    (state: IReduxState) => state.favorite
  );

  if (empty || !items)
    return (
      <Container>
        <EmptyFavoriteMessage>
          You don't have any favorite products!
        </EmptyFavoriteMessage>
      </Container>
    );
  return (
    <Container>
      <ProductCardList>
        {items.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductCardList>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const EmptyFavoriteMessage = styled.p`
  font-size: 1.25rem;
  text-align: center;
`;

export default ProductFavoriteContainer;

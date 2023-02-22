import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { fetchProducts } from "@/store/reducers/product";
import React, { useEffect } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  const { data, error, loading } = useAppSelector(
    (state: IReduxState) => state.product
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return null;
  return (
    <div>
      <ProductList>
        {data.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductList>
    </div>
  );
};

const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export default ProductSection;

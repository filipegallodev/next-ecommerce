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
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return null;
  return (
    <section>
      <ProductList>
        {data.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductList>
    </section>
  );
};

const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 16px;
`;

export default ProductSection;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  const [products, setProducts] = useState<IProduct[]>();
  const [maxProducts, setMaxProducts] = useState<number>(8);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        if (!response.ok) throw new Error("Error: " + response.status);
        const data = await response.json();
        setProducts(data);
      } catch (error) {}
    }
    fetchProducts();
  }, []);

  if (!products) return null;
  return (
    <section>
      <ProductList>
        {products.map((product) => (
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

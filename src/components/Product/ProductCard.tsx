import React from "react";
import styled from "styled-components";

const ProductCard = () => {
  return (
    <ProductContainer>
      <MainContent>
        <Image
          src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          alt="Imagem"
        />
        <SubContainer>
          <Title>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</Title>
          <Price>$109.95</Price>
        </SubContainer>
        <Rating>
          *3.9 {"("}120{")"}
        </Rating>
      </MainContent>
      <Button>Buy</Button>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  height: 360px;
  width: 320px;
  border-radius: 8px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainContent = styled.div`
  padding: 0 12px 0 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  margin: 24px 0;
  max-height: 172px;
`;

const SubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

const Title = styled.h3`
  font-weight: 500;
`;

const Price = styled.span`
  background-color: #555;
  height: 30px;
  padding: 6px 10px;
  border-radius: 4px;
  color: #5f5;
  font-size: 1.125rem;
  font-weight: 700;
`;

const Rating = styled.p`
  width: 100%;
  margin: 8px 0;
  color: #fb5;
  font-weight: 700;
`;

const Button = styled.button`
  background-color: #11f;
  width: 100%;
  padding: 16px;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #00c;
  }
`;

export default ProductCard;

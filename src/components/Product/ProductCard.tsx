import React from "react";
import styled from "styled-components";

const ProductCard = () => {
  return (
    <ProductContainer>
      <MainContent>
        <div style={{ width: "144px", height: "144px" }}>Image</div>
        <Title>Title</Title>
        <SubContainer>
          <Price>Price</Price>
          <Rating>Rating</Rating>
        </SubContainer>
        <Description>Description</Description>
      </MainContent>
      <Button>Buy</Button>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const MainContent = styled.div``;

const Image = styled.h3``;

const Title = styled.h3``;

const SubContainer = styled.div``;

const Price = styled.span``;

const Rating = styled.span``;

const Description = styled.p``;

const Button = styled.button`
  width: 100%;
  padding: 16px;
  cursor: pointer;
`;

export default ProductCard;

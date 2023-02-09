import React from "react";
import styled from "styled-components";

const ProductCard = ({ title, price, image, rating }: IProduct) => {
  return (
    <ProductContainer>
      <MainContent>
        <ImageContainer>
          <Image src={image} alt={title} />
        </ImageContainer>
        <InfoContainer>
          <TitleAndPriceContainer>
            <Title>
              {title.length >= 41 ? `${title.slice(0, 40)}...` : title}
            </Title>
            <Price>${price}</Price>
          </TitleAndPriceContainer>
          <Rating>
            *{rating.rate} {"("}
            {rating.count}
            {")"}
          </Rating>
        </InfoContainer>
      </MainContent>
      <Button>Buy</Button>
    </ProductContainer>
  );
};

const ProductContainer = styled.li`
  background-color: #f5f5f5;
  height: 400px;
  width: 360px;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainContent = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  margin: 24px 0;
  max-height: 172px;
`;

const InfoContainer = styled.div`
  width: 100%;
  padding: 12px;
`;

const TitleAndPriceContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #000;
`;

const Price = styled.span`
  padding: 8px;
  background-color: #444;
  border-radius: 4px;
  color: #fc5;
  font-size: 1rem;
  font-weight: 500;
`;

const Rating = styled.p`
  width: 100%;
  margin: 8px 0;
  color: #333;
  font-weight: 500;
`;

const Button = styled.button`
  background-color: #11f;
  width: 100%;
  padding: 16px;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #00c;
  }
`;

export default ProductCard;

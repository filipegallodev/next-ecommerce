import React from "react";
import styled from "styled-components";

const CartItem = (data: IProduct) => {
  const { title, image, price } = data;

  return (
    <ItemCard>
      <ImageAndTitleContainer>
        <Image src={image} alt={title} />
        <Title>{title}</Title>
      </ImageAndTitleContainer>
      <span>${price}</span>
    </ItemCard>
  );
};

const ItemCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
  background-color: #fff;
  padding: 16px;
  border-radius: 4px;
`;

const ImageAndTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Image = styled.img`
  max-height: 64px;
`;

const Title = styled.h3`
  font-size: 0.875rem;
`;

export default CartItem;

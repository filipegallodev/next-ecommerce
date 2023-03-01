import { useAppDispatch } from "@/hooks/useAppDispatch";
import { removeProduct } from "@/store/reducers/cart";
import React from "react";
import styled from "styled-components";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const CartItem = (data: IProduct) => {
  const { title, image, price, amount } = data;
  const dispatch = useAppDispatch();

  return (
    <ItemCard>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <ItemInfo>
        <Title>{title}</Title>
        <Details>
          <AmountAndPriceContainer>
            <div>+ | {amount} | -</div>
            <Price>${price}</Price>
          </AmountAndPriceContainer>
          <button onClick={() => dispatch(removeProduct(data))}>
            <DeleteRoundedIcon />
          </button>
        </Details>
      </ItemInfo>
    </ItemCard>
  );
};

const ItemCard = styled.li`
  display: flex;
  align-items: flex-start;
  height: 160px;
  background-color: #eee;
  border-radius: 4px;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  height: 100%;
  gap: 12px;
  width: 180px;
  background-color: #fff;
`;

const Image = styled.img`
  max-height: 64px;
`;

const ItemInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  gap: 16px;
`;

const Title = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AmountAndPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.span`
  color: #5b5;
  font-weight: 500;
`;

export default CartItem;

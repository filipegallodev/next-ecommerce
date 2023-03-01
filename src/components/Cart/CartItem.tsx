import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  addProduct,
  removeOneProduct,
  removeProduct,
} from "@/store/reducers/cart";
import React from "react";
import styled from "styled-components";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

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
            <ControlAmount>
              <RemoveIcon onClick={() => dispatch(removeOneProduct(data))} />
              <Amount>{amount}</Amount>
              <AddIcon onClick={() => dispatch(addProduct(data))} />
            </ControlAmount>
            <Price>${price.toFixed(2)}</Price>
          </AmountAndPriceContainer>
          <RemoveItemButton onClick={() => dispatch(removeProduct(data))}>
            <DeleteRoundedIcon />
          </RemoveItemButton>
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

const ControlAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 1.125rem;
`;

const Amount = styled.span`
  width: 32px;
  text-align: center;
`;

const Price = styled.span`
  color: #5b5;
  font-size: 1.125rem;
  font-weight: 500;
`;

const RemoveItemButton = styled.button`
  cursor: pointer;
  margin: 0 auto;
`;

export default CartItem;

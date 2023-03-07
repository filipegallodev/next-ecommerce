import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  addProduct,
  removeOneProduct,
  removeProduct,
} from "@/store/reducers/cart";
import React from "react";
import styled, { keyframes } from "styled-components";
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
        <HeaderInfo>
          <Title>{title}</Title>
          <RemoveButton>
            <DeleteRoundedIcon onClick={() => dispatch(removeProduct(data))} />
          </RemoveButton>
        </HeaderInfo>
        <Details>
          <AmountAndPriceContainer>
            <ControlAmount>
              <RemoveIcon onClick={() => dispatch(removeOneProduct(data))} />
              <Amount>{amount}</Amount>
              <AddIcon onClick={() => dispatch(addProduct(data))} />
            </ControlAmount>
            <Price>${price.toFixed(2)}</Price>
          </AmountAndPriceContainer>
        </Details>
      </ItemInfo>
    </ItemCard>
  );
};

const slideToRight = keyframes`
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const ItemCard = styled.li`
  display: flex;
  align-items: flex-start;
  height: 160px;
  background-color: #e9eef1;
  border-radius: 4px;
  overflow: hidden;
  animation: ${slideToRight} 0.2s linear forwards;
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
  max-width: 80px;
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

const HeaderInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`;

const Title = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
`;

const RemoveButton = styled.button`
  color: #e00;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #f55;
  }
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
  & svg {
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      color: #777;
    }
  }
  & svg:first-child {
    color: #f55;
  }
  & svg:last-child {
    color: #559fff;
  }
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

export default CartItem;

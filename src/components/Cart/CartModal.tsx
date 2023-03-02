import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { closeCart } from "@/store/reducers/cart";
import React from "react";
import styled, { keyframes } from "styled-components";
import CartItem from "./CartItem";
import CartItemContainer from "./CartItemContainer";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const CartModal = () => {
  const dispatch = useAppDispatch();
  const { empty, items, totalPrice } = useAppSelector(
    (state: IReduxState) => state.cart
  );

  return (
    <ModalContainer>
      <ExitButton onClick={() => dispatch(closeCart())}>
        <CloseRoundedIcon style={{ transform: "scale(1.2)" }} />
      </ExitButton>
      {!empty ? (
        <CartContent>
          <InfoContainer>
            <InfoText>
              Total: <Price>${totalPrice.toFixed(2)}</Price>
            </InfoText>
            <FinishButton>Buy</FinishButton>
          </InfoContainer>
          <CartItemContainer>
            {items.map((product) => (
              <CartItem key={product.id} {...product} />
            ))}
          </CartItemContainer>
        </CartContent>
      ) : (
        <InfoContainer>
          <InfoText>Your cart is empty!</InfoText>
        </InfoContainer>
      )}
    </ModalContainer>
  );
};

const slideToLeft = keyframes`
  from {
    transform: translateX(520px);
    opacity: 0;
  }
  to {
    transform: initial;
    opacity: initial;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 560px;
  background-color: #333;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  animation: ${slideToLeft} 0.2s linear forwards;
  overflow-y: auto;
  z-index: 99999;
`;

const ExitButton = styled.button`
  background-color: #e00;
  color: #fff;
  padding: 8px;
  margin: 1rem;
  border-radius: 24px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #f55;
  }
`;

const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 98px;
  background-color: #fff;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InfoText = styled.p`
  color: #000;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Price = styled.span`
  color: #5b5;
`;

const FinishButton = styled.button`
  padding: 1rem 2rem;
  background-color: #fb5;
  border-radius: 8px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
  color: #222;
  transition: 0.3s;
  &:hover {
    background-color: #fc6;
  }
`;

export default CartModal;

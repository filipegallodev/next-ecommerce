import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { clearCart, closeCart } from "@/store/reducers/cart";
import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import CartItem from "./CartItem";
import CartItemContainer from "./CartItemContainer";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const CartModal = () => {
  const dispatch = useAppDispatch();
  const { empty, items, totalPrice } = useAppSelector(
    (state: IReduxState) => state.cart
  );
  const modalRef = useRef<HTMLDivElement>(null);

  function handleCloseModal() {
    if (!(modalRef && modalRef.current)) return;
    modalRef.current.classList.add("close");
    setTimeout(() => {
      if (!(modalRef && modalRef.current)) return;
      modalRef.current.classList.remove("close");
      dispatch(closeCart());
    }, 210);
  }

  return (
    <ModalContainer ref={modalRef}>
      <ModalControl>
        <CloseModal onClick={handleCloseModal}>
          <CloseRoundedIcon style={{ transform: "scale(1.2)" }} />
        </CloseModal>
        {!empty && (
          <ClearCart onClick={() => dispatch(clearCart())}>Clear All</ClearCart>
        )}
      </ModalControl>
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

const slideToRight = keyframes`
  from {
    transform: initial;
    opacity: initial;
  }
  to {
    transform: translateX(520px);
    opacity: 0;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 560px;
  background-color: #252525;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  animation: ${slideToLeft} 0.2s linear forwards;
  overflow-y: auto;
  z-index: 99;
  &.close {
    animation: ${slideToRight} 0.2s linear forwards;
  }
  @media (max-width: 580px) {
    width: 100%;
  }
`;

const ModalControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
`;

const CloseModal = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e00;
  color: #fff;
  padding: 10px;
  border-radius: 24px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #f55;
  }
`;

const ClearCart = styled.button`
  background-color: #f55;
  color: #fff;
  padding: 12px;
  font-size: 1.125rem;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #f88;
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

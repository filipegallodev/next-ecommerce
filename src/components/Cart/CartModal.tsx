import { useAppDispatch } from "@/hooks/useAppDispatch";
import { closeCart } from "@/store/reducers/cart";
import React from "react";
import styled, { keyframes } from "styled-components";

const CartModal = () => {
  const dispatch = useAppDispatch();

  return (
    <ModalContainer>
      <Button onClick={() => dispatch(closeCart())}>Close Cart</Button>
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
  width: 520px;
  background-color: #333;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  animation: ${slideToLeft} 0.2s linear forwards;
`;

const Button = styled.button`
  background-color: #f55;
  color: #fff;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`;

export default CartModal;

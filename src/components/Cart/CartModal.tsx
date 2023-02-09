import { useAppDispatch } from "@/hooks/useAppDispatch";
import { closeCart } from "@/store/reducers/cart";
import React from "react";
import styled from "styled-components";

const CartModal = () => {
  const dispatch = useAppDispatch();

  return (
    <ModalContainer>
      <Button onClick={() => dispatch(closeCart())}>Close Cart</Button>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 520px;
  background-color: #444;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
`;

const Button = styled.button`
  background-color: #f55;
  color: #fff;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`;

export default CartModal;

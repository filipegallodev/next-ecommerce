import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { closeCart } from "@/store/reducers/cart";
import React from "react";
import styled, { keyframes } from "styled-components";
import CartItem from "./CartItem";
import CartItemContainer from "./CartItemContainer";

const CartModal = () => {
  const dispatch = useAppDispatch();
  const { empty, items, totalPrice } = useAppSelector(
    (state: IReduxState) => state.cart
  );

  return (
    <ModalContainer>
      <Button onClick={() => dispatch(closeCart())}>Close Cart</Button>
      {!empty ? (
        <div>
          <CartItemContainer>
            {items.map((product) => (
              <CartItem key={product.id} {...product} />
            ))}
          </CartItemContainer>
          <p>{totalPrice}</p>
        </div>
      ) : (
        <p>Carrinho vazio.</p>
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
`;

const Button = styled.button`
  background-color: #f55;
  color: #fff;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`;

export default CartModal;

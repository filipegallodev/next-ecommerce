import { useAppDispatch } from "@/hooks/useAppDispatch";
import { openCart } from "@/store/reducers/cart";
import React from "react";
import styled from "styled-components";

const Cart = () => {
  const dispatch = useAppDispatch();

  return <Button onClick={() => dispatch(openCart())}>Cart</Button>;
};

const Button = styled.button`
  padding: 8px;
  background-color: #444;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
`;

export default Cart;

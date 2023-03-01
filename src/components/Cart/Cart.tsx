import { useAppDispatch } from "@/hooks/useAppDispatch";
import { openCart } from "@/store/reducers/cart";
import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Cart = () => {
  const dispatch = useAppDispatch();

  return (
    <CartButton onClick={() => dispatch(openCart())}>
      <ShoppingCartOutlinedIcon style={{ transform: "scale(1.2)" }} />
    </CartButton>
  );
};

const CartButton = styled.button`
  padding: 14px;
  background-color: #f5f5f5;
  color: #333;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #fff;
    color: #fb5;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  }
`;

export default Cart;

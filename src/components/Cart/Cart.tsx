import { useAppDispatch } from "@/hooks/useAppDispatch";
import { openCart } from "@/store/reducers/cart";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useAppSelector } from "@/hooks/useAppSelector";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state: IReduxState) => state.cart);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    if (items.length)
      setTotalItems(
        items.reduce((acc, item) => acc + (item.amount ? item.amount : 0), 0)
      );
    if (items.length === 0) setTotalItems(0);
  }, [items]);

  return (
    <div>
      <CartButton onClick={() => dispatch(openCart())}>
        <ShoppingCartOutlinedIcon style={{ transform: "scale(1.2)" }} />
        <CartItemAmount>{totalItems}</CartItemAmount>
      </CartButton>
    </div>
  );
};

const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 16px;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  color: #333;
  border-radius: 8px;
  position: fixed;
  right: 32px;
  top: 32px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #fff;
    color: #fb5;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 500px) {
    position: fixed;
    right: 10px;
    top: 10px;
    z-index: 9999999;
  }
`;

const CartItemAmount = styled.span`
  background-color: #333;
  box-shadow: 0px 0px 4px rgb(255, 187, 85, 0.5);
  border-radius: 6px;
  width: 28px;
  padding: 2px 0px;
  position: absolute;
  top: -8px;
  right: -8px;
  color: #fb5;
  font-size: 1rem;
  font-weight: 500;
  @media (max-width: 500px) {
    position: fixed;
    right: 3px;
    top: 3px;
    z-index: 9;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  }
`;

export default Cart;

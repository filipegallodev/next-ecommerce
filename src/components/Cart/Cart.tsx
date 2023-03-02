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
      </CartButton>
      <CartItemAmount>{totalItems}</CartItemAmount>
    </div>
  );
};

const CartButton = styled.button`
  padding: 14px 16px;
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

const CartItemAmount = styled.span`
  position: absolute;
  top: 33px;
  right: 35px;
  color: #f55;
  font-size: 1.125rem;
  font-weight: 700;
`;

export default Cart;

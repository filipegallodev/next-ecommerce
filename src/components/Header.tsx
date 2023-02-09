import { useAppSelector } from "@/hooks/useAppSelector";
import React from "react";
import styled from "styled-components";
import Cart from "./Cart/Cart";
import CartModal from "./Cart/CartModal";

const Header = () => {
  const { cart } = useAppSelector((state: IReduxState) => state);

  return (
    <HeaderContainer>
      <h1>Welcome to Next E-commerce!</h1>
      <Cart />
      {cart.open && <CartModal />}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 32px;
`;

export default Header;

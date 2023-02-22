import { useAppSelector } from "@/hooks/useAppSelector";
import React from "react";
import styled from "styled-components";
import Cart from "./Cart/Cart";
import CartModal from "./Cart/CartModal";

const Header = () => {
  const { cart } = useAppSelector((state: IReduxState) => state);

  return (
    <HeaderContainer>
      <MainTitle>Welcome to Next E-commerce!</MainTitle>
      <Cart />
      {cart.open && <CartModal />}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  background-color: #3747d6;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
`;

const MainTitle = styled.h1`
  color: #fff;
  font-size: 1.75rem;
`;

export default Header;

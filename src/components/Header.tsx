import { useAppSelector } from "@/hooks/useAppSelector";
import Image from "next/image";
import React from "react";
import styled, { keyframes } from "styled-components";
import Cart from "./Cart/Cart";
import CartModal from "./Cart/CartModal";
import NextIcon from "../../public/icons/next-icon.svg";
import { useRouter } from "next/router";

const Header = () => {
  const { cart } = useAppSelector((state: IReduxState) => state);
  const router = useRouter();

  return (
    <HeaderContainer>
      <Logo onClick={() => router.push("/")}>
        <Image
          src={NextIcon}
          alt="Next E-commerce Icon"
          style={{ transform: "scale(1.15)" }}
        />
        <MainTitle>Next E-commerce</MainTitle>
      </Logo>
      {!cart.open && <Cart />}
      {cart.open && <CartModal />}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  padding: 32px;
  background-color: #0c1c40;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  @media (max-width: 500px) {
    height: auto;
    flex-direction: column;
    padding: 64px 32px;
  }
`;

const slideToRight = keyframes`
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: initial;
    opacity: 1;
  }
`;

const Logo = styled.div`
  display: flex;
  gap: 1rem;
  animation: ${slideToRight} 0.5s linear forwards;
  cursor: pointer;
  @media (max-width: 500px) {
    align-items: center;
    justify-content: center;
  }
`;

const MainTitle = styled.h1`
  color: #fff;
  font-family: "Nunito", sans-serif;
  font-size: 2rem;
  letter-spacing: 0.05rem;
  @media (max-width: 500px) {
    font-size: 1.75rem;
  }
`;

export default Header;

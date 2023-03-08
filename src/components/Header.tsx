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
      <div>
        <nav>
          <NavMenu>
            <MenuItem
              className={router.pathname === "/" ? "active" : ""}
              onClick={() => router.push("/")}
            >
              Home
            </MenuItem>
            <MenuItem
              className={router.pathname === "/favorites" ? "active" : ""}
              onClick={() => router.push("/favorites")}
            >
              Favorites
            </MenuItem>
          </NavMenu>
        </nav>
      </div>
      {!cart.open ? <Cart /> : <div></div>}
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
  background-color: #1b4f72;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  @media (max-width: 730px) {
    height: auto;
    flex-direction: column;
    padding: 64px 32px 32px 32px;
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
  @media (max-width: 730px) {
    margin-bottom: 64px;
  }
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

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 32px;
`;

const MenuItem = styled.li`
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.1s;
  &.active {
    color: #fb5;
    font-weight: 500;
  }
  &:hover {
    color: #fb5;
  }
  @media (max-width: 500px) {
    font-size: 1.35rem;
  }
`;

export default Header;

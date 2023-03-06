import React, { ReactNode } from "react";
import styled from "styled-components";

const CartItemContainer = ({ children }: { children: ReactNode }) => {
  return <ItemContainer>{children}</ItemContainer>;
};

const ItemContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 32px;
  margin-bottom: 32px;
`;

export default CartItemContainer;

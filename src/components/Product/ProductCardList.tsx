import React, { ReactNode } from "react";
import styled from "styled-components";

const ProductCardList = ({ children }: { children: ReactNode }) => {
  return <List>{children}</List>;
};

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export default ProductCardList;

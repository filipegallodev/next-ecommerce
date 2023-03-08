import React, { ReactNode } from "react";
import styled from "styled-components";

const ProductSection = ({ children }: { children: ReactNode }) => {
  return <Section>{children}</Section>;
};

const Section = styled.section`
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 32px auto;
  background-color: #e2edf5;
  padding-bottom: 2rem;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  @media (max-width: 1600px) {
    margin: 32px;
  }
`;

export default ProductSection;

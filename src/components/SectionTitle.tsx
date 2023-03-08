import React, { ReactNode } from "react";
import styled from "styled-components";

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return <Title>{children}</Title>;
};

const Title = styled.h2`
  font-size: 1.75rem;
  margin: 2rem 1rem;
  font-weight: 500;
  &:before {
    content: "";
    margin-right: 0.5rem;
    width: 20px;
    height: 4px;
    padding: 2px;
    background-color: #f2bf24;
  }
`;

export default SectionTitle;

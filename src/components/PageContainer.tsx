import React, { ReactNode } from "react";
import styled from "styled-components";

const PageContainer = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default PageContainer;

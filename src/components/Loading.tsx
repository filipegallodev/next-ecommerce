import React from "react";
import styled from "styled-components";

const Loading = () => {
  return <LoadingContainer>Loading...</LoadingContainer>;
};

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
`;

export default Loading;

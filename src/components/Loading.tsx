import React from "react";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <LoadingContainer>
      <CircularProgress />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  width: 100%;
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Loading;

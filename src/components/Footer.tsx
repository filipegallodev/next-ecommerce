import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <footer>
      <FooterText>
        Developed by{" "}
        <NameLink
          href="https://filipegallo.dev/"
          target="_blank"
          rel="noreferrer"
        >
          Filipe
        </NameLink>
        .
      </FooterText>
    </footer>
  );
};

const FooterText = styled.p`
  margin-top: 64px;
  text-align: center;
  padding: 64px;
  background-color: #333;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #fff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
`;

const NameLink = styled.a`
  font-weight: 600;
  color: #ffd69a;
  transition: 0.2s;
  &:hover {
    color: #ffb23f;
  }
`;

export default Footer;

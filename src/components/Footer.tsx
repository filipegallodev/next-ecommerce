import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <footer>
      <FooterText>
        Desenvolvido por{" "}
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
  text-align: center;
  margin: 64px;
  font-size: 1.125rem;
  line-height: 1.5rem;
`;

const NameLink = styled.a`
  color: #fff;
  font-weight: 600;
  background-color: #111;
  padding: 2px;
  border-radius: 4px;
  transition: 0.3s;
  &:hover {
    color: #fb5;
  }
`;

export default Footer;

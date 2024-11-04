"use client";
import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 2rem;
  text-align: center;
  background: #222;
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© 2024 Your Brand. All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;

import React from "react";
import { theme } from "../../theme";
import { styled } from "styled-components";
import logo from "../../assets/images/logo.png";

export default function Logo({ className, onClick }) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <h1>crazze </h1>
      <img src={logo} alt="Burger" />
      <h1>burger</h1>
    </LogoStyled>
  );
}
const LogoStyled = styled.div`
  display: flex;
  color: white;
  align-items: center;

  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.P4};
    line-height: 1em;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }
  img {
    object-fit: contain;
    object-position: center;
    width: 60px;
    height: 80px;
    margin: 0 5px;
  }
`;

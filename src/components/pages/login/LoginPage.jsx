import { useState } from "react";
import LoginForm from "./LoginForm";
import bg from "../../../assets/images/burgerbackground.jpg";
import { styled } from "styled-components";
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
  return (
    <LoginPageStyled className="container">
      <Logo className={"logo-login-page"} />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    background: url(${bg}) center center #000000b2;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    background-size: cover;
    position: absolute;
    z-index: -1;
    inset: 0px;
  }
  .logo-login-page {
    transform: scale(2.5);
  }
`;

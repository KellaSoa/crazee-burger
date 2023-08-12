import { useState } from "react";
import LoginForm from "./LoginForm";
import bg from "../../../assets/images/burgerbackground.jpg";
import { styled } from "styled-components";
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
  return (
    <LoginPageStyled className="container">
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-blend-mode: darken;
  background-size: cover;
`;

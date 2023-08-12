import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

export default function LoginForm() {
  const [userName, setuserName] = useState("");
  const navigate = useNavigate();
  const handeSubmit = (event) => {
    event.preventDefault();
    setuserName("");
    navigate(`order/${userName}`);
  };

  const handeChange = (event) => {
    console.log(event.target.value);
    setuserName(event.target.value);
  };
  return (
    <LoginFormStyled action="action" onSubmit={handeSubmit}>
      <h1>bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez vous</h2>
      <TextInput
        value={userName}
        onChange={handeChange}
        required
        placeholder={"Entrez votre prénom"}
        Icon={<BsPersonCircle className="icon" />}
      />
      <PrimaryButton
        label={"Accéder à mon espace"}
        Icon={<IoChevronForward className="iconForward" />}
      />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  letter-spacing: 1.5px;
  font-family: "Amatic SC", cursive;

  h1,
  h2 {
    color: ${theme.colors.white};
    text-transform: capitalize;
  }
  hr {
    border: 1.5px solid ${theme.colors.primary};
    margin-bottom: 40px;
  }
`;

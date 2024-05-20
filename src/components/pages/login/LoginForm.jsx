import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import Button from "../../reusable-ui/Button";
import { authenticateUser } from "../../../api/user.jsx";

export default function LoginForm() {
  const [userName, setUserName] = useState("Kella");
  const navigate = useNavigate();

  const handeSubmit =  (event) => {
    event.preventDefault();
    authenticateUser(userName)
    setUserName("");
    navigate(`order/${userName}`);
  };

  const handeChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <LoginFormStyled action="action" onSubmit={handeSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez vous</h2>
      <TextInput
        value={userName}
        onChange={handeChange}
        required
        placeholder={"Entrez votre prénom"}
        Icon={<BsPersonCircle className="icon" />}
        version="normal"
      />
      <Button
        label={"Accéder à mon espace"}
        Icon={<IoChevronForward className="iconForward" />}
        version= "primary"
      />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  letter-spacing: 1.5px;
  text-align: center;
  font-family: "Amatic SC", cursive;
  min-width: 400px;
  max-width: 500px;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};

  h1,
  h2 {
    color: ${theme.colors.white};
    text-transform: capitalize;
  }
  hr {
    border: 1.5px solid ${theme.colors.primary};
    margin-bottom: 40px;
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    margin-right: 8px;
  } 
`;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import Button from "../../reusable-ui/Button";
import { authenticateUser } from "../../../api/user.jsx";
import Welcome from "./Welcome.jsx";

export default function LoginForm() {
  const [userName, setUserName] = useState("Kella");
  const navigate = useNavigate();

  const handeSubmit = async (event) => {
    event.preventDefault();
    //const userReceived = await authenticateUser(userName);

    setUserName("");
    navigate(`order/${userName}`);
  };

  const handeChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <LoginFormStyled action="action" onSubmit={handeSubmit}>
      <Welcome />
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
        version="primary"
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

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    margin-right: 8px;
  }
`;

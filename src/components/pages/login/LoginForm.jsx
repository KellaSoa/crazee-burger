import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";

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
      <div className="input-icon">
        <BsPersonCircle className="icon" />
        <input
          type="text"
          value={userName}
          onChange={handeChange}
          required
          placeholder="Entrez votre prénom"
        />
      </div>
      <button className="btn-icon">
        <span>Accéder à mon espace</span>
        <IoChevronForward className="iconForward" />
      </button>
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
  .input-icon {
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
      font-size: 15px;
      margin-right: 8px;
      color: #93a2b1;
    }

    input {
      border: none;
      font-size: 15px;
      width: 100%;
      padding: 10x;
    }
    &::placeholder {
      background: white;
      color: lightgray;
    }
  }
  .btn-icon {
    font-family: initial;
    color: white;
    background-color: ${theme.colors.primary};

    &:active {
      color: white;
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    }
    width: 100%;
    .iconForward {
    }
  }
`;

import styled from "styled-components";
import { theme } from "../../../theme";

export default function Welcome() {
  return (
    <WelcomeStyled>
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez vous</h2>
    </WelcomeStyled>
  )
}

const WelcomeStyled  =styled.div`
h1,
  h2 {
    color: ${theme.colors.white};
    text-transform: capitalize;
  }
  hr {
    border: 1.5px solid ${theme.colors.primary};
    margin-bottom: 40px;
  }`;
import styled from "styled-components";
import { theme } from "../../../theme";

export default function Main() {
  return <MainStyled></MainStyled>;
}

const MainStyled = styled.div`
  width: 100%;
  height: 100vh;
  background: #f5f5f7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;

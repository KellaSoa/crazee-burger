import styled from "styled-components";
import Menu from "./Menu";
import { theme } from "../../../../theme";

export default function Main() {
  return (
    <MainStyled>
      <div>Left</div>
      <Menu />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: #f5f5f7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  justify-items: center;
  justify-content: space-between;
  padding: 50px 50px 150px;
  grid-row-gap: 60px;
`;

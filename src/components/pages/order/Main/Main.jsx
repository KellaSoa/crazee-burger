import styled from "styled-components";
import Menu from "./Menu";
import { theme } from "../../../../theme";
import Tabs from "../Tabs/Tabs";

export default function Main() {
  return (
    <MainStyled>
      <div className="main">
        <div>Left</div>
        <Menu />
      </div>
      <Tabs />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: #f5f5f7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  .main {
    display: flex;
    justify-items: center;
    justify-content: space-between;
    padding: 50px 50px 150px;
    grid-row-gap: 60px;
  }
`;

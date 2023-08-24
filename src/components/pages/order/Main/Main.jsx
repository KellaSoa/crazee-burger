import styled from "styled-components";
import Menu from "./Menu";
import { theme } from "../../../../theme";
import Admin from '../../../admin/Admin'

export default function Main() {
  return (
    <MainStyled>
        <div className="basket">Left</div>
        <div className="menu-and-admin">
          <Menu />
          <Admin />
        </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: #f5f5f7;
  width:100%;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border: 2px solid red;
  display: grid;
  grid-template-columns: 25% 1fr;
  justify-items: center;    
  height: calc(95vh-10vh);
  .basket{
    background-color: pink;
  }
  .menu-and-admin{
    position: relative;
    width: 100%;
    overflow-y: hidden;    
  }
  
`;

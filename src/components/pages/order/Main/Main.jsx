import styled from "styled-components"
import { theme } from "../../../../theme"
import Menu from "./Menu"
import { useContext } from "react"
import Admin from "../Admin/Admin"
import OrderContext from "../../../context/OrderContext"

export default function Main() {

  const {isModeAdmin, setIsModeAdmin} = useContext(OrderContext)

  return (
    <MainStyled className="main">
      {/* <div className="basket">Basket</div>  */}
      <div className="menu-and-admin">
          <Menu />
          {/* {isModeAdmin ? <Admin />: null} */}
          {isModeAdmin && <Admin />} 
        </div>
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns:1fr;

  overflow-y: scroll;
  .basket {
    background: pink;
  }
  .menu-and-admin{
    position: relative;
    overflow-y: hidden;    
    display: grid;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  }
`

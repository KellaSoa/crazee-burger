import styled from "styled-components"
import { theme } from "../../../../theme"
import Basket from "./Basket"
import MainRigthSide from "./MainRigthSide"

export default function Main() {

  return (
    <MainStyled className="main">
      <Basket/> 
      <MainRigthSide/>
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.strong};

  display: grid;
  grid-template-columns:25% 1fr;

  overflow-y: scroll;
   
`

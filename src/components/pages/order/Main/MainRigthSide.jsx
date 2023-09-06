import React, { useContext } from 'react'
import Menu from './Menu/Menu'
import Admin from '../Admin/Admin'
import { styled } from 'styled-components';
import OrderContext from '../../../context/OrderContext';
import { theme } from '../../../../theme';

export default function MainRigthSide() {

    const {isModeAdmin} = useContext(OrderContext)
  return (
    <MainRigthSideStyled className="menu-and-admin">
        <Menu />
          {/* {isModeAdmin ? <Admin />: null} */}
          {isModeAdmin && <Admin />} 
    </MainRigthSideStyled>
  )
}

const MainRigthSideStyled = styled.div`
    position: relative;
    overflow-y: hidden;    
    display: grid;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  
`;

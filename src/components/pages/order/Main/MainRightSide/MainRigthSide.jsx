import React, { useContext } from 'react'
import Menu from './Menu/Menu'
import Admin from '../../Admin/Admin'
import { styled } from 'styled-components';
import OrderContext from '../../../../../context/OrderContext';
import { theme } from '../../../../../theme';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { adminAnimation } from '../../../../../theme/animations';

export default function MainRigthSide() {

    const {isModeAdmin} = useContext(OrderContext)
  return (
    <MainRigthSideStyled className="menu-and-admin">
        <Menu />
        {isModeAdmin && (
        <TransitionGroup>
          <CSSTransition apper classNames={"admin"} timeout={5000}>
            <Admin />
          </CSSTransition>
        </TransitionGroup>
        )} 
    </MainRigthSideStyled>
  )
}

const MainRigthSideStyled = styled.div`
    position: relative;
    overflow-y: hidden;    
    display: grid;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};

    ${adminAnimation}
`;

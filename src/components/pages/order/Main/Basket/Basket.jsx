import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';

export default function Basket() {
  return (
    <BasketStyled>
       <div className='header'>Head</div>
       <div className='container'>Container</div>
       <div className='footer'>footer</div>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
display: flex;
flex-direction: column;
.header{
    height: 70px;
    background-color: ${theme.colors.background_dark};
}
.container{
    box-shadow: ${theme.shadows.basket};
    flex: 1;
    background-color: ${theme.colors.white};
  }
  .footer{
    height: 70px;
    background-color: ${theme.colors.background_dark};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
  }
`;
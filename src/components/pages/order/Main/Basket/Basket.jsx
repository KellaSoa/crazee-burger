import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';

import Total from './Total';
import { formatPrice } from '../../../../../utils/maths';
import Footer from './Footer';
import BasketContainer from './BasketContainer';

export default function Basket() {
  return (
    <BasketStyled>
       <Total amountTotal={formatPrice(0)}/>
       <BasketContainer/>
       <Footer/> 
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
display: flex;
flex-direction: column;
font-family: "Amatic SC",cursive;   

`;
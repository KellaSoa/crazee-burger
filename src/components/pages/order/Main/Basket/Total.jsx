import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import Header from './Header';

export default function Total({amountTotal}) {
  return (
    <Header>
        <TotalStyled>
            <span className='title'>Total</span>
            <span className='amount'>{amountTotal}</span>
        </TotalStyled>
    </Header>
  )
}

const TotalStyled = styled.div`
height: 100%;
color: ${theme.colors.primary};
font-size: ${theme.fonts.size.P4};
 
font-weight: ${theme.fonts.weights.bold};

display: flex;
justify-content:space-between ;
align-items:center;
letter-spacing: 2px;
`;

import React from 'react'
import Header from './Header';
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';


export default function Footer() {
  return (
    <Header>
        <FooterStyled><span>Codé avec coeur et React.js</span></FooterStyled>
    </Header>
  )
}

const FooterStyled = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P2};
    font-weight: ${theme.fonts.weights.bold};
  
`;
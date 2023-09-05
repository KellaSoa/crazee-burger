import React from 'react'
import{HiCursorClick} from "react-icons/hi"
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';


export default function HintMessage() {
  return (
    <HintMessageStyled>
        <span className="title">Cliquer sur un produit pour le modifier</span>
        <HiCursorClick/>
    </HintMessageStyled>
  )
}

const HintMessageStyled = styled.div`
display: flex;
align-items: center;
color: ${theme.colors.greyBlue};
font-family: "Amatic SC",cursive;
  font-size: ${theme.fonts.size.P3};
position: relative;
top: 20px;
.title{
  color: ${theme.colors.greyBlue};
  font-weight: ${theme.fonts.weights.semiBold};
  margin-right: 10px;
}  
  
`;
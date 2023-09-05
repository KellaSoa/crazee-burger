import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';

export default function EditInfoMessage() {
  return (
    <EditInfoMessageStyled>
      Cliquer sur un produit du menu pour le modifier 
      <span> en temp réel</span>
    </EditInfoMessageStyled>
  )
}

const EditInfoMessageStyled = styled.div`
  color: ${theme.colors.primary};
  span{
    padding-left: 5px;
    text-decoration: underline;
  }
  
`;
import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../../theme/index';

export default function EmptyMenuClient() {
  return (
    <EmptyMenuClientStyled>
      <span className="title">Le menu est vide</span>
      <span className="description">Cliquez ci-dessous pour le réinitialiser</span>
    </EmptyMenuClientStyled>
  )
}

const EmptyMenuClientStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
justify-items: center;
text-align: center;

.title,
.description{
  font-family: "Amatic SC",cursive;
  font-size: ${theme.fonts.size.P4};
  color: ${theme.colors.greyBlue};
}
.title{
  font-weight: ${theme.fonts.weights.semiBold};
}
.description{ 
  margin-top: 20px;
}
`;
import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyBasket() {
  return (
    <EmptyBasketStyled>
      <span>Votre commande est vide.</span>
    </EmptyBasketStyled>
  );
}

const EmptyBasketStyled = styled.div`
  box-shadow: ${theme.shadows.basket};
  flex: 1;
  background-color: ${theme.colors.white};
  height: 100%;
  color: ${theme.colors.greyDark};
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};

  display: flex;
  letter-spacing: 2px;
  align-items: center;
  justify-content: center;
`;

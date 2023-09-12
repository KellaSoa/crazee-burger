import React, { useContext } from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../theme";

import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import OrderContext from "../../../../context/OrderContext";
import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";

export default function Basket() {
  const { basket } = useContext(OrderContext);
  const isBasket = basket.length === 0;

  return (
    <BasketStyled>
      <Total amountTotal={formatPrice(0)} />
      {isBasket ? <EmptyBasket /> : <BasketProducts basket={basket} />}

      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  font-family: "Amatic SC", cursive;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 85vh;

  .head {
    position: sticky;
    top: 0;
  }

  .footer {
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    position: sticky;
    bottom: 0;
  }
`;

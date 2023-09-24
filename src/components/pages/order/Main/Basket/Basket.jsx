import React, { useContext } from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../theme";

import Total from "./Total";
import Footer from "./Footer";
import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";
import { isEmpty } from "../../../../../utils/collection";
import OrderContext from "../../../../context/OrderContext";

export default function Basket() {
  const { basket } = useContext(OrderContext);
  const isBasketEmpty = isEmpty(basket);

  return (
    <BasketStyled>
      <Total />
      {isBasketEmpty ? <EmptyBasket /> : <BasketProducts />}

      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  font-family: ${theme.fonts.family.stylish};
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

import React, { useContext } from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../theme";

import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import OrderContext from "../../../../context/OrderContext";
import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";
import { isEmpty } from "../../../../../utils/collection";

export default function Basket() {
  const { basket, isModeAdmin, handleDeleteProductBasket } =
    useContext(OrderContext);

  const isBasketEmpty = isEmpty(basket);
  const sumToPay = basket.reduce((total, basketProduct) => {
    if (isNaN(basketProduct.price)) return total;

    total += basketProduct.price * basketProduct.quantity;
    return total;
  }, 0);

  return (
    <BasketStyled>
      <Total amountTotal={formatPrice(sumToPay)} />
      {isBasketEmpty ? (
        <EmptyBasket />
      ) : (
        <BasketProducts
          basket={basket}
          isModeAdmin={isModeAdmin}
          handleDeleteProductBasket={handleDeleteProductBasket}
        />
      )}

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

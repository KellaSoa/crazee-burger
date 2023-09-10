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
  display: flex;
  flex-direction: column;
  font-family: "Amatic SC", cursive;
`;

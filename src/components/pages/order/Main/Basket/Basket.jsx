import React, { useContext } from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../theme";

import Total from "./Total";
import Footer from "./Footer";
import Body from "./Body";

export default function Basket() {

  //if(!menu) return <span>Chargement ... </span>//because basket need info (price, image ...  in basket)
  return (
    <BasketStyled>
      <Total />
      <Body/>
      {/*{isEmpty(basket) ? <EmptyBasket isLoading={menu === undefined} /> : <BasketProducts />}*/}
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

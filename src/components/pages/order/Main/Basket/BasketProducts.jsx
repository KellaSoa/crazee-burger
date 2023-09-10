import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketProducts() {
  return (
    <BasketProductsStled>
      <span>Votre commande est vide.</span>
    </BasketProductsStled>
  );
}

const BasketProductsStled = styled.div``;

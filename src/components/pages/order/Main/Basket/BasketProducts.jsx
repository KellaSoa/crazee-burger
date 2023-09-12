import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketProducts({ basket }) {
  return (
    <BasketProductsStled>
      {basket.map(({ id, title, imageSource, price, quantity }) => {
        return (
          <BasketCard
            key={id}
            title={title}
            imageSource={imageSource}
            quantity={quantity}
            price={price}
          />
        );
      })}
      <span>Votre commande est vide.</span>
    </BasketProductsStled>
  );
}

const BasketProductsStled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .basket-card {
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    :first-child {
      margin-top: 20px;
    }
    :last-child {
      margin-bottom: 20px;
    }
  }
`;

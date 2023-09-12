import React from "react";
import { styled } from "styled-components";
import BasketCard from "./BasketCard";

export default function BasketProducts({ basket }) {
  return (
    <BasketProductsStled>
      {basket.map((basketProduct) => {
        return (
          <div className="basket-card">
            <BasketCard key={basketProduct.id} {...basketProduct} />
          </div>
        );
      })}
    </BasketProductsStled>
  );
}

const BasketProductsStled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;

  &:hover {
    scrollbar-color: initial;
  }

  .basket-card {
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    :first-child {
      /* margin-top: 20px; */
    }
    :last-child {
      /* margin-bottom: 20px; */
    }
  }
`;

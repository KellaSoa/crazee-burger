import React from "react";
import { styled } from "styled-components";
import BasketCard from "./BasketCard";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";

export default function BasketProducts({ basket }) {
  return (
    <BasketProductsStled>
      {basket.map((basketProduct) => {
        return (
          <div className="basket-card" key={basketProduct.id}>
            <BasketCard
              {...basketProduct}
              imageSource={
                basketProduct.imageSource
                  ? basketProduct.imageSource
                  : IMAGE_COMING_SOON
              }
            />
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

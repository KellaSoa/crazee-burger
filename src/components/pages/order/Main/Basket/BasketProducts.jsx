import React, { useContext } from "react";
import { styled } from "styled-components";
import BasketCard from "./BasketCard";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";
import {
  checkProductSelected,
  findInArray,
} from "../../../../../utils/collection";
import OrderContext from "../../../../context/OrderContext";

export default function BasketProducts() {
  const {
    basket,
    isModeAdmin,
    handleDeleteProductBasket,
    menu,
    handleProductSelected,
    productSelected,
  } = useContext(OrderContext);

  const handleOnDelete = (event, idProduct) => {
    event.stopPropagation();
    handleDeleteProductBasket(idProduct);
  };

  return (
    <BasketProductsStled>
      {basket.map((basketProduct) => {
        const menuProduct = findInArray(basketProduct.id, menu);
        return (
          <div className="basket-card" key={basketProduct.id}>
            <BasketCard
              {...menuProduct}
              imageSource={
                menuProduct.imageSource
                  ? menuProduct.imageSource
                  : IMAGE_COMING_SOON
              }
              quantity={basketProduct.quantity}
              isClickable={isModeAdmin}
              onDelete={(event) => handleOnDelete(event, menuProduct.id)}
              onClick={
                isModeAdmin
                  ? () => handleProductSelected(basketProduct.id)
                  : null
              }
              isSelected={checkProductSelected(
                basketProduct.id,
                productSelected
              )}
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

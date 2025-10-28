import React, { useContext, useRef } from "react";
import { styled } from "styled-components";
import BasketCard from "./BasketCard";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";
import {
  checkProductSelected,
  findInArray,
} from "../../../../../utils/collection";
import OrderContext from "../../../../../context/OrderContext";
import {TransitionGroup,CSSTransition} from "react-transition-group"
import { basketAnimation } from "../../../../../theme/animations";

import { formatPrice } from "../../../../../utils/maths";
import { convertStringToBoolean } from "../../../../../utils/string";
import { BASKET_MESSAGE } from "../../../../../enums/product";
import Sticker from "../../../../reusable-ui/Sticker";

export default function BasketProducts() {
  const {
    username,
    basket,
    isModeAdmin,
    handleDeleteProductBasket,
    menu,
    handleProductSelected,
    productSelected,
  } = useContext(OrderContext);

  const nodeRef = useRef(null);

  const handleOnDelete = (event, idProduct) => {
    event.stopPropagation();
    handleDeleteProductBasket(idProduct, username);
  };

  return (
    <BasketProductsStled>
      <TransitionGroup>
        {basket.map((basketProduct) => {
          const menuProduct = findInArray(basketProduct.id, menu);
          return (
            <CSSTransition 
              appear={true}
              classNames={"animation-basket"}
              key={basketProduct.id}
              timeout={{enter:500,exit:500}}
              nodeRef={nodeRef}
            >
              <div ref={nodeRef} className="card-container">
                {convertStringToBoolean(menuProduct.isPublicised) && <Sticker className="badge-new"/>}
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
                  className={"card"}
                  price={convertStringToBoolean(menuProduct.isAvailable) ? formatPrice(menuProduct.price) : BASKET_MESSAGE.NOT_AVAILABLE}

                />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
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
 
  .card-container {
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    position: relative;
    :first-child {
      /* margin-top: 20px; */
    }
    :last-child {

    }
    .badge-new{
      position: absolute;
      z-index: 2;
      bottom:10%;
      left: 21%;
      transform: translateY(-21%);
      transform: translateX(-5%);
    }
    
  }
  ${basketAnimation}
`;

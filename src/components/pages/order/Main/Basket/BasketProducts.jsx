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
              classNames={"transition"}
              key={basketProduct.id}
              timeout={{enter:500,exit:500}}
              nodeRef={nodeRef}
            >
              <div ref={nodeRef} className="basket-card" key={basketProduct.id}>
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
 
  .transition-enter{
    transform:translateX(100px);
    opacity: 0%;
  }
  .transition-enter-active{
    transition: 0.5s;
    transform: translateX(0px);
    opacity: 100%;

  }
 
  .transition-exit{
    transform: translateX(0px);
    opacity: 100%;
  }
  .transition-exit-active{
    transform:translateX(-100px);
    opacity: 0%;
    transition: 0.5s;
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

import { fakeBasket } from "../fakeData/fakeBasket";
import { useState } from "react";
import { deepClone, filter, findInArray, findIndex } from "../utils/collection";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (productToAdd) => {
    //copy state
    const basketCopy = deepClone(basket);

    //check product click not in basket
    const productFoundInBasket =
      findInArray(productToAdd.id, basketCopy) === undefined;
    //manip state

    if (productFoundInBasket) {
      //last in first of the list
      createProductInBasket(productToAdd, basketCopy);
      return;
    }
    //check if id product in basket
    incrementQuantityProductInBasket(productToAdd, basketCopy);
  };
  const createProductInBasket = (productToAdd, basketCopy) => {
    const newProductBasket = {
      ...productToAdd,
      quantity: 1,
    };
    const updateBasket = [newProductBasket, ...basketCopy];
    setBasket(updateBasket);
  };
  const incrementQuantityProductInBasket = (productToAdd, basketCopy) => {
    const indexOfCardBasketToIncrement = findIndex(productToAdd.id, basketCopy);
    //increment value quantity
    basketCopy[indexOfCardBasketToIncrement].quantity += 1;
    //update state
    setBasket(basketCopy);
  };

  const handleDeleteProductBasket = (idProduct) => {
    //copy state
    const basketCopy = deepClone(basket);
    //update state
    const basketUpdated = basketCopy.filter(
      (product) => product.id !== idProduct
    );
    //const basketUpdated = filter(idProduct, basketCopy);
    setBasket(basketUpdated);
  };

  return { basket, handleAddToBasket, handleDeleteProductBasket };
};

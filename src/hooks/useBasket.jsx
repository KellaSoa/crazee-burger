import { fakeBasket } from "../fakeData/fakeBasket";
import { useState } from "react";
import { deepClone, filter, findInArray, findIndex } from "../utils/collection";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (idProduct) => {
    //copy state
    const basketCopy = deepClone(basket);
    const productAlreadyInBasket = findInArray(idProduct, basketCopy);

    if (productAlreadyInBasket) {
      incrementQuantityProductInBasket(idProduct, basketCopy);
      return;
    }
    createProductInBasket(idProduct, basketCopy);
  };

  const createProductInBasket = (idProduct, basketCopy) => {
    //manip state
    const newProduct = { id: idProduct, quantity: 1 };
    const newProductInBasket = [newProduct, ...basketCopy];

    //update state
    setBasket(newProductInBasket);
  };
  const incrementQuantityProductInBasket = (productId, basketCopy) => {
    const indexOfCardBasketToIncrement = findIndex(productId, basketCopy);
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

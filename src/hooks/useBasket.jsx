import { fakeBasket } from "../fakeData/fakeBasket";
import { useState } from "react";
import { deepClone, filter, findInArray, findIndex } from "../utils/collection";
import { setLocalStorage } from "../utils/window";

export const useBasket = () => {
  const [basket, setBasket] = useState([]);

  const handleAddToBasket = (idProduct,username) => {
    //copy state
    const basketCopy = deepClone(basket);
    const productAlreadyInBasket = findInArray(idProduct, basketCopy);

    if (productAlreadyInBasket) {
      incrementQuantityProductInBasket(idProduct, basketCopy,username);
      return;
    }
    createProductInBasket(idProduct, basketCopy,username);
  };

  const createProductInBasket = (idProduct, basketCopy,username) => {
    //manip state
    const newProduct = { id: idProduct, quantity: 1 };
    const newProductInBasket = [newProduct, ...basketCopy];

    //update state
    setBasket(newProductInBasket);
    setLocalStorage(username,newProductInBasket)
  };
  const incrementQuantityProductInBasket = (productId, basketCopy,username) => { 
    const indexOfCardBasketToIncrement = findIndex(productId, basketCopy);
    //increment value quantity
    basketCopy[indexOfCardBasketToIncrement].quantity += 1;
    //update state
    setBasket(basketCopy);
    setLocalStorage(username,basketCopy)
  };

  const handleDeleteProductBasket = (idProduct, username) => {
    //copy state
    const basketCopy = deepClone(basket   );
    //update state
    const basketUpdated = basketCopy.filter(
      (product) => product.id !== idProduct
    );
    //const basketUpdated = filter(idProduct, basketCopy);
    setBasket(basketUpdated);
    setLocalStorage(username,basketUpdated)
  };

  return { basket,setBasket, handleAddToBasket, handleDeleteProductBasket };
};

import { fakeBasket } from "../fakeData/fakeBasket";
import { useState } from "react";
import { deepClone, findInArray } from "../utils/collection";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (productToAdd) => {
    //copy state
    const basketCopy = deepClone(basket);

    //check product click not in basket
    const isProductAlredyInBasket =
      findInArray(productToAdd.id, basketCopy) === undefined;
    //manip state
    if (isProductAlredyInBasket) {
      //last in first of the list
      const newProductBasket = {
        ...productToAdd,
        quantity: 1,
      };
      const updateBasket = [newProductBasket, ...basketCopy];
      setBasket(updateBasket);
    }
    //update state
  };

  return { basket, handleAddToBasket };
};

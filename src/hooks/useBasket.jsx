import { fakeBasket } from "../fakeData/fakeBasket";
import { useState } from "react";

export const useBasket = () => {
  const [basket, setBasBet] = useState(fakeBasket.SMALL);

  return { basket };
};

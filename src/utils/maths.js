import { findInArray } from "./collection";

export function formatPrice(priceToFormat) {
  let price = priceToFormat;

  // @TODO: perhaps change this to if(!price) return 0
  if (!price) return "0,00 €";
  price = replaceFrenchCommaWithDot(price);

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
  return formattedPrice;
}

export function replaceFrenchCommaWithDot(price) {
  if (typeof price === "string") price = parseFloat(price.replace(",", "."));
  return price;
}

export const totalSumToPay = (basket, menu) => {
  return basket.reduce((total, basketProduct) => {
    const menuProduct = findInArray(basketProduct.id, menu);
    total += menuProduct.price * basketProduct.quantity;
    console.log(total);
    return total;
  }, 0);
};

export const deepClone = (collection) => JSON.parse(JSON.stringify(collection));

export const findInArray = (id, array) => {
  return array.find((item) => item.id === id);
};

export const findIndex = (id, array) => {
  return array.findIndex((item) => item.id === id);
};

export const filter = (idPoductToRemove, array) => {
  array.filter((item) => item.id !== idPoductToRemove);
};

export const isEmpty = (array) => {
  return !array || array.length === 0;
};

export const checkProductSelected = (id, productSelected) => {
  return id === productSelected.id;
};

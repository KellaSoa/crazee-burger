export const deepClone = (collection) => JSON.parse(JSON.stringify(collection));

export const findInArray = (id, array) => {
  return array.find((item) => item.id === id);
};

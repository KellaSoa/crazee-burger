import { createContext } from "react";

export default createContext({
  userName: "",
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {}, 
  isAddSelected: false,
  setIsAddSelected: () => {}, 
  isEditSelected: false,
  setIsEditSelected: () => {}, 
  tabActive: "",
  setTabActive: () => {},
  tabCurrentName: "",
  setTabCurrentName: () => {},

  menu: [],
  handleAdd: () => {},
  handleDelete: () => {},
  handleReset: () => {},
  handleEdit: () => {},

  newProduct: {},
  setNewProduct: () => {},
  productSelected: {},
  setProductSelected: () => {},

  titleEditRef: {},

  basket: [],

  handleAddToBasket: () => {},
  handleDeleteProductBasket: () => {},

  handleProductSelected: () => {},
});

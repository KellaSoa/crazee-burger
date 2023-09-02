import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import styled from "styled-components";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import OrderContext from "../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { deepClone } from "../../../utils/collection";

export default function OrderPage() {
  //state
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [tabCurrentName, setTabCurrentName] = useState("add");
  const [tabActive, setTabActive] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);

  //comportement
  const handleAdd = (newProduct) => {
    const menuCopy = deepClone(menu);
    const menuUpdate = [newProduct, ...menuCopy];
    setMenu(menuUpdate);
  };
  const handleDelete = (idProduct) => {
    //copy state
    const menuCopy = deepClone(menu);
    //update state
    const menuUpdated = menuCopy.filter((product) => product.id !== idProduct);
    setMenu(menuUpdated);
  };
  const handleReset = () => {
    setMenu(fakeMenu.LARGE);
  };

  const handleEdit = (productBeingSelected) => {
    //copy state deep clone
    const menuCopy = deepClone(menu);
    //get index product to edit
    const indexToEditProduct = menu.findIndex(
      (product) => product.id === productBeingSelected.id
    );
    //update state
    menuCopy[indexToEditProduct] = productBeingSelected;
    setMenu(menuCopy);
  };

  const orderContextValue = {
    isCollapsed,
    setIsCollapsed,
    isModeAdmin,
    setIsModeAdmin,
    tabCurrentName,
    setTabCurrentName,
    tabActive,
    setTabActive,

    menu,
    handleAdd,
    handleDelete,
    handleReset,
    handleEdit,

    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
  };

  //render
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  padding: 25px 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    width: 1400px;
  }
`;

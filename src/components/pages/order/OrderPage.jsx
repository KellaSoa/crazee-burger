import React, { useRef, useState } from "react";
import Navbar from "./Navbar/Navbar";
import styled from "styled-components";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import OrderContext from "../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";

export default function OrderPage() {
  //state
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [tabCurrentName, setTabCurrentName] = useState("add");
  const [tabActive, setTabActive] = useState("add");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  const { menu, setMenu, handleAdd, handleDelete, handleEdit, handleReset } =
    useMenu();
  const { basket, handleAddToBasket, handleDeleteProductBasket } = useBasket();

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

    titleEditRef,

    basket,
    handleAddToBasket,
    handleDeleteProductBasket,
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

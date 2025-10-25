import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar/Navbar";
import styled from "styled-components";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";
import { findInArray } from "../../../utils/collection";
import { getUser } from "../../../api/user";
import OrderContext from "../../../context/OrderContext";
import { useParams } from "react-router-dom";
import { initialiseUserSession } from "./initialiseUserSession";

export default function OrderPage() {
  //state    
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [tabCurrentName, setTabCurrentName] = useState("add");
  const [tabActive, setTabActive] = useState("add");
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  const { menu, setMenu, handleAdd, handleDelete, handleEdit, handleReset } =
    useMenu();
  const { basket,setBasket, handleAddToBasket, handleDeleteProductBasket } = useBasket();
  const { username } = useParams();


  const handleProductSelected = async (idProductSelected) => {
    //find product selected
    const productClicked = findInArray(idProductSelected, menu);
    await setIsCollapsed(true);
    await setTabCurrentName("edit");
    await setTabActive("edit");
    await setProductSelected(productClicked);
    //onFucus in titleForm
    titleEditRef.current.focus();
  };

  
  useEffect(()=>{
    initialiseUserSession(username,setMenu,setBasket)
  },[])
    
 
  const orderContextValue = {
    username,

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

    handleProductSelected,
  };
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

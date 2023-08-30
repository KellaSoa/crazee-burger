import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import styled from "styled-components";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import OrderContext from "../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu"

export default function OrderPage() {
  //state
  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [tabCurrentName, setTabCurrentName] = useState("add")
  const [tabActive, setTabActive] = useState("")
  const [isCollapsed,setIsCollapsed] = useState(false)

  const [menu,setMenu] = useState(fakeMenu.LARGE)

  //comportement
  const handleAdd = (newProduct) => {   
    const menuCopy = [...menu];
    const menuUpdate = [newProduct, ...menuCopy]
    setMenu(menuUpdate)
  }
  const handleDelete = (idProduct) => {   
    //copy state
    const menuCopy = [...menu]
    //update state
    const menuUpdated = menuCopy.filter((product) =>product.id !== idProduct)
    setMenu(menuUpdated)
  }

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
    handleDelete
  }
  
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

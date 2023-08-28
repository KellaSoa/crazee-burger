import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import styled from "styled-components";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import IsModeAdminContext from "../../context/IsModeAdminContext";

export default function OrderPage() {
  //state
  const [isModeAdmin, setIsModeAdmin] = useState(false)

  const isModeAdminContextValue = {
    isModeAdmin, setIsModeAdmin
  }

  //comportement
  //return
  return (
    <IsModeAdminContext.Provider value={isModeAdminContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </IsModeAdminContext.Provider>

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

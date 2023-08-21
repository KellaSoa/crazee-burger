import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main";

export default function OrderPage() {
  //state

  //comportement
  //return
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar />
        <Main />
      </div>
    </OrderPageStyled>
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

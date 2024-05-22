import React, { useContext } from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import Header from "./Header";
import { formatPrice, totalSumToPay } from "../../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";
import CasinoEffect from "../../../../reusable-ui/CasinoEffect";

export default function Total() {
  const { basket, menu } = useContext(OrderContext);

  const sumToPay = totalSumToPay(basket, menu);
  return (
    <Header>
      <TotalStyled>
        <span className="title">Total</span>
        <CasinoEffect className={"amount"} count={formatPrice(sumToPay)}/>
      </TotalStyled>
    </Header>
  );
}

const TotalStyled = styled.div`
  height: 100%;
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.P4};

  font-weight: ${theme.fonts.weights.bold};

  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 2px;
`;

import React, { useContext } from "react";
import { theme } from "../../../../../theme/index";
import { styled } from "styled-components";
import { getPanelsConfig } from "../helper/getPanelsConfig";
import OrderContext from "../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../enums/product";

export default function AdminPanel() {
  const { tabActive, productSelected } = useContext(OrderContext);

  const hasCardSelected = productSelected !== EMPTY_PRODUCT;
  const panels = getPanelsConfig(hasCardSelected);
  return (
    <AdminPanelStyled>
      {panels.map((panel, index) => {
        console.log();
        return (
          <div
            key={index}
            className={tabActive === panel.id ? "panelActive" : "panelInActive"}
          >
            {panel.Content}
          </div>
        );
      })}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  background-color: ${theme.colors.background_white};
  color: ${theme.colors.dark};
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  padding: 25px 5%;

  .panelActive {
    display: block;
  }

  .panelInActive {
    display: none;
  }
`;

import { styled } from "styled-components";
import TabButton from "../../../reusable-ui/TabButton";
import { useContext, useState } from "react";
import { theme } from "../../../../theme/index";
import { getTabsConfig } from "./helper/getTabsConfig";
import OrderContext from "../../../../context/OrderContext";

export default function AdminTab() {
  //defaut active button add product

  const {
    isCollapsed,
    setIsCollapsed,
    tabCurrentName,
    setTabCurrentName,
    tabActive,
    setTabActive,
  } = useContext(OrderContext);

  const handleClick = (event) => {
    var idSelected = event.currentTarget.id;
    if (idSelected === "collapsed") {
      setIsCollapsed(!isCollapsed);
      console.log(isCollapsed);
    } else {
      setTabActive(idSelected);
      //collapsed panel when click Tab != collapsed
      setIsCollapsed(true);
    }
    setTabCurrentName(idSelected);
  };

  const tabs = getTabsConfig(isCollapsed);

  return (
    <AdminTabStyled>
      {/*
      <TabButton id="add"
        Icon={<AiOutlinePlus />}
        label={"Ajouter un produit"}
        onClick={handleClick}
        className={tabCurrentName == "add" || tabActive == "add"  ? "is-active" : ""}       
      />
       */}
      {tabs.map((tab) => {
        return (
          <TabButton
            key={tab.id}
            id={tab.id}
            label={tab.label}
            className={
              tabCurrentName == tab.id || tabActive == tab.id ? "is-active" : ""
            }
            Icon={tab.Icon}
            onClick={handleClick}
          />
        );
      })}
    </AdminTabStyled>
  );
}

const AdminTabStyled = styled.div`
  display: flex;
  padding: 0 20px;
  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }
  button {
    margin-left: 1px;
  }
`;

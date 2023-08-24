import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import TabButton from "../reusable-ui/TabButton";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../theme";
import IsActiveContext from "../context/IsActiveContext";

export default function AdminTab() {

  const [isActive,setIsActive] = useState("add");

  //value Context
  const isActiveContextValue = {
    isActive,
    setIsActive,
    onClick:(event) => {
      console.log(event.currentTarget.id);
      setIsActive(event.currentTarget.id);    
      console.log(isActive);
    }
  };

  const handleClick = (event) => {
    console.log(event.currentTarget.id);
    setIsActive(event.currentTarget.id);    
    console.log(isActive);
  };
  
  return (
    <AdminTabStyled>
      <IsActiveContext.Provider value={isActiveContextValue}>
        <TabButton id="default" 
          Icon={<FiChevronDown className="icon" />}
        />
      </IsActiveContext.Provider>
      <IsActiveContext.Provider value={isActiveContextValue}>
        <TabButton id="add"
          Icon={<AiOutlinePlus className="icon" />}
          label={"Ajouter un produit"}
        />
      </IsActiveContext.Provider>
      <IsActiveContext.Provider value={isActiveContextValue}>
        <TabButton id="edit"
          Icon={<MdModeEditOutline className="icon" />}
          label={"Modifier un produit"}
        />
       </IsActiveContext.Provider>
    </AdminTabStyled>   
  );
}

const AdminTabStyled = styled.div`
  overflow: hidden;
  display: flex;
  margin-left: 50px;
  border-bottom: 1px solid ${theme.colors.greyLight};
 
  .containTab {
  }
  /* Style the tab content */
  .tabcontent {
    display: none;
    padding: 6px 12px;
    border-top: 1px solid ${theme.colors.greyLight};
  }
`;

import { styled } from "styled-components";
import TabButton from "../../reusable-ui/TabButton";
import { FiChevronDown,FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useContext, useState } from "react";
import IsActiveTabContext from "../../context/IsActiveTabContext";

export default function AdminTab() {

  const {isActive,setIsActive} = useContext(IsActiveTabContext)

  const handleClick = (event) => {
    setIsActive(event.currentTarget.id);    
  };
  
  return (
    <AdminTabStyled>
      <TabButton id="default" 
        Icon={<FiChevronDown className="icon" />}
        onClick={handleClick}
      />
      <TabButton id="add"
        Icon={<AiOutlinePlus className="icon" />}
        label={"Ajouter un produit"}
        onClick={handleClick}
      />
      <TabButton id="edit"
        Icon={<MdModeEditOutline className="icon" />}
        label={"Modifier un produit"}
        onClick={handleClick}
      />
    </AdminTabStyled>   
  );
}

const AdminTabStyled = styled.div`
  display: flex;  
  padding: 0 20px; 
`;

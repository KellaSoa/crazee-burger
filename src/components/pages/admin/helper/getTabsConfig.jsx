
import { FiChevronDown,FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const getTabsConfig = (isCollapsed, handleClick, tabName,tabActive,defaultBtnActive) =>[
    {
      id:"collapsed", 
      label:"",
      className: isCollapsed ? "is-active" : "",
      Icon:isCollapsed ? <FiChevronUp /> : <FiChevronDown /> ,
      onClick:handleClick ,
    },
    {
      id:"add",
      Icon:<AiOutlinePlus />,
      label:"Ajouter un produit",
      onClick:handleClick,  
      className:tabName == "add" || tabActive == "add" || defaultBtnActive =="default" ? "is-active" : "",
    },
    {
      id:"edit",
      Icon:<MdModeEditOutline />,
      label:"Modifier un produit",
      onClick:handleClick,
      className:tabName == "edit" || tabActive == "edit" ? "is-active" : "",
    }

  ]
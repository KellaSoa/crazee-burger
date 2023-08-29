
import { FiChevronDown,FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const getTabsConfig = (isCollapsed) =>[
    {//exeption for collapsed
      id:"collapsed", 
      label:"",
      Icon:isCollapsed ? <FiChevronUp /> : <FiChevronDown /> ,
      className: isCollapsed ? "is-active" : "",
    },
    {
      id:"add",
      Icon:<AiOutlinePlus />,
      label:"Ajouter un produit", 
    },
    {
      id:"edit",
      Icon:<MdModeEditOutline />,
      label:"Modifier un produit",
    }

  ]
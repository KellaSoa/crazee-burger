import { styled } from "styled-components";
import TabButton from "../../reusable-ui/TabButton";
import { FiChevronDown,FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useContext, useState} from "react";
import { theme } from "../../../theme";
import TabContext from "../../context/TabContext";
import TabActiveContext from "../../context/TabActiveContext";
 
export default function AdminTab({isCollapsed,setIsCollapsed} ) {
  //defaut active button add product
  const [defaultBtnActive, setDefaultBtnActive] = useState("default");
  const {tabName,setTabName} = useContext(TabContext)
  const {tabActive, setTabActive} = useContext(TabActiveContext)  
  

  const handleClick = (event) => {
    var idSelected = event.currentTarget.id;
    if ( idSelected=="collapsed"){
      setIsCollapsed(!isCollapsed);  
    }else{
      setTabActive(idSelected);
      //collapsed panel when click Tab != collapsed  
      setIsCollapsed(true);
    }     
    setTabName(idSelected);
    setDefaultBtnActive("")
  };
  
  return (
    <AdminTabStyled>
      <TabButton id="collapsed" 
        className={isCollapsed ? "is-active" : ""}
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown /> }
        onClick={handleClick} 
      />
      <TabButton id="add"
        Icon={<AiOutlinePlus />}
        label={"Ajouter un produit"}
        onClick={handleClick}
        className={tabName == "add" || tabActive == "add" || defaultBtnActive =="default" ? "is-active" : ""}       
      />
      <TabButton id="edit"
        Icon={<MdModeEditOutline />}
        label={"Modifier un produit"}
        onClick={handleClick}
        className={tabName == "edit" || tabActive == "edit" ? "is-active" : ""}
      />
    </AdminTabStyled>   
  );
}

const AdminTabStyled = styled.div`
  display: flex;  
  padding: 0 20px; 
  .is-active{
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }
  button{
    margin-left: 1px;
  }
`;

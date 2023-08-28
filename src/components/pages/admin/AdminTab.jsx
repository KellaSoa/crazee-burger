import { styled } from "styled-components";
import TabButton from "../../reusable-ui/TabButton";
import { useContext, useState} from "react";
import { theme } from "../../../theme";
import TabContext from "../../context/TabContext";
import TabActiveContext from "../../context/TabActiveContext";
import { getTabsConfig } from "./helper/getTabsConfig";
 
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

  const tabs= getTabsConfig(isCollapsed,handleClick,tabName,tabActive,defaultBtnActive);
  
  
  return (
    <AdminTabStyled>
      {/*
      <TabButton id="add"
        Icon={<AiOutlinePlus />}
        label={"Ajouter un produit"}
        onClick={handleClick}
        className={tabName == "add" || tabActive == "add" || defaultBtnActive =="default" ? "is-active" : ""}       
      />
       */}
      {tabs.map((tab)=>{
        return <TabButton 
          key={tab.id}
          id={tab.id} 
          label={tab.label}
          className={tab.className}
          Icon={tab.Icon}
          onClick={tab.onClick} 
      />
      })}
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

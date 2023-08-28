import { styled } from "styled-components";
import TabButton from "../../reusable-ui/TabButton";
import { useContext, useState} from "react";
import { theme } from "../../../theme";
import TabCurrentName from "../../context/TabCurrentName";
import TabActiveContext from "../../context/TabActiveContext";
import { getTabsConfig } from "./helper/getTabsConfig";
 
export default function AdminTab({isCollapsed,setIsCollapsed} ) {
  //defaut active button add product
  const [defaultActiveBtn, setDefaultActiveBtn] = useState("add");
  const {tabCurrentName, setTabCurrentName} = useContext(TabCurrentName)
  const {tabActive, setTabActive} = useContext(TabActiveContext)  
  
  console.log(defaultActiveBtn)
  const handleClick = (event) => {
    var idSelected = event.currentTarget.id;
    if ( idSelected === "collapsed"){
      setIsCollapsed(!isCollapsed);  
    }else{
      setTabActive(idSelected);
      //collapsed panel when click Tab != collapsed  
      setIsCollapsed(true);
    }     
    setTabCurrentName(idSelected);
    setDefaultActiveBtn(false)
  };

  const tabs= getTabsConfig(isCollapsed,tabCurrentName,tabActive,defaultActiveBtn);
  
  
  return (
    <AdminTabStyled>
      {/*
      <TabButton id="add"
        Icon={<AiOutlinePlus />}
        label={"Ajouter un produit"}
        onClick={handleClick}
        className={tabCurrentName == "add" || tabActive == "add" || defaultActiveBtn =="add" ? "is-active" : ""}       
      />
       */}
      {tabs.map((tab)=>{
        console.log(defaultActiveBtn)
        return <TabButton 
          key={tab.id}
          id={tab.id} 
          label={tab.label}
          className={ tabCurrentName == tab.id || tabActive == tab.id || tab.id === defaultActiveBtn  ? "is-active" : ""}
          Icon={tab.Icon}
          onClick={handleClick} 
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

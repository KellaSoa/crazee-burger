import React, { useState } from 'react'
import AdminTab from './AdminTab'
import AdminPanel from './AdminPanel'
import { styled } from 'styled-components';
import TabContent from '../../context/TabContext';
import TabActiveContext from '../../context/TabActiveContext';

export default function Admin() {
 
  const [tabName,setTabName] = useState("");
  const [tabActive, setTabActive] = useState("");
  const [isCollapsed,setIsCollapsed] = useState(false);

  const tabContentValue ={
    tabName,setTabName
  }
  const tabActiveContextValue ={
    tabActive, setTabActive
  }


  return (
    <TabContent.Provider value={tabContentValue}>
      <TabActiveContext.Provider value={tabActiveContextValue}>
        <AdminStyled>
            <AdminTab isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
            {isCollapsed && <AdminPanel/>}
        </AdminStyled>      
      </TabActiveContext.Provider>
    </TabContent.Provider>
  )
}

const AdminStyled = styled.div`    
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
   
`;

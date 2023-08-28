import React, { useState } from 'react'
import AdminTab from './AdminTab'
import AdminPanel from './AdminPanel'
import { styled } from 'styled-components';
import TabCurrentName from '../../context/TabCurrentName';
import TabActiveContext from '../../context/TabActiveContext';

export default function Admin() {
 
  const [tabCurrentName, setTabCurrentName] = useState("");
  const [tabActive, setTabActive] = useState("");
  const [isCollapsed,setIsCollapsed] = useState(false);

  const TabCurrentNameValue ={
    tabCurrentName, setTabCurrentName
  }
  const tabActiveContextValue ={
    tabActive, setTabActive
  }


  return (
    <TabCurrentName.Provider value={TabCurrentNameValue}>
      <TabActiveContext.Provider value={tabActiveContextValue}>
        <AdminStyled>
            <AdminTab isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
            {isCollapsed && <AdminPanel/>}
        </AdminStyled>      
      </TabActiveContext.Provider>
    </TabCurrentName.Provider>
  )
}

const AdminStyled = styled.div`    
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
   
`;

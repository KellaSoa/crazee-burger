import React, { useState } from 'react'
import AdminTab from './AdminTab'
import AdminPanel from './AdminPanel'
import { styled } from 'styled-components';
import { theme } from '../../../theme';
import IsActiveTabContext from '../../context/IsActiveTabContext';

export default function Admin() {

  const [isActive,setIsActive] = useState("");

  const isActiveTabContextValue ={
    isActive,setIsActive
  }

  return (
    <IsActiveTabContext.Provider value={isActiveTabContextValue}>
      <AdminStyled>
          <AdminTab/>
          <AdminPanel/>
      </AdminStyled>
    </IsActiveTabContext.Provider>
  )
}

const AdminStyled = styled.div`    
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
   
`;

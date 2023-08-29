import React, { useContext } from 'react'
import AdminTab from './AdminTab'
import AdminPanel from './AdminPanel'
import { styled } from 'styled-components';
import OrderContext from '../../../context/OrderContext';

export default function Admin() {
  
  const {isCollapsed} = useContext(OrderContext)

  return (
    <AdminStyled>
        <AdminTab/>
        {isCollapsed && <AdminPanel/>}
    </AdminStyled>  
  )
}

const AdminStyled = styled.div`    
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
   
`;

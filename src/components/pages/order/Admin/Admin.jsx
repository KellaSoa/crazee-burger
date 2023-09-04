import React, { useContext } from 'react'
import AdminTab from './AdminTab'
import { styled } from 'styled-components';
import OrderContext from '../../../context/OrderContext';
import AdminPanel from './AdminPanel/AdminPanel';

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
   z-index: 2;
`;

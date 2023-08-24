import React from 'react'
import AdminTab from './AdminTab'
import AdminPanel from './AdminPanel'
import { styled } from 'styled-components';

export default function Admin() {
  return (
    <AdminStyled>
        <AdminTab/>
        <AdminPanel/>
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
    height: 250px;
    background: red;  
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
`;

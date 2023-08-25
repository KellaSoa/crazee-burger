import React from 'react'
import AdminTab from './AdminTab'
import AdminPanel from './AdminPanel'
import { styled } from 'styled-components';
import { theme } from '../../theme';

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
    background: ${theme.colors.background_white};
    border: 1px solid  ${theme.colors.background_white};
    box-shadow: 0px -6px 8px -2px ${theme.colors.dark};
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
`;

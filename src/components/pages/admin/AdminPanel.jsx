import React, { useContext } from 'react'
import IsActiveContext from '../../context/IsActiveTabContext';
import { theme } from '../../../theme';
import { styled } from 'styled-components';
import IsActiveTabContext from '../../context/IsActiveTabContext';

export default function AdminPanel() {

    const {isActive,setIsActive} = useContext(IsActiveTabContext)
    return (
        <AdminPanelStyled>            
            <div className={isActive == 'default'? 'panelActive':'panelInActive'}></div>
            <div className={isActive == 'add'? 'panelActive':'panelInActive'}>Ajouter Produit</div>
            <div className={isActive == 'edit'? 'panelActive':'panelInActive'}>Modifier Produit</div>
        </AdminPanelStyled>
    )
}

const AdminPanelStyled = styled.div`
background-color: ${theme.colors.background_white};
color: ${theme.colors.dark};

.panelActive{
    display: block;
}

.panelInActive{
    display: none;
}
`;
import React, { useContext } from 'react'
import IsActiveContext from '../context/IsActiveContext';
import { theme } from '../../theme';
import { styled } from 'styled-components';

export default function AdminPanel() {

    const infoActive = useContext(IsActiveContext);
    console.log(infoActive);
    return (
        <AdminPanelStyled>            
            <div className={infoActive.isActive == 'default'? 'panelActive':'panelInActive'}></div>
            <div className={infoActive.isActive == 'add'? 'panelActive':'panelInActive'}>Ajouter Produit</div>
            <div className={infoActive.isActive == 'edit'? 'panelActive':'panelInActive'}>Modifier Produit</div>
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
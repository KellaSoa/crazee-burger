import React, { useContext } from 'react'
import TabContext from '../../context/TabContext';
import { theme } from '../../../theme';
import { styled } from 'styled-components';
import TabActiveContext from '../../context/TabActiveContext';

export default function AdminPanel() {

    const {tabName,setTabName} = useContext(TabContext)
    const {tabActive, setTabActive} = useContext(TabActiveContext)

    return (
        <AdminPanelStyled>            
            <div className={tabName == 'collapsed'? 'panelActive':'panelInActive'}></div>
            <div className={tabName == "add" || tabActive == "add"? 'panelActive':'panelInActive'}>Ajouter Produit</div>
            <div className={tabName == 'edit' || tabActive == "edit"? 'panelActive':'panelInActive'}>Modifier Produit</div>
        </AdminPanelStyled>
    )
}

const AdminPanelStyled = styled.div`
    background-color: ${theme.colors.background_white};
    color: ${theme.colors.dark};
    height: 250px;
    background: ${theme.colors.white};
    border: 1px solid  ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};

    .panelActive{
        display: block;
    }

    .panelInActive{
        display: none;
    }
`;
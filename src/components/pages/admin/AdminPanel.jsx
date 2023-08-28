import React, { useContext } from 'react'
import TabContext from '../../context/TabContext';
import { theme } from '../../../theme';
import { styled } from 'styled-components';
import TabActiveContext from '../../context/TabActiveContext';

export default function AdminPanel() {

    const {tabName,setTabName} = useContext(TabContext)
    const {tabActive, setTabActive} = useContext(TabActiveContext)

    const panelsConfig = [
        {
            className: tabName == 'collapsed'? 'panelActive':'panelInActive',
            text: "",
        },
        {
            className: tabName == "add" || tabActive == "add"? 'panelActive':'panelInActive',
            text: "Ajouter Produit"
        },
        {
            className: tabName == 'edit' || tabActive == "edit"? 'panelActive':'panelInActive',
            text: "Modifier Produit"
        },
        
        
    ]

    return (
        <AdminPanelStyled>            
           {panelsConfig.map((panel,index)=>{
                return <div key={index} className={panel.className}>{panel.text}</div>
           })} 
            {/* <div className={tabName == "add" || tabActive == "add"? 'panelActive':'panelInActive'}>Ajouter Produit</div> */}
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